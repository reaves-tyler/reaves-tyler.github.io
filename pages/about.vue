<template>
  <div class="about">
    <h1>About</h1>
    <p>
      This is a Nuxt 3 application deployed to GitHub Pages. It serves as a
      starting point for building your personal website or project.
    </p>

    <h2>Tech Stack</h2>
    <ul>
      <li>Nuxt 3 - The Vue.js Framework</li>
      <li>Vue 3 - Progressive JavaScript Framework</li>
      <li>GitHub Pages - Static Site Hosting</li>
      <li>GitHub Actions - CI/CD Pipeline</li>
    </ul>

    <h2>Getting Started</h2>
    <p>To start developing locally:</p>
    <pre><code>npm install
npm run dev</code></pre>
  </div>
</template>

<style scoped>
.about h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.about h2 {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.about p {
  margin-bottom: 1rem;
  line-height: 1.8;
}

.about ul {
  padding-left: 2rem;
  margin-bottom: 1rem;
}

.about li {
  margin-bottom: 0.5rem;
}

.about pre {
  background-color: #1a1a2e;
  color: #00dc82;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}
</style>
