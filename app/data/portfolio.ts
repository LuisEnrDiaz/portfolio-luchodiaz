export interface NavLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  year: string
  tags: string[]
  href?: string
  tone: 'forest' | 'stone' | 'mist' | 'ink'
}

export interface TechGroup {
  label: string
  items: string[]
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
}

export interface Interest {
  id: string
  label: string
  hint: string
}

export const site = {
  name: 'Lucho Díaz',
  role: 'Frontend Developer',
  description:
    'Vue 3 y TypeScript · Desarrollo interfaces de aplicaciones SaaS centradas en la experiencia de usuario',
  email: 'hola@luchodiaz.dev',
  location: 'España',
  socials: [
    { label: 'GitHub', href: 'https://github.com/', icon: 'lucide:github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'lucide:linkedin' },
    { label: 'Email', href: 'mailto:hola@luchodiaz.dev', icon: 'lucide:mail' },
  ],
}

export const navLinks: NavLink[] = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contacto', href: '#contacto' },
]

export const projects: Project[] = [
  {
    id: 'atelier',
    title: 'Atelier',
    subtitle: 'Plataforma creativa',
    description:
      'Un espacio digital para estudios de diseño. Flujos limpios, tipografía editorial y una interfaz que deja respirar el contenido.',
    year: '2025',
    tags: ['Nuxt', 'TypeScript', 'Design System'],
    tone: 'forest',
  },
  {
    id: 'summit',
    title: 'Summit',
    subtitle: 'App de rutas',
    description:
      'Herramienta para planificar salidas de montaña. Mapas claros, datos esenciales y una UX calmada incluso con poca cobertura.',
    year: '2024',
    tags: ['Vue', 'Node', 'Maps API'],
    tone: 'stone',
  },
  {
    id: 'vinyl',
    title: 'Vinyl Room',
    subtitle: 'Colección musical',
    description:
      'Catálogo personal de música con búsqueda inmediata, filtros sutiles y una presentación casi analógica del contenido.',
    year: '2024',
    tags: ['React', 'PostgreSQL', 'API'],
    tone: 'mist',
  },
  {
    id: 'frame',
    title: 'Frame',
    subtitle: 'CMS ligero',
    description:
      'Un CMS minimalista para portfolios y revistas digitales. Edición precisa, preview en tiempo real y despliegue sencillo.',
    year: '2023',
    tags: ['Next.js', 'Prisma', 'Auth'],
    tone: 'ink',
  },
]

export const techGroups: TechGroup[] = [
  {
    label: 'Frontend',
    items: ['Vue', 'Nuxt', 'React', 'TypeScript', 'CSS', 'Design Systems'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'REST', 'GraphQL'],
  },
  {
    label: 'Tooling',
    items: ['Git', 'Docker', 'CI/CD', 'Vitest', 'Figma', 'Observability'],
  },
]

export const experiences: Experience[] = [
  {
    company: 'Estudio Norte',
    role: 'Full Stack Developer',
    period: '2023 — Actualidad',
    description:
      'Diseño e implemento productos web de extremo a extremo. Priorizo claridad en la arquitectura, interfaces sobrias y entregas sostenibles.',
  },
  {
    company: 'Lumen Digital',
    role: 'Frontend Developer',
    period: '2021 — 2023',
    description:
      'Construí sistemas de UI y experiencias de producto para clientes en cultura, educación y SaaS. Enfoque en accesibilidad y detalle tipográfico.',
  },
  {
    company: 'Freelance',
    role: 'Desarrollador web',
    period: '2019 — 2021',
    description:
      'Acompañé a marcas y freelancers en la creación de sitios y herramientas a medida, desde el concepto hasta el despliegue.',
  },
]

export const interests: Interest[] = [
  { id: 'music', label: 'Música', hint: 'Listas lentas, vinilos y foco' },
  { id: 'games', label: 'Videojuegos', hint: 'Mundos, sistemas y craft' },
  { id: 'mountain', label: 'Montaña', hint: 'Rutas, aire y silencio' },
  { id: 'design', label: 'Diseño', hint: 'Tipografía, espacio y ritmo' },
]
