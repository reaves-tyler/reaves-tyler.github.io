<template>
  <div class="about">
    <h1 class="page-title">About</h1>
    <p class="lead">
      This is a Nuxt 3 application deployed to GitHub Pages. It serves as a
      starting point for building your personal website or project.
    </p>

    <div class="card">
      <h2>Tech Stack</h2>
      <ul>
        <li><span class="tech-dot" /> Nuxt 3 — The Vue.js Framework</li>
        <li><span class="tech-dot purple" /> Vue 3 — Progressive JavaScript Framework</li>
        <li><span class="tech-dot pink" /> GitHub Pages — Static Site Hosting</li>
        <li><span class="tech-dot green" /> GitHub Actions — CI/CD Pipeline</li>
      </ul>
    </div>

    <div class="card">
      <h2>Getting Started</h2>
      <p>To start developing locally:</p>
      <pre><code>pnpm install
pnpm run dev</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About — Reaves Tyler',
  ogTitle: 'About — Reaves Tyler',
  description: 'Learn about the tech stack behind Reaves Tyler — built with Nuxt 3, Vue 3, and deployed on GitHub Pages.',
  ogDescription: 'Learn about the tech stack behind Reaves Tyler — built with Nuxt 3, Vue 3, and deployed on GitHub Pages.'
})
</script>

<style scoped lang="scss">
.page-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.lead {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 640px;
}

.card {
  background: rgba(1, 64, 64, 0.35);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(3, 166, 120, 0.15);
  border-radius: var(--radius-lg);
  padding: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
}

.about h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.about p {
  margin-bottom: 1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.about ul {
  list-style: none;
  padding: 0;
  margin-bottom: 0;
}

.about li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 0;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--color-border);

  &:last-child {
    border-bottom: none;
  }
}

.tech-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--aurora-bright);
  box-shadow: 0 0 8px rgba(3, 166, 120, 0.5);
  flex-shrink: 0;

  &.purple {
    background: var(--aurora-mid);
    box-shadow: 0 0 8px rgba(2, 115, 94, 0.5);
  }

  &.pink {
    background: var(--fire-orange);
    box-shadow: 0 0 8px rgba(242, 116, 5, 0.5);
  }

  &.green {
    background: var(--aurora-deep);
    box-shadow: 0 0 8px rgba(1, 64, 64, 0.5);
  }
}

.about pre {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: 1.25rem;
  border-radius: var(--radius-md);
  overflow-x: auto;
  font-size: 0.9rem;

  code {
    color: var(--aurora-bright);
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace;
  }
}
</style>
