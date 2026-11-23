<script setup lang="ts">
import { site } from '~/data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <UiContainer>
      <div class="footer__row">
        <p class="u-meta">
          © {{ year }} {{ site.fullName }}
        </p>
        <nav class="footer__links" aria-label="Social">
          <a
            :href="site.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__link"
          >LinkedIn</a>
          <a :href="`mailto:${site.email}`" class="footer__link">Email</a>
          <NuxtLink to="/cv" class="footer__link">CV</NuxtLink>
        </nav>
      </div>
    </UiContainer>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: var(--space-10);
  border-top: 1px solid var(--color-border);
}

.footer__row {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.footer__link {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
  transition: color var(--duration-fast) var(--ease-out);
}

.footer__link:hover {
  color: var(--color-accent);
}

@media (min-width: 640px) {
  .footer__row {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
