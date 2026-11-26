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
  demoLabel?: string;
  image?: string;
  imageAlt?: string;
  visual?: "route";
  downloadHref?: string;
  downloadLabel?: string;
  tone: "forest" | "stone" | "mist" | "ink";
}

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
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

export interface Education {
  school: string;
  title: string;
  detail: string;
}

export const site = {
  name: "Lucho Díaz",
  fullName: "Luis Enrique Díaz García",
  role: "Frontend Developer",
  greeting: "Hola, soy Lucho Díaz",
  statements: [
    "Frontend Developer con 4+ años construyendo desde cero una plataforma SaaS para restaurantes y hoteles.",
    "Primer empleado y único frontend de WeWelcom: arquitectura, sistema de componentes y base de diseño en SCSS de todas sus aplicaciones, usadas por más de 600 usuarios.",
    "Vue 3, TypeScript, Pinia, Astro y Capacitor, con IA (Cursor, Claude) en el día a día.",
  ],
  about: [
    "Desde 2022 soy Frontend Developer en WeWelcom, un SaaS para restaurantes y hoteles. Fui el primer empleado y soy el único desarrollador frontend: construí desde cero todas sus aplicaciones.",
    "El trabajo empieza con el cliente: recojo lo que necesita el local y lo plasmo en la aplicación, tanto en el diseño como en el comportamiento. Uso IA (Cursor, Claude) en el día a día: tareas de 2-3 semanas pasaron a 1.",
    "Antes de programar trabajé 5 años en cocina profesional, llegando a encargado, así que conozco el negocio hostelero desde dentro.",
    "El mejor software, para mí, es el que resuelve el problema del local sin añadir pasos de más.",
  ],
  email: "luis.enr.diaz.garcia@gmail.com",
  phone: "+34 657 420 531",
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

export const stats: Stat[] = [
  { value: 7, label: "Establecimientos" },
  { value: 600, suffix: "+", label: "Usuarios activos" },
  { value: 200, suffix: "+", label: "Empleados en WeCopilot" },
  { value: 4, label: "Apps en producción" },
  { value: 1, prefix: "90 s → ", suffix: " s", label: "Carga de datos en WeAdmin" },
];

export const education: Education = {
  school: "ISDI Coders",
  title: "Full Stack Development",
  detail: "Abril – julio 2022. Proyecto final Tattoo Center: React, Redux, TypeScript, Jest, Node.js, Express y MongoDB.",
};

export const tools = ["Git", "GitHub", "GitHub Actions", "Cursor", "Claude", "Figma", "Chrome DevTools"];

export const languages = "Español nativo. Inglés técnico.";

export const navLinks: NavLink[] = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Stack", href: "#stack" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
];

/** Productos de WeWelcom: se usan en el CV (no en la sección Proyectos de la home). */
export const products: Project[] = [
  {
    id: "wecopilot",
    title: "WeCopilot",
    year: "WeWelcom",
    description:
      "Aplicación web y móvil del restaurante: carta, reservas, takeaway, kiosko, sala y eventos. Más de 200 empleados la usan a diario y el cliente completa sus flujos en el mismo producto.",
    stack: ["Vue 3", "Pinia", "TypeScript", "Capacitor", "SCSS", "WebSockets"],
    tone: "forest",
  },
  {
    id: "weadmin",
    title: "WeAdmin",
    year: "WeWelcom",
    description:
      "Panel del local para más de 100 encargados: catálogo, personal, copilot, eventos, integraciones de TPV y reservas, y KPIs en tiempo real. Rediseñé la carga de datos junto al equipo de backend: de 90 s a 1 s. Migré la primera versión (basada en plantilla) a Vue 3 + Pinia + Tailwind.",
    stack: ["Vue 3", "TypeScript", "Vite", "Tailwind CSS", "ApexCharts"],
    tone: "ink",
  },
  {
    id: "wepass",
    title: "WePass",
    year: "WeWelcom",
    description:
      "Experiencia de invitado en eventos para más de 300 usuarios. Invitación con QR personal, acceso y sincronización en tiempo real cuando el anfitrión valida el QR.",
    stack: ["Vue 3", "Pinia", "SCSS", "WebSockets", "SSE"],
    tone: "stone",
  },
  {
    id: "wewelcom-io",
    title: "wewelcom.io",
    year: "WeWelcom",
    description:
      "Web de presentación, alta de nuevos clientes y hardware. Hecha en Astro con desarrollo asistido por IA: Lighthouse 100/100.",
    stack: ["Astro", "Cursor", "Claude"],
    tone: "mist",
  },
];

export const projects: Project[] = [
  {
    id: "wewelcom-io",
    title: "wewelcom.io",
    year: "WeWelcom",
    description:
      "Web de presentación, alta de nuevos clientes y hardware. Hecha en Astro con desarrollo asistido por IA: Lighthouse 100/100.",
    stack: ["Astro", "Cursor", "Claude"],
    demoHref: "https://wewelcom.io",
    demoLabel: "Visitar sitio",
    image: "/projects/wewelcom-io.png",
    imageAlt: "Página de inicio de wewelcom.io",
    tone: "mist",
  },
  {
    id: "madrid-al-paso",
    title: "Madrid al Paso",
    year: "Proyecto personal",
    description:
      "Próximas llegadas de los autobuses de EMT Madrid a cualquier parada, en tiempo real, con mapa, paradas favoritas y avisos. Un proxy propio hace el login contra la API de EMT para que las credenciales nunca lleguen al navegador.",
    stack: ["React", "TypeScript", "Vite", "Leaflet", "Capacitor"],
    demoHref: "https://madridalpaso.luchodiaz.dev",
    demoLabel: "Abrir la app",
    visual: "route",
    downloadHref: "/downloads/madrid-al-paso.apk",
    downloadLabel: "Descargar APK · Android",
    tone: "forest",
  },
];

export const techGroups: TechGroup[] = [
  {
    label: "Core",
    items: ["Vue 3", "TypeScript", "JavaScript", "Pinia", "Vue Router", "Vuex"],
  },
  {
    label: "Interfaz",
    items: ["Vite", "SCSS", "Tailwind CSS", "Astro", "Capacitor", "Sistemas de componentes"],
  },
  {
    label: "Datos y tiempo real",
    items: ["REST", "WebSockets", "Server-Sent Events", "ApexCharts", "ECharts"],
  },
  {
    label: "Calidad e IA",
    items: ["Testing E2E", "GitHub Actions", "Lighthouse", "Cursor", "Claude"],
  },
];

export const experiences: Experience[] = [
  {
    company: "WeWelcom",
    role: "Frontend Developer",
    period: "Agosto 2022 a la actualidad",
    summary:
      "Primer empleado y único desarrollador frontend de un SaaS de gestión operativa en tiempo real para restaurantes y hoteles. Construí desde cero todas las aplicaciones de la empresa, trabajando con el equipo de backend.",
    responsibilities: [
      "Cuatro aplicaciones web y móviles en producción con más de 600 usuarios activos y 7 establecimientos (5 restaurantes, 1 cadena, 1 hotel), entre ellos La Casa del Abuelo, Hermanos Vinagre y Roost Chicken.",
      "Definí la arquitectura frontend, un sistema de componentes reutilizable y la base de diseño en SCSS compartida por las aplicaciones, con foco en usabilidad, rendimiento y accesibilidad.",
      "En WeAdmin rediseñé la carga de datos junto al equipo de backend: de 90 s a 1 s. Migré la primera versión (basada en plantilla) a Vue 3 + Pinia + Tailwind.",
      "Integré IA (Cursor, Claude) en el flujo de desarrollo: tareas de 2-3 semanas pasaron a 1 semana.",
      "Responsable de producto: hablo con el cliente, recojo cómo opera el local y lo convierto en alcance de producto junto al equipo.",
      "Integro APIs REST, WebSockets y Server-Sent Events para la operativa y para KPIs en tiempo real.",
      "Testing E2E y pipelines de CI/CD con GitHub Actions; despliegues semanales en producción.",
    ],
    products: [
      "WeCopilot: Carta, reservas, takeaway, kiosko, sala y eventos.",
      "WeAdmin: Catálogo, personal, copilot, integraciones y KPIs en tiempo real.",
      "WePass: Invitados de eventos, con acceso y sincronización en tiempo real.",
      "wewelcom.io: Web de presentación y alta de clientes en Astro, Lighthouse 100/100.",
    ],
  },
];
