<script setup lang="ts">
import {
  education,
  experiences,
  languages,
  products,
  site,
  techGroups,
  tools,
} from "~/data/portfolio";

const job = experiences[0];

useHead({
  title: `${site.fullName} — CV`,
  meta: [
    {
      name: "description",
      content:
        "Responsable de producto y frontend en WeWelcom. Trato directo con el cliente, diseño y funcionalidad de aplicaciones Vue 3 en producción.",
    },
  ],
});

function printCv() {
  window.print();
}
</script>

<template>
  <div class="cv-page">
    <div class="cv-toolbar">
      <NuxtLink to="/" class="cv-toolbar__link">Volver</NuxtLink>
      <button type="button" class="cv-toolbar__print" @click="printCv">
        Imprimir o guardar PDF
      </button>
    </div>

    <article class="cv">
      <header class="cv__header">
        <p class="cv__kicker">{{ site.role }}</p>
        <h1 class="cv__name">{{ site.fullName }}</h1>
        <p class="cv__tagline">
          Vue 3 · Producto SaaS · Hostelería · Diseño y funcionalidad frontend
        </p>
        <p class="cv__contact">
          {{ site.location }}
          <span aria-hidden="true"> · </span>
          <a :href="`mailto:${site.email}`">{{ site.email }}</a>
          <span aria-hidden="true"> · </span>
          <a :href="`tel:${site.phone.replace(/\s/g, '')}`">{{ site.phone }}</a>
          <span aria-hidden="true"> · </span>
          <a :href="site.linkedin">linkedin.com/in/luis-enr-diaz-garcia</a>
        </p>
      </header>

      <section class="cv__section">
        <h2>Perfil</h2>
        <p>
          Responsable de producto y del frontend en WeWelcom desde 2022. Trato
          directo con el cliente: recojo cómo opera el local y lo plasmo en la
          aplicación, en el diseño y en la funcionalidad. Cuatro productos en
          producción para 7 restaurantes y 2 cadenas, con más de 200 empleados
          simultáneos, más de 800 usuarios en el menú digital y KPIs en tiempo
          real.
        </p>
      </section>

      <section class="cv__section">
        <h2>Experiencia</h2>
        <div class="cv__role">
          <div>
            <h3>{{ job.role }}</h3>
            <p class="cv__company">{{ job.company }}</p>
          </div>
          <p class="cv__period">{{ job.period }}</p>
        </div>
        <p>{{ job.summary }}</p>
        <ul>
          <li v-for="(line, i) in job.responsibilities" :key="i">
            {{ line }}
          </li>
        </ul>
        <h3 class="cv__sub">Productos</h3>
        <ul>
          <li v-for="product in products" :key="product.id">
            <strong>{{ product.title }}.</strong>
            {{ product.description }}
            Stack: {{ product.stack.join(", ") }}.
          </li>
        </ul>
      </section>

      <section class="cv__section">
        <h2>Stack</h2>
        <p v-for="group in techGroups" :key="group.label">
          <strong>{{ group.label }}.</strong>
          {{ group.items.join(" · ") }}
        </p>
        <p class="cv__note">
          TypeScript, Vite y Tailwind son el stack de WeAdmin. WeCopilot, WePass
          y wewelcom.io están en Vue 3 con Vue CLI; Pinia o Vuex según el
          producto. El tiempo real (WebSockets y SSE) está en la operativa, en
          WePass y en la monitorización del admin.
        </p>
      </section>

      <section class="cv__section">
        <h2>Formación</h2>
        <p>
          <strong>{{ education.school }}</strong> — {{ education.title }}.
          {{ education.detail }}
          Formación de base; el trabajo diario es Vue y producto.
        </p>
      </section>

      <section class="cv__section">
        <h2>Idiomas y herramientas</h2>
        <p>Idiomas: {{ languages }}</p>
        <p>Herramientas: {{ tools.join(", ") }}.</p>
      </section>
    </article>
  </div>
</template>

<style scoped>
.cv-page {
  min-height: 100vh;
  padding: 1.5rem 1rem 3rem;
}

.cv-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 48rem;
  margin: 0 auto 1rem;
}

.cv-toolbar__link,
.cv-toolbar__print {
  font: inherit;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  background: transparent;
  border: 0;
  padding: 0.35rem 0;
  cursor: pointer;
}

.cv-toolbar__print {
  color: var(--color-accent);
}

.cv {
  max-width: 48rem;
  margin: 0 auto;
  padding: 2.25rem 2.5rem;
  background: #fff;
  color: #18181b;
  border: 1px solid rgba(9, 9, 11, 0.08);
  border-radius: 0.75rem;
}

.cv__header {
  padding-bottom: 1rem;
  border-bottom: 1px solid #e4e4e7;
}

.cv__kicker {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #3f3f46;
}

.cv__name {
  margin: 0.35rem 0 0;
  font-size: 1.75rem;
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.cv__tagline,
.cv__contact,
.cv p {
  margin: 0.45rem 0 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

.cv__contact a {
  color: inherit;
  text-decoration: none;
}

.cv__section {
  margin-top: 1.15rem;
}

.cv__section h2 {
  margin: 0 0 0.45rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #3f3f46;
}

.cv__role {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: baseline;
}

.cv__role h3,
.cv__sub {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.cv__sub {
  margin-top: 0.75rem;
}

.cv__company,
.cv__period {
  margin: 0.1rem 0 0;
  font-size: 0.9rem;
  color: #3f3f46;
}

.cv ul {
  margin: 0.45rem 0 0;
  padding-left: 1.1rem;
}

.cv li {
  margin: 0.28rem 0;
  font-size: 0.95rem;
  line-height: 1.45;
}

.cv__note {
  color: #3f3f46;
}

@media (max-width: 640px) {
  .cv {
    padding: 1.25rem;
  }

  .cv__role {
    flex-direction: column;
    gap: 0.15rem;
  }
}

@media print {
  .cv-page {
    padding: 0;
    background: #fff;
  }

  .cv-toolbar {
    display: none;
  }

  .cv {
    max-width: none;
    border: 0;
    border-radius: 0;
    padding: 0;
  }
}
</style>

<style>
@media print {
  html,
  body,
  .app-shell {
    background: #fff !important;
  }
}
</style>
