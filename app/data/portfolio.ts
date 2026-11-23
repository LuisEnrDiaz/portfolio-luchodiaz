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
  role: "Responsable de producto y frontend",
  greeting: "Hola, soy Lucho Díaz",
  statements: [
    "Hablo con el cliente, entiendo cómo trabaja el local y lo convierto en producto.",
    "Me encargo del diseño y de la funcionalidad del frontend, hasta dejarlo en producción.",
  ],
  about: [
    "Desde 2022 soy responsable de producto y del frontend en WeWelcom, un SaaS para la hostelería.",
    "El trabajo empieza con el cliente: recojo lo que necesita el local y lo plasmo en la aplicación, tanto en el diseño como en el comportamiento.",
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
  { value: 7, label: "Restaurantes" },
  { value: 2, label: "Cadenas" },
  { value: 200, suffix: "+", label: "Empleados a la vez" },
  { value: 800, suffix: "+", label: "Personas en el menú digital" },
  { value: 75, prefix: "−", suffix: " %", label: "Carga de cálculo en WeAdmin" },
];

export const education: Education = {
  school: "ISDI Coders",
  title: "Full Stack Development",
  detail: "React, Redux, TypeScript, Jest, Node.js, Express y MongoDB.",
};

export const tools = ["Git", "GitHub", "Figma", "Chrome DevTools"];

export const languages = "Español nativo. Inglés técnico.";

export const navLinks: NavLink[] = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Stack", href: "#stack" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
];

export const projects: Project[] = [
  {
    id: "wewelcom-io",
    title: "wewelcom.io",
    year: "WeWelcom",
    description:
      "Alta de nuevos clientes y presentación del hardware, conectadas a la configuración del producto.",
    stack: ["Vue 3", "Vuex", "Vue Router", "Bootstrap", "ECharts"],
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
    tone: "forest",
  },
];

export const techGroups: TechGroup[] = [
  {
    label: "Core",
    items: ["Vue 3", "TypeScript", "JavaScript", "Pinia", "Vuex", "Vue Router"],
  },
  {
    label: "Interfaz",
    items: ["Vite", "Vue CLI", "Tailwind CSS", "Sass", "Bootstrap", "Capacitor"],
  },
  {
    label: "Datos y tiempo real",
    items: ["REST", "WebSockets", "Server-Sent Events", "ApexCharts", "ECharts"],
  },
];

export const experiences: Experience[] = [
  {
    company: "WeWelcom",
    role: "Responsable de producto y frontend",
    period: "2022 — Actualidad",
    summary:
      "Responsable del producto y del frontend. Trato directo con el cliente y traducción de esas necesidades a diseño y funcionalidad en producción.",
    responsibilities: [
      "Hablo con el cliente, recojo cómo opera el local y convierto eso en alcance de producto.",
      "Diseño la interfaz y desarrollo la funcionalidad del frontend, del flujo al detalle visual.",
      "Mantengo cuatro aplicaciones en producción: WeCopilot, WeAdmin, WePass y wewelcom.io.",
      "Doy servicio a 7 restaurantes y 2 cadenas, con más de 200 empleados simultáneos y más de 800 usuarios en el menú digital.",
      "En WeAdmin optimicé el cálculo de datos: de más de 4.000 iteraciones a menos de 1.000, más de un 75 % menos de carga.",
      "Adapto la arquitectura frontend a cada producto: TypeScript, Vite y Tailwind en el admin; Vue 3, Pinia, Sass y Capacitor en la app del restaurante.",
      "Integro APIs REST, WebSockets y Server-Sent Events para la operativa y para KPIs en tiempo real.",
      "Itero con el cliente en ciclos cortos y dejo los cambios en producción.",
    ],
    products: [
      "WeCopilot — Carta, reservas, takeaway, kiosko, sala y eventos.",
      "WeAdmin — Catálogo, personal, copilot, integraciones y KPIs en tiempo real.",
      "WePass — Invitados de eventos, con acceso y sincronización en tiempo real.",
      "wewelcom.io — Alta de clientes y hardware.",
    ],
  },
];
