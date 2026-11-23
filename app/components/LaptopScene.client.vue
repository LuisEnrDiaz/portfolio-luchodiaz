<script setup lang="ts">
import type { CanvasTexture, Group, Mesh, MeshBasicMaterial, WebGLRenderer } from 'three'
import { experiences, site } from '~/data/portfolio'

let dead = false

/** Rango de escritorio: por debajo no se carga three y el sitio funciona sin 3D. */
const DESKTOP = '(min-width: 900px)'

interface Pose {
  x: number
  y: number
  z: number
  rx: number
  ry: number
  rz: number
  s: number
  open: number
  /** Pantalla visible: 0 captura de wewelcom.io, 1 perfil, 2 productos, 3 proyecto, 4 contacto. */
  screen: number
}

/** Un fotograma clave por sección: el portátil baja por la página y cambia de lado. */
const poses: Record<string, Pose> = {
  inicio: { x: 2.1, y: 0.55, z: 0, rx: 0.3, ry: -0.5, rz: 0, s: 0.95, open: 1, screen: 0 },
  'sobre-mi': { x: -1.8, y: 0.1, z: 0.4, rx: 0.22, ry: 0.75, rz: 0.04, s: 1, open: 1, screen: 1 },
  experiencia: { x: 2.3, y: -0.5, z: 0, rx: 0.6, ry: -0.7, rz: -0.04, s: 0.85, open: 1, screen: 2 },
  proyectos: { x: 0, y: -7.5, z: -2, rx: 0.4, ry: 0, rz: 0, s: 0.8, open: 1, screen: 3 },
  contacto: { x: 2.4, y: -0.2, z: 0, rx: 0.15, ry: -0.45, rz: 0, s: 1, open: 0.55, screen: 4 },
}
const order = ['inicio', 'sobre-mi', 'experiencia', 'proyectos', 'contacto']

let renderer: WebGLRenderer | undefined
let raf = 0
let teardown: (() => void) | undefined

onMounted(() => {
  init().catch((error) => console.error('[scene] fallo', error))
})

async function init() {
  if (!window.matchMedia(DESKTOP).matches) return
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const THREE = await import('three')
  const { RoundedBoxGeometry } = await import('three/addons/geometries/RoundedBoxGeometry.js')
  const { RoomEnvironment } = await import('three/addons/environments/RoomEnvironment.js')
  const { gsap, ScrollTrigger } = useGsap()
  if (dead) return

  const el = document.createElement('canvas')
  el.className = 'laptop-scene'
  el.setAttribute('aria-hidden', 'true')
  document.body.prepend(el)

  try {
    renderer = new THREE.WebGLRenderer({ canvas: el, alpha: true, antialias: true })
  }
  catch {
    el.remove()
    return
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50)
  camera.position.set(0, 0, 9)

  // Reflejos de estudio: lo que hace que el aluminio parezca aluminio.
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  const pmrem = new THREE.PMREMGenerator(renderer)
  const envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
  scene.environment = envMap

  const key = new THREE.DirectionalLight(0xffffff, 1.1)
  key.position.set(3, 4, 5)
  scene.add(key)
  const rim = new THREE.PointLight(0xffc933, 16, 12)
  rim.position.set(-3, 2, -2)
  scene.add(rim)

  // Portátil de 14" construido con primitivas (1 unidad = 10 cm): sin modelos externos.
  const W = 3.12
  const D = 2.21
  const T = 0.155
  const LID = 0.07

  const alu = new THREE.MeshPhysicalMaterial({
    color: 0xb4b8c0,
    metalness: 1,
    roughness: 0.32,
    clearcoat: 0.15,
    clearcoatRoughness: 0.4,
  })
  const darkAlu = new THREE.MeshStandardMaterial({ color: 0x2a2c31, metalness: 0.9, roughness: 0.45 })
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x050506,
    roughness: 0.08,
    metalness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
  })

  const laptop = new THREE.Group()
  laptop.add(new THREE.Mesh(new RoundedBoxGeometry(W, T, D, 6, 0.07), alu))

  // Teclado, hueco de teclas y trackpad dibujados en una textura sobre la cubierta.
  const PX = 691
  const deckW = W - 0.16
  const deckD = D - 0.16
  const kb = document.createElement('canvas')
  kb.width = Math.round(deckW * PX)
  kb.height = Math.round(deckD * PX)
  const k = kb.getContext('2d')!

  const wellX = 0.08 * PX
  const wellY = 0.05 * PX
  const wellW = (deckW - 0.16) * PX
  k.fillStyle = '#08080a'
  k.beginPath()
  k.roundRect(wellX, wellY, wellW, 1.26 * PX, 18)
  k.fill()

  const rows: { h: number, keys: [number, string][] }[] = [
    { h: 0.105, keys: [['esc', 1.07], ...Array.from({ length: 12 }, (_, i) => [`F${i + 1}`, 1.07] as [string, number]), ['', 1.07]].map(([l, w]) => [w, l] as [number, string]) },
    { h: 0.178, keys: [...'`1234567890-='.split('').map(c => [1, c] as [number, string]), [2, 'delete']] },
    { h: 0.178, keys: [[1.5, 'tab'], ...'QWERTYUIOP[]'.split('').map(c => [1, c] as [number, string]), [1.5, '\\']] },
    { h: 0.178, keys: [[1.75, 'caps'], ...'ASDFGHJKL;\''.split('').map(c => [1, c] as [number, string]), [2.25, 'return']] },
    { h: 0.178, keys: [[2.25, 'shift'], ...'ZXCVBNM,./'.split('').map(c => [1, c] as [number, string]), [2.75, 'shift']] },
    { h: 0.178, keys: [[1, 'fn'], [1, 'ctrl'], [1, 'opt'], [1.25, 'cmd'], [6.5, ''], [1.25, 'cmd'], [1, 'opt'], [2, '']] },
  ] as { h: number, keys: [number, string][] }[]

  const unit = (wellW - 0.12 * PX) / 15
  const gap = 8
  let y = wellY + 0.07 * PX
  rows.forEach((row) => {
    const keyH = row.h * PX
    let x = wellX + 0.06 * PX
    row.keys.forEach(([w, label]) => {
      const keyW = w * unit - gap
      const isReturn = label === 'return'
      const grad = k.createLinearGradient(0, y, 0, y + keyH)
      grad.addColorStop(0, isReturn ? '#ffd24d' : '#34363d')
      grad.addColorStop(1, isReturn ? '#e5ae17' : '#1d1e23')
      k.fillStyle = grad
      k.beginPath()
      k.roundRect(x, y, keyW, keyH, 12)
      k.fill()
      k.fillStyle = isReturn ? '#121317' : '#d4d7de'
      k.font = `600 ${label.length > 1 ? 26 : 38}px sans-serif`
      k.textAlign = label.length > 1 ? 'left' : 'center'
      k.textBaseline = 'middle'
      if (label) k.fillText(label.length > 1 ? label : label, label.length > 1 ? x + 14 : x + keyW / 2, y + keyH / 2)
      x += w * unit
    })
    y += keyH + gap
  })

  const tpW = 1.22 * PX
  const tpH = 0.66 * PX
  k.fillStyle = 'rgba(255,255,255,0.025)'
  k.strokeStyle = 'rgba(0,0,0,0.38)'
  k.lineWidth = 3
  k.beginPath()
  k.roundRect((kb.width - tpW) / 2, 1.42 * PX, tpW, tpH, 24)
  k.fill()
  k.stroke()

  const kbTex = new THREE.CanvasTexture(kb)
  kbTex.colorSpace = THREE.SRGBColorSpace
  kbTex.anisotropy = renderer.capabilities.getMaxAnisotropy()
  const deck = new THREE.Mesh(
    new THREE.PlaneGeometry(deckW, deckD),
    new THREE.MeshStandardMaterial({ map: kbTex, transparent: true, metalness: 0.15, roughness: 0.55 }),
  )
  deck.rotation.x = -Math.PI / 2
  deck.position.y = T / 2 + 0.0015
  laptop.add(deck)

  // Bisagra y tapa: la tapa gira alrededor del borde trasero.
  const hinge = new THREE.Group()
  hinge.position.set(0, T / 2 + 0.01, -D / 2 + 0.04)
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, W - 0.9, 24), darkAlu)
  barrel.rotation.z = Math.PI / 2
  hinge.add(barrel)

  const lid = new THREE.Mesh(new RoundedBoxGeometry(W, D, LID, 6, 0.06), alu)
  lid.position.y = D / 2 + 0.02
  hinge.add(lid)

  const front = LID / 2
  const bezel = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.05, D - 0.05), glass)
  bezel.position.set(0, D / 2 + 0.02, front + 0.002)
  hinge.add(bezel)

  const maxAniso = renderer.capabilities.getMaxAnisotropy()
  // Las demás pantallas se dibujan con contenido real del sitio, no con capturas inventadas.
  const FONT = '"Bricolage Grotesque", sans-serif'
  await Promise.all([
    document.fonts.load(`800 100px ${FONT}`),
    document.fonts.load(`600 40px ${FONT}`),
    document.fonts.load(`500 40px ${FONT}`),
  ])
  if (dead) return

  function slide(paint: (g: CanvasRenderingContext2D) => void): CanvasTexture {
    const c = document.createElement('canvas')
    c.width = 1440
    c.height = 900
    const g = c.getContext('2d')!
    g.fillStyle = '#121317'
    g.fillRect(0, 0, c.width, c.height)
    g.textBaseline = 'alphabetic'
    paint(g)
    const tex = new THREE.CanvasTexture(c)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.anisotropy = maxAniso
    return tex
  }
  function text(g: CanvasRenderingContext2D, value: string, x: number, y: number, font: string, color: string, align: CanvasTextAlign = 'left', maxWidth = 1250) {
    g.font = font
    g.fillStyle = color
    g.textAlign = align
    let out = value
    while (g.measureText(out).width > maxWidth && out.length > 1) out = out.slice(0, -1)
    g.fillText(out === value ? out : `${out.trimEnd()}…`, x, y)
  }

  const products = (experiences[0]?.products ?? []).slice(0, 4).map((line) => {
    const [name, ...rest] = line.split(': ')
    return { name: name ?? line, detail: rest.join(': ') }
  })

  // Editor de código que escribe un componente real del sitio, letra a letra, en la pantalla del hero.
  type Token = [string, 'k' | 't' | 'g' | 's']
  const COLORS = { k: '#ffc933', t: '#f1f2f4', g: '#8d939e', s: '#9ecbff' }
  const CODE: Token[][] = [
    [['<', 'g'], ['script', 'k'], [' setup lang=', 't'], ['"ts"', 's'], ['>', 'g']],
    [['import', 'k'], [' { site } ', 't'], ['from', 'k'], [' ', 't'], ["'~/data/portfolio'", 's']],
    [],
    [['const', 'k'], [' words = site.greeting.split(', 't'], ["' '", 's'], [')', 't']],
    [['</', 'g'], ['script', 'k'], ['>', 'g']],
    [],
    [['<', 'g'], ['template', 'k'], ['>', 'g']],
    [['  <', 'g'], ['section', 'k'], [' id=', 't'], ['"inicio"', 's'], ['>', 'g']],
    [['    <', 'g'], ['h1', 'k'], [' class=', 't'], ['"hero__title"', 's'], ['>', 'g']],
    [['      {{ site.greeting }}', 't']],
    [['    </', 'g'], ['h1', 'k'], ['>', 'g']],
    [['  </', 'g'], ['section', 'k'], ['>', 'g']],
    [['</', 'g'], ['template', 'k'], ['>', 'g']],
  ]
  const TOTAL = CODE.reduce((n, line) => n + line.reduce((m, [t]) => m + t.length, 0) + 1, 0) - 1
  const MONO = '"Cascadia Code", Consolas, Menlo, monospace'

  const editorCanvas = document.createElement('canvas')
  editorCanvas.width = 1440
  editorCanvas.height = 900
  const eg = editorCanvas.getContext('2d')!
  const editorTex = new THREE.CanvasTexture(editorCanvas)
  editorTex.colorSpace = THREE.SRGBColorSpace
  editorTex.anisotropy = maxAniso

  function renderEditor(count: number, cursorOn: boolean) {
    const g = eg
    g.fillStyle = '#121317'
    g.fillRect(0, 0, 1440, 900)

    // Pestaña activa y barra de estado.
    g.fillStyle = '#1a1c22'
    g.fillRect(0, 0, 1440, 72)
    g.fillStyle = '#121317'
    g.fillRect(24, 12, 380, 60)
    g.fillStyle = '#ffc933'
    g.fillRect(24, 12, 380, 4)
    text(g, 'SectionHero.vue', 52, 54, `600 28px ${FONT}`, '#f1f2f4', 'left', 330)
    g.fillStyle = '#1a1c22'
    g.fillRect(0, 852, 1440, 48)
    text(g, 'Vue', 1340, 884, `500 24px ${FONT}`, '#8d939e', 'right', 120)

    // Código: se dibuja solo lo escrito hasta ahora.
    let left = count
    let cur = { line: 0, x: 150 }
    for (let li = 0; li < CODE.length; li++) {
      if (left < 0) break
      const y = 148 + li * 56
      g.font = `500 28px ${MONO}`
      g.fillStyle = '#5b606b'
      g.textAlign = 'right'
      g.fillText(String(li + 1), 100, y)
      let x = 150
      for (const [t, c] of CODE[li]!) {
        const part = t.slice(0, Math.max(0, left))
        if (part) {
          g.font = `500 34px ${MONO}`
          g.fillStyle = COLORS[c]
          g.textAlign = 'left'
          g.fillText(part, x, y)
          x += g.measureText(part).width
        }
        left -= t.length
      }
      cur = { line: li, x }
      left -= 1
    }
    if (cursorOn) {
      g.fillStyle = '#ffc933'
      g.fillRect(cur.x + 3, 148 + cur.line * 56 - 34, 5, 46)
    }
    text(g, `Ln ${cur.line + 1}`, 120, 884, `500 24px ${FONT}`, '#8d939e', 'left', 200)
    editorTex.needsUpdate = true
  }

  const slides: CanvasTexture[] = [
    editorTex,
    slide((g) => {
      text(g, 'Lucho Díaz', 96, 380, `800 170px ${FONT}`, '#f1f2f4')
      text(g, site.role, 96, 470, `500 52px ${FONT}`, '#aab0ba')
      text(g, 'WeWelcom, desde 2022', 96, 580, `700 56px ${FONT}`, '#ffc933')
      text(g, site.location, 96, 660, `500 40px ${FONT}`, '#8d939e')
    }),
    slide((g) => {
      text(g, 'Productos en producción', 96, 170, `800 80px ${FONT}`, '#f1f2f4')
      products.forEach((item, i) => {
        const y = 330 + i * 140
        g.fillStyle = '#ffc933'
        g.fillRect(96, y - 40, 18, 18)
        text(g, item.name, 140, y - 20, `700 56px ${FONT}`, '#f1f2f4')
        text(g, item.detail, 140, y + 30, `500 34px ${FONT}`, '#aab0ba', 'left', 1180)
      })
    }),
    slide((g) => {
      text(g, 'Madrid al Paso', 96, 280, `800 130px ${FONT}`, '#f1f2f4')
      text(g, 'Próximas llegadas de los autobuses de la EMT, en tiempo real', 96, 360, `500 40px ${FONT}`, '#aab0ba')
      const stops = ['Arturo Soria', 'Plaza del Perú', 'Nuevos Ministerios', 'Sol']
      const xs = [190, 540, 900, 1250]
      g.strokeStyle = '#ffc933'
      g.lineWidth = 8
      g.beginPath()
      g.moveTo(xs[0]!, 600)
      xs.forEach(x => g.lineTo(x, 600))
      g.stroke()
      stops.forEach((name, i) => {
        g.fillStyle = '#121317'
        g.strokeStyle = '#f1f2f4'
        g.lineWidth = 8
        g.beginPath()
        g.arc(xs[i]!, 600, 24, 0, Math.PI * 2)
        g.fill()
        g.stroke()
        text(g, name, xs[i]!, 690, `600 32px ${FONT}`, '#f1f2f4', 'center', 330)
      })
      text(g, 'Línea 150, EMT Madrid', 96, 810, `500 34px ${FONT}`, '#8d939e')
    }),
    slide((g) => {
      text(g, 'Escríbeme', 96, 470, `800 200px ${FONT}`, '#f1f2f4')
      text(g, site.email, 96, 580, `600 56px ${FONT}`, '#ffc933')
    }),
  ]

  const SCREEN_W = W - 0.16
  const SCREEN_H = SCREEN_W / 1.6
  const screenY = D + 0.02 - 0.09 - SCREEN_H / 2
  const matA: MeshBasicMaterial = new THREE.MeshBasicMaterial({ map: slides[0]!, toneMapped: false })
  const matB: MeshBasicMaterial = new THREE.MeshBasicMaterial({ map: slides[1]!, toneMapped: false, transparent: true, opacity: 0, depthWrite: false })
  const screenA: Mesh = new THREE.Mesh(new THREE.PlaneGeometry(SCREEN_W, SCREEN_H), matA)
  const screenB: Mesh = new THREE.Mesh(new THREE.PlaneGeometry(SCREEN_W, SCREEN_H), matB)
  screenA.position.set(0, screenY, front + 0.004)
  screenB.position.set(0, screenY, front + 0.0045)
  hinge.add(screenA, screenB)

  const notch = new THREE.Mesh(
    new THREE.PlaneGeometry(0.34, 0.055),
    new THREE.MeshBasicMaterial({ color: 0x000000 }),
  )
  notch.position.set(0, D + 0.02 - 0.09 - 0.0275, front + 0.006)
  hinge.add(notch)
  const lens = new THREE.Mesh(
    new THREE.CircleGeometry(0.013, 16),
    new THREE.MeshBasicMaterial({ color: 0x1b2330 }),
  )
  lens.position.set(0, D + 0.02 - 0.09 - 0.0275, front + 0.007)
  hinge.add(lens)
  laptop.add(hinge)

  const root: Group = new THREE.Group()
  root.add(laptop)
  laptop.position.y = -0.7
  scene.add(root)

  // Estado único que mueven GSAP (scroll) y la entrada (tiempo).
  const state: Pose & { intro: number, t: number, typed: number } = { ...poses.inicio!, intro: reduced ? 1 : 0, t: 0, typed: reduced ? TOTAL : 0 }
  const CLOSED = Math.PI / 2
  const OPEN = -0.3

  /** Caja del portátil proyectada en pantalla (px), medida con sus vértices reales. */
  function projectedBox() {
    camera.updateMatrixWorld(true)
    root.updateMatrixWorld(true)
    const v = new THREE.Vector3()
    let minX = Infinity
    let maxX = -Infinity
    let minY = Infinity
    let maxY = -Infinity
    root.traverse((o) => {
      const m = o as Mesh
      if (!m.geometry) return
      m.geometry.computeBoundingBox()
      const bb = m.geometry.boundingBox!
      for (const x of [bb.min.x, bb.max.x]) {
        for (const y of [bb.min.y, bb.max.y]) {
          for (const z of [bb.min.z, bb.max.z]) {
            v.set(x, y, z).applyMatrix4(m.matrixWorld).project(camera)
            const px = ((v.x + 1) / 2) * window.innerWidth
            const py = ((1 - v.y) / 2) * window.innerHeight
            minX = Math.min(minX, px)
            maxX = Math.max(maxX, px)
            minY = Math.min(minY, py)
            maxY = Math.max(maxY, py)
          }
        }
      }
    })
    return { minX, maxX, minY, maxY }
  }

  /**
   * Centra el portátil del hero: en horizontal, en la columna libre a la derecha del texto;
   * en vertical, en el centro del bloque de texto. Mide la caja proyectada y corrige a cualquier ancho.
   */
  function fitHero() {
    const content = document.querySelector('.hero__content')
    const box = document.querySelector('#inicio .u-container')
    if (!content || !box) return
    const text = content.getBoundingClientRect()
    const padRight = Number.parseFloat(getComputedStyle(box).paddingRight) || 0
    const colLeft = text.right
    const colRight = box.getBoundingClientRect().right - padRight
    if (colRight - colLeft < 240) return

    const targetX = (colLeft + colRight) / 2
    const targetY = text.top + window.scrollY + text.height / 2
    const perPx = (2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) / window.innerHeight
    const fit = Math.min(1, camera.aspect / 1.6)
    const pose = poses.inicio!

    hinge.rotation.x = OPEN
    for (let i = 0; i < 5; i++) {
      root.position.set(pose.x * fit, pose.y, pose.z)
      root.rotation.set(pose.rx, pose.ry, pose.rz)
      root.scale.setScalar(pose.s * fit)
      const b = projectedBox()
      if (i === 0) {
        // Primero el tamaño: algo más ancho que la columna libre, sin pasar de 1.
        pose.s = Math.min(1, Math.max(0.5, (pose.s * (colRight - colLeft) * 1.1) / (b.maxX - b.minX)))
        continue
      }
      pose.x += (targetX - (b.minX + b.maxX) / 2) * perPx / fit
      pose.y -= (targetY - (b.minY + b.maxY) / 2) * perPx
    }
    if (window.scrollY < 50) {
      state.x = pose.x
      state.y = pose.y
      state.s = pose.s
    }
  }

  function resize() {
    const w = window.innerWidth
    const h = window.innerHeight
    renderer!.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    fitHero()
  }

  function draw() {
    const open = state.open * state.intro
    const idx = Math.min(Math.max(state.screen, 0), slides.length - 1)
    const a = Math.floor(idx)
    const b = Math.min(a + 1, slides.length - 1)
    matA.map = slides[a]!
    matB.map = slides[b]!
    matB.opacity = idx - a
    hinge.rotation.x = CLOSED + (OPEN - CLOSED) * open
    const fit = Math.min(1, camera.aspect / 1.6)
    root.position.set(state.x * fit, state.y, state.z)
    root.rotation.set(state.rx, state.ry, state.rz)
    root.scale.setScalar(state.s * fit)
    renderer!.render(scene, camera)
  }

  // Solo se redibuja cuando algo cambia. El editor escribe una vez y el código queda escrito, sin cursor: sin movimiento perpetuo.
  let last = ''
  let lastTyped = -1
  function loop() {
    const typed = Math.floor(state.typed)
    const typing = typed < TOTAL
    const snapshot = `${state.x}|${state.y}|${state.z}|${state.rx}|${state.ry}|${state.rz}|${state.s}|${state.open}|${state.intro}|${state.screen}|${typed}`
    if (typing || typed !== lastTyped) {
      renderEditor(typed, typing && Math.floor(performance.now() / 450) % 2 === 0)
      lastTyped = typed
      last = ''
    }
    if (snapshot !== last || typing) {
      last = snapshot
      draw()
    }
    raf = requestAnimationFrame(loop)
  }

  resize()
  window.addEventListener('resize', resize)
  document.documentElement.classList.add('has-scene')

  const pv = (p: Pose) => Object.fromEntries(Object.keys(p).map(k => [k, () => p[k as keyof Pose]]))
  let ctx: gsap.Context | undefined
  renderEditor(Math.floor(state.typed), !reduced)
  if (reduced) {
    draw()
  }
  else {
    ctx = gsap.context(() => {
      gsap.to(state, { intro: 1, duration: 1.8, delay: 0.5, ease: 'power3.inOut' })
      gsap.to(state, { typed: TOTAL, duration: TOTAL / 30, delay: 2.4, ease: 'none' })
      order.slice(1).forEach((id, i) => {
        const trigger = document.getElementById(id)
        if (!trigger) return
        gsap.fromTo(
          state,
          pv(poses[order[i]!]!),
          {
            ...pv(poses[id]!),
            ease: 'none',
            immediateRender: false,
            scrollTrigger: id === 'contacto'
              ? { trigger, start: 'top bottom', end: 'bottom bottom', scrub: 0.8, invalidateOnRefresh: true }
              : { trigger, start: 'top 90%', end: 'top 20%', scrub: 0.8, invalidateOnRefresh: true },
          },
        )
      })
    })
    raf = requestAnimationFrame(loop)
    ScrollTrigger.refresh()
  }

  teardown = () => {
    window.removeEventListener('resize', resize)
    document.documentElement.classList.remove('has-scene')
    ctx?.revert()
    cancelAnimationFrame(raf)
    scene.traverse((o) => {
      const m = o as Mesh
      m.geometry?.dispose()
    })
    kbTex.dispose()
    slides.forEach(t => t.dispose())
    matA.dispose()
    matB.dispose()
    alu.dispose()
    darkAlu.dispose()
    glass.dispose()
    envMap.dispose()
    pmrem.dispose()
    el.remove()
  }
}

onBeforeUnmount(() => {
  dead = true
  teardown?.()
  renderer?.dispose()
})
</script>

<template>
  <span hidden />
</template>

<style>
.laptop-scene {
  position: fixed;
  inset: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}

@media (max-width: 899px) {
  .laptop-scene {
    display: none;
  }
}
</style>
