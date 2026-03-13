<template>
  <div class="home">
    <section class="hero">
      <div class="hero-glow" />
      <div class="hero-sweep" />
      <span class="hero-badge">✦ Built with Nuxt 3</span>
      <h1 class="hero-title">
        Welcome to
        <span class="gradient-text">Reaves Tyler</span>
      </h1>
      <p class="subtitle">A modern website built with Nuxt 3 and deployed on GitHub Pages.</p>
    </section>

    <section class="features">
      <FeatureCard
        v-for="feature in features"
        :key="feature.title"
        :title="feature.title"
        :description="feature.description"
        :icon="feature.icon"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Home — Reaves Tyler',
  ogTitle: 'Reaves Tyler',
  description: 'A modern personal site built with Nuxt 3 and deployed on GitHub Pages.',
  ogDescription: 'A modern personal site built with Nuxt 3 and deployed on GitHub Pages.'
})

const features = [
  {
    title: 'Nuxt 3',
    description: 'Built on the latest version of Nuxt with Vue 3 and the Composition API.',
    icon: '🚀'
  },
  {
    title: 'Static Generation',
    description: 'Pre-rendered as static HTML for fast loading and SEO optimization.',
    icon: '⚡'
  },
  {
    title: 'GitHub Pages',
    description: 'Automatically deployed via GitHub Actions on every push to main.',
    icon: '🌐'
  }
]
</script>

<style scoped lang="scss">
.hero {
  text-align: center;
  padding: 5rem 0 3rem;
  position: relative;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(3, 166, 120, 0.12) 0%, rgba(242, 116, 5, 0.05) 50%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.hero-sweep {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(3, 166, 120, 0.04) 15%,
    rgba(242, 116, 5, 0.08) 45%,
    rgba(242, 116, 5, 0.1) 55%,
    rgba(3, 166, 120, 0.04) 85%,
    transparent 100%
  );
  mask-image: radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 70%);
  animation: sweep-shimmer 8s ease-in-out infinite alternate;
  pointer-events: none;
  z-index: 0;
}

@keyframes sweep-shimmer {
  0% {
    opacity: 0.4;
    transform: translateX(-8%);
  }
  100% {
    opacity: 1;
    transform: translateX(8%);
  }
}

.hero-badge {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--aurora-bright);
  background: rgba(3, 166, 120, 0.1);
  border: 1px solid rgba(3, 166, 120, 0.2);
  padding: 0.35rem 1rem;
  border-radius: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.gradient-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  padding: 2rem 0 4rem;
}
</style>
