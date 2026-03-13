<template>
  <div class="home">
    <section class="hero">
      <h1>Welcome to Reaves Tyler</h1>
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

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 0 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #1a1a2e;
}

.subtitle {
  font-size: 1.25rem;
  color: #666;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem 0;
}
</style>
