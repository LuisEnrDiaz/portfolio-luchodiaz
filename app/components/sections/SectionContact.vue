<script setup lang="ts">
import { site } from '~/data/portfolio'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const sent = ref(false)

function onSubmit() {
  // Placeholder: connect to email service / API later
  sent.value = true
}
</script>

<template>
  <UiSection id="contacto" tight>
    <UiContainer>
      <div class="contact">
        <UiReveal class="contact__intro u-stack u-stack--md">
          <p class="u-eyebrow">Contacto</p>
          <h2 class="u-title u-text-balance">
            ¿Construimos algo con calma?
          </h2>
          <p class="u-lead u-text-pretty">
            Si tienes un proyecto, una idea o simplemente quieres saludar,
            escríbeme. Respondo con atención, sin prisa innecesaria.
          </p>
          <a
            :href="`mailto:${site.email}`"
            class="u-link u-link--accent u-underline contact__email"
          >
            <Icon name="lucide:mail" size="18" aria-hidden="true" />
            {{ site.email }}
          </a>
        </UiReveal>

        <UiReveal :delay="100" class="contact__form-wrap">
          <form
            v-if="!sent"
            class="contact__form u-stack u-stack--md"
            @submit.prevent="onSubmit"
          >
            <label class="contact__field u-stack u-stack--xs">
              <span class="u-meta">Nombre</span>
              <input
                v-model="form.name"
                class="contact__input"
                type="text"
                name="name"
                autocomplete="name"
                required
              >
            </label>

            <label class="contact__field u-stack u-stack--xs">
              <span class="u-meta">Email</span>
              <input
                v-model="form.email"
                class="contact__input"
                type="email"
                name="email"
                autocomplete="email"
                required
              >
            </label>

            <label class="contact__field u-stack u-stack--xs">
              <span class="u-meta">Mensaje</span>
              <textarea
                v-model="form.message"
                class="contact__input contact__textarea"
                name="message"
                rows="5"
                required
              />
            </label>

            <div>
              <UiButton type="submit" icon="lucide:arrow-right">
                Enviar mensaje
              </UiButton>
            </div>
          </form>

          <div v-else class="contact__success u-stack u-stack--sm">
            <p class="u-serif contact__success-title">Mensaje listo.</p>
            <p class="u-body">
              Gracias por escribir. Te responderé pronto.
            </p>
          </div>
        </UiReveal>
      </div>
    </UiContainer>
  </UiSection>
</template>

<style scoped>
.contact {
  display: grid;
  gap: var(--space-12);
  padding: clamp(2rem, 5vw, 3.5rem);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background:
    radial-gradient(ellipse at 100% 0%, var(--color-accent-soft), transparent 45%),
    var(--color-bg-elevated);
}

.contact__intro {
  max-width: 28rem;
}

.contact__email {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-lg);
  width: fit-content;
}

.contact__field {
  width: 100%;
}

.contact__input {
  width: 100%;
  padding: 0.85rem 0;
  border: 0;
  border-bottom: 1px solid var(--color-border-strong);
  background: transparent;
  color: var(--color-text);
  font: inherit;
  border-radius: 0;
  transition: border-color var(--duration-fast) var(--ease-out);
}

.contact__input:focus {
  outline: none;
  border-bottom-color: var(--color-accent);
}

.contact__textarea {
  resize: vertical;
  min-height: 8rem;
}

.contact__success-title {
  font-size: var(--text-2xl);
  font-style: italic;
}

@media (min-width: 900px) {
  .contact {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
    align-items: start;
  }
}
</style>
