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
    "Frontend Developer con 4+ años creando aplicaciones web y móviles en tiempo real con Vue 3 y TypeScript.",
    "Primer empleado y único frontend de WeWelcom: sistema de componentes y base de diseño en SCSS de todas sus aplicaciones, usadas por más de 600 usuarios.",
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
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contacto" },
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
    year: "Proyecto personal, noviembre 2026",
    description:
      "Próximas llegadas de los autobuses de EMT Madrid a cualquier parada, en tiempo real, con mapa, paradas favoritas y avisos. Un proxy propio hace el login contra la API de EMT para que las credenciales nunca lleguen al navegador.",
    stack: ["React", "TypeScript", "Vite", "Leaflet", "Capacitor"],
    demoHref: "https://madridalpaso.luchodiaz.dev",
    demoLabel: "Abrir la app",
    visual: "route",
    downloadHref: "/downloads/madrid-al-paso.apk",
    downloadLabel: "Descargar APK para Android",
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
      "Creé un sistema de componentes reutilizable y la base de diseño en SCSS compartida por las aplicaciones, con foco en usabilidad, rendimiento y accesibilidad.",
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

/** Texto de la portada: la parte en negrita va aparte para poder resaltarla. */
export const intro = {
  before: "Frontend Developer con 4+ años creando ",
  strong: "aplicaciones web y móviles en tiempo real",
  after:
    " con Vue 3 y TypeScript. Me encargo de todo el frontend: sistema de componentes, rendimiento y despliegue en producción.",
};

/** Lo que hago, sin atarlo a un sector. Va junto a la presentación de la portada. */
export const highlights: string[] = [
  "Sistemas de componentes reutilizables",
  "Tiempo real con WebSockets y Server-Sent Events",
  "Apps web y móviles con Capacitor",
  "Rendimiento: Lighthouse 100/100, carga de 90 s a 1 s",
  "IA en el desarrollo: de 2-3 semanas a 1",
];

export interface TicketLine {
  qty: string;
  label: string;
}

/** La comanda de la portada: WeWelcom en cifras. */
export const ticket = {
  brand: "WeWelcom",
  subtitle: "SaaS para restaurantes y hoteles",
  who: "Frontend: Lucho",
  since: "Ago 2022 – hoy",
  lines: [
    { qty: "4", label: "Apps en producción" },
    { qty: "7", label: "Establecimientos" },
    { qty: "600+", label: "Usuarios activos" },
    { qty: "200+", label: "Empleados en WeCopilot" },
  ] as TicketLine[],
  note: { label: "Carga de datos en WeAdmin", from: "90 s", to: "1 s" },
  stack: "Vue 3 + TypeScript",
  footer: "¡Marchando!",
};

export interface TimelineEntry {
  period: string;
  place: string;
  role: string;
  text?: string;
  points?: string[];
}

/** Lo anterior a WeWelcom, del más reciente al más antiguo. */
export const earlier: TimelineEntry[] = [
  {
    period: "Abr – jul 2022",
    place: "ISDI Coders",
    role: "Bootcamp Full Stack, Madrid",
    text: "Proyecto final: Tattoo Center, una aplicación full stack con React, Redux, TypeScript y Jest en el frontend, y Node.js, Express y MongoDB en el backend.",
  },
  {
    period: "2016 – 2022",
    place: "Cocina profesional",
    role: "De cocinero a encargado",
    points: [
      "80 Grados (2021 – 2022): cocinero encargado de carta caliente.",
      "Grupo SAGARDI (2016 – 2020): cocinero encargado de servicio, con un equipo de 3 personas.",
    ],
  },
];

export const stackExtra =
  "También: React y Redux (proyectos personales y formación), Node.js, Express y MongoDB. Español nativo, inglés técnico.";
