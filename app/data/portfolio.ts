export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  stack: string[];
  href?: string;
  demoHref?: string;
  tone: "forest" | "stone" | "mist" | "ink";
}

export interface TechGroup {
  label: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  responsibilities: string[];
  products: string[];
}

export const site = {
  name: "Lucho Díaz",
  fullName: "Luis Enrique Díaz García",
  role: "Desarrollador Frontend especializado en producto",
  greeting: "Hola, soy Lucho Díaz",
  statements: [
    "Transformo ideas en productos digitales que la gente disfruta utilizando.",
    "Diseño y desarrollo aplicaciones intuitivas, escalables y fáciles de mantener, combinando producto, experiencia de usuario y arquitectura frontend.",
  ],
  about: [
    "Me especializo en construir productos digitales desde cero, participando en todo el proceso: definición funcional, experiencia de usuario, arquitectura frontend e implementación.",
    "Disfruto convirtiendo problemas reales en productos simples, rápidos y fáciles de mantener, equilibrando experiencia de usuario, necesidades de negocio y calidad técnica.",
    "Creo que el mejor software es el que resuelve problemas reales sin añadir complejidad innecesaria.",
    "Actualmente soy responsable del desarrollo frontend de una plataforma SaaS para el sector de la hostelería, participando en la definición, desarrollo y evolución continua del producto.",
  ],
  email: "luis.enr.diaz.garcia@gmail.com",
  location: "Madrid, España",
  linkedin: "https://www.linkedin.com/in/luis-enr-diaz-garcia/",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/luis-enr-diaz-garcia/",
      icon: "lucide:linkedin",
    },
    {
      label: "Email",
      href: "mailto:luis.enr.diaz.garcia@gmail.com",
      icon: "lucide:mail",
    },
  ],
};

export const navLinks: NavLink[] = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Stack", href: "#stack" },
  { label: "Experiencia", href: "#experiencia" },
];

export const projects: Project[] = [
  {
    id: "wecopilot",
    title: "WeCopilot",
    year: "WeWelcom",
    description:
      "Plataforma operativa para restaurantes: módulos de sala, cocina, barra y TPV en un único ecosistema frontend.",
    stack: ["Vue 3", "TypeScript", "Pinia", "WebSockets"],
    tone: "forest",
  },
  {
    id: "weadmin",
    title: "WeAdmin",
    year: "WeWelcom",
    description:
      "Dashboard de administración y gestión por restaurante: datos, configuración y operación del día a día.",
    stack: ["Vue 3", "TypeScript", "ApexCharts", "REST APIs"],
    tone: "ink",
  },
  {
    id: "wepass",
    title: "WePass",
    year: "WeWelcom",
    description:
      "Aplicación orientada a clientes finales dentro del ecosistema WeWelcom.",
    stack: ["Vue 3", "TypeScript", "Vite"],
    tone: "stone",
  },
  {
    id: "reservas",
    title: "App de reservas",
    year: "WeWelcom",
    description:
      "Aplicación de reservas para usuarios finales, enfocada en usabilidad y flujos claros.",
    stack: ["Vue 3", "TypeScript", "Vue Router"],
    tone: "mist",
  },
  {
    id: "landing-wewelcom",
    title: "Landing WeWelcom",
    year: "WeWelcom",
    description:
      "Landing corporativa de WeWelcom: contenido, rendimiento y presentación del producto.",
    stack: ["Astro", "TailwindCSS", "TypeScript"],
    tone: "forest",
  },
  {
    id: "mandarin-oriental",
    title: "Mandarin Oriental",
    year: "WeWelcom",
    description:
      "Aplicación para la gestión de un evento navideño del Mandarin Oriental.",
    stack: ["Vue 3", "TypeScript", "Vite"],
    tone: "ink",
  },
];

export const techGroups: TechGroup[] = [
  {
    label: "Core",
    items: ["Vue 3", "TypeScript", "JavaScript", "Pinia", "Vue Router", "Vite"],
  },
  {
    label: "Plataforma",
    items: ["Astro", "Tailwind CSS", "SCSS", "CSS", "ApexCharts", "Capacitor"],
  },
  {
    label: "Datos y comunicación",
    items: ["REST APIs", "WebSockets", "Server-Sent Events"],
  },
];

export const experiences: Experience[] = [
  {
    company: "WeWelcom",
    role: "Desarrollador Frontend especializado en producto",
    period: "2022 — Actualidad",
    summary:
      "Responsable del desarrollo frontend, la arquitectura de la aplicación y la evolución continua del producto.",
    responsibilities: [
      "Desarrollo aplicaciones SaaS y móviles desde cero.",
      "Defino la arquitectura frontend y un sistema de componentes reutilizable.",
      "Diseño interfaces centradas en usabilidad, rendimiento y accesibilidad.",
      "Transformo necesidades de negocio en funcionalidades listas para producción.",
      "Integro APIs REST, WebSockets y Server-Sent Events.",
      "Itero continuamente el producto mediante ciclos cortos de desarrollo.",
    ],
    products: [
      "WeCopilot — Plataforma operativa para restaurantes (sala, cocina, barra y TPV).",
      "WeAdmin — Dashboard de administración y gestión por restaurante.",
      "WePass — Aplicación para clientes.",
      "App de reservas para usuarios finales.",
      "Landing corporativa de WeWelcom.",
      "Mandarin Oriental — App para la gestión de un evento navideño.",
    ],
  },
];
