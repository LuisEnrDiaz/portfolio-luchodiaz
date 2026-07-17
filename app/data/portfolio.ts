export interface NavLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  year: string
  description: string
  stack: string[]
  href?: string
  demoHref?: string
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
  summary: string
  responsibilities: string[]
  products: string[]
  stack: string[]
}

export const site = {
  name: 'Lucho Díaz',
  fullName: 'Luis Enrique Díaz García',
  role: 'Frontend Engineer',
  greeting: 'Hola, soy Lucho Díaz.',
  statement:
    'Frontend Engineer. Construyo productos SaaS desde cero con Vue 3 y TypeScript: interfaces rápidas, accesibles y arquitectura frontend escalable.',
  about: [
    'Frontend Engineer especializado en el desarrollo de productos SaaS desde cero. Durante los últimos años he liderado todo el desarrollo frontend de WeWelcom, siendo el primer empleado técnico de la compañía y responsable de la arquitectura, la experiencia de usuario y la evolución del producto.',
    'Disfruto convirtiendo necesidades reales de negocio en aplicaciones rápidas, intuitivas y escalables, cuidando tanto la experiencia del usuario como la calidad del código y la mantenibilidad del proyecto.',
  ],
  email: 'luis.enr.diaz.garcia@gmail.com',
  location: 'Madrid, España',
  linkedin: 'https://www.linkedin.com/in/luis-enr-diaz-garcia/',
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/luis-enr-diaz-garcia/',
      icon: 'lucide:linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:luis.enr.diaz.garcia@gmail.com',
      icon: 'lucide:mail',
    },
  ],
}

export const navLinks: NavLink[] = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experiencia', href: '#experiencia' },
]

export const projects: Project[] = [
  {
    id: 'wecopilot',
    title: 'WeCopilot',
    year: 'WeWelcom',
    description:
      'Plataforma operativa para restaurantes: módulos de sala, cocina, barra y TPV en un único ecosistema frontend.',
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'WebSockets'],
    tone: 'forest',
  },
  {
    id: 'weadmin',
    title: 'WeAdmin',
    year: 'WeWelcom',
    description:
      'Dashboard de administración y gestión por restaurante: datos, configuración y operación del día a día.',
    stack: ['Vue 3', 'TypeScript', 'ApexCharts', 'REST APIs'],
    tone: 'ink',
  },
  {
    id: 'wepass',
    title: 'WePass',
    year: 'WeWelcom',
    description:
      'Aplicación orientada a clientes finales dentro del ecosistema WeWelcom.',
    stack: ['Vue 3', 'TypeScript', 'Vite'],
    tone: 'stone',
  },
  {
    id: 'reservas',
    title: 'App de reservas',
    year: 'WeWelcom',
    description:
      'Aplicación de reservas para usuarios finales, enfocada en usabilidad y flujos claros.',
    stack: ['Vue 3', 'TypeScript', 'Vue Router'],
    tone: 'mist',
  },
  {
    id: 'landing-wewelcom',
    title: 'Landing WeWelcom',
    year: 'WeWelcom',
    description:
      'Landing corporativa de WeWelcom: contenido, rendimiento y presentación del producto.',
    stack: ['Astro', 'TailwindCSS', 'TypeScript'],
    tone: 'forest',
  },
  {
    id: 'mandarin-oriental',
    title: 'Mandarin Oriental',
    year: 'WeWelcom',
    description:
      'Aplicación para la gestión de un evento navideño del Mandarin Oriental.',
    stack: ['Vue 3', 'TypeScript', 'Vite'],
    tone: 'ink',
  },
]

export const techGroups: TechGroup[] = [
  {
    label: 'Core',
    items: ['Vue 3', 'React', 'Angular', 'TypeScript', 'Pinia', 'Vue Router', 'Vite'],
  },
  {
    label: 'Plataforma',
    items: ['Astro', 'TailwindCSS', 'Bootstrap', 'SCSS', 'CSS', 'ApexCharts'],
  },
  {
    label: 'Datos y realtime',
    items: ['WebSockets', 'REST APIs'],
  },
]

export const experiences: Experience[] = [
  {
    company: 'WeWelcom',
    role: 'Frontend Engineer',
    period: '2022 — Actualidad',
    summary:
      'Primer empleado técnico de la compañía. Responsable del desarrollo completo del ecosistema frontend y de la evolución del producto.',
    responsibilities: [
      'Desarrollo desde cero de múltiples aplicaciones SaaS orientadas al sector de la hostelería.',
      'Diseño e implementación de interfaces priorizando usabilidad, rendimiento y escalabilidad.',
      'Definición de la arquitectura frontend y creación de componentes reutilizables para mantener la coherencia del producto.',
      'Participación en la definición de OKRs y planificación funcional.',
      'Transformación de necesidades de clientes en funcionalidades listas para producción.',
      'Presentación de nuevas funcionalidades a clientes y recogida de feedback para su iteración.',
      'Despliegues continuos con entregas semanales.',
    ],
    products: [
      'WeCopilot — Plataforma operativa para restaurantes (sala, cocina, barra y TPV).',
      'WeAdmin — Dashboard de administración y gestión por restaurante.',
      'WePass — Aplicación para clientes.',
      'App de reservas para usuarios finales.',
      'Landing corporativa de WeWelcom.',
      'Mandarin Oriental — App para la gestión de un evento navideño.',
    ],
    stack: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'Vue Router',
      'Vite',
      'Astro',
      'TailwindCSS',
      'ApexCharts',
      'WebSockets',
      'REST APIs',
    ],
  },
]
