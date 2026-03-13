<template>
  <div class="layout">
    <template v-if="fireGlow.visible.value">
      <div
        v-for="(point, i) in fireGlow.points"
        :key="i"
        class="fire-trail-segment"
        :style="{
          left: point.x + 'px',
          top: point.y + 'px',
          '--seg-index': i,
          '--seg-total': fireGlow.trailLength
        }"
      />
    </template>

    <!-- Global ember particles -->
    <div class="global-embers">
      <span v-for="n in 20" :key="n" class="bg-ember" :style="{ '--i': n }" />
    </div>

    <header class="header">
      <nav class="nav">
        <NuxtLink to="/" class="nav-brand">
          <span class="brand-icon">◆</span>
          {{ appInfo.name }}
        </NuxtLink>
        <ul class="nav-links">
          <li>
            <NuxtLink to="/" exact-active-class="active">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" exact-active-class="active">About</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <div class="footer-glow" />
      <p>&copy; {{ new Date().getFullYear() }} {{ appInfo.name }}. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const appInfo = useAppInfo()
const fireGlow = useFireGlow()
</script>

<style scoped lang="scss">
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.fire-trail-segment {
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 50%;
  $base-size: 80px;
  width: calc(#{$base-size} - var(--seg-index) * 4px);
  height: calc(#{$base-size} - var(--seg-index) * 4px);
  opacity: calc(0.18 - var(--seg-index) * 0.012);
  background: radial-gradient(
    circle,
    rgba(242, 116, 5, 0.5) 0%,
    rgba(242, 116, 5, 0.15) 40%,
    transparent 70%
  );
  filter: blur(calc(4px + var(--seg-index) * 2px));
}

// ── Global Ember Particles ──
.global-embers {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.bg-ember {
  position: absolute;
  // Stagger starting positions across the full viewport height
  bottom: calc(-5% + var(--i) * 3%);
  width: calc(2px + var(--i) * 0.25px);
  height: calc(2px + var(--i) * 0.25px);
  border-radius: 50%;
  background: var(--fire-orange);
  box-shadow: 0 0 4px rgba(242, 116, 5, 0.5), 0 0 10px rgba(242, 116, 5, 0.2);
  opacity: 0;
  animation: bg-ember-float calc(5s + var(--i) * 0.8s) ease-out infinite;
  animation-delay: calc(var(--i) * 1.1s);

  // Spread across the viewport width
  &:nth-child(1)  { left: 3%; }
  &:nth-child(2)  { left: 10%; }
  &:nth-child(3)  { left: 18%; }
  &:nth-child(4)  { left: 24%; }
  &:nth-child(5)  { left: 32%; }
  &:nth-child(6)  { left: 40%; }
  &:nth-child(7)  { left: 47%; }
  &:nth-child(8)  { left: 53%; }
  &:nth-child(9)  { left: 60%; }
  &:nth-child(10) { left: 67%; }
  &:nth-child(11) { left: 73%; }
  &:nth-child(12) { left: 80%; }
  &:nth-child(13) { left: 87%; }
  &:nth-child(14) { left: 93%; }
  &:nth-child(15) { left: 15%; }
  &:nth-child(16) { left: 35%; }
  &:nth-child(17) { left: 55%; }
  &:nth-child(18) { left: 70%; }
  &:nth-child(19) { left: 85%; }
  &:nth-child(20) { left: 50%; }
}

@keyframes bg-ember-float {
  0% {
    opacity: 0;
    transform: translateY(0) translateX(0) scale(1);
  }
  10% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 0;
    transform: translateY(-100vh) translateX(30px) scale(0.2);
  }
}

.header {
  background: var(--color-bg-elevated);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: opacity var(--transition-fast);

  &:hover {
    opacity: 0.8;
    text-decoration: none;
  }

  .brand-icon {
    font-size: 1rem;
  }
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 0.25rem;

  a {
    color: var(--text-secondary);
    padding: 0.5rem 1rem;
    border-radius: var(--radius-sm);
    transition: all var(--transition-base);
    font-weight: 500;
    font-size: 0.9rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.2rem;
      left: 50%;
      width: 0;
      height: 2px;
      background: var(--fire-orange);
      border-radius: 1px;
      transform: translateX(-50%);
      transition: width var(--transition-base);
      box-shadow: 0 0 8px rgba(242, 116, 5, 0.4);
    }

    &:hover {
      color: var(--text-primary);
      background: var(--color-surface-hover);
      text-decoration: none;

      &::after {
        width: 60%;
      }
    }

    &.active {
      color: var(--aurora-bright);
      background: rgba(3, 166, 120, 0.1);

      &::after {
        width: 60%;
        background: var(--aurora-bright);
        box-shadow: 0 0 8px rgba(3, 166, 120, 0.4);
      }
    }
  }
}

.main {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 2rem;
  width: 100%;
  position: relative;
  z-index: 2;
}

.footer {
  border-top: 1px solid var(--color-border);
  color: var(--text-muted);
  text-align: center;
  padding: 1.5rem 2rem;
  font-size: 0.85rem;
  position: relative;
  overflow: hidden;
}

.footer-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 1px;
  background: var(--gradient-primary);
  opacity: 0.6;
}
</style>
