<template>
  <div class="feature-card">
    <div class="card-border" />
    <div class="card-inner">
      <span class="icon">{{ icon }}</span>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="card-glow" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>

<style scoped lang="scss">
@property --border-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.feature-card {
  position: relative;
  border-radius: var(--radius-lg);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  padding: 2px;
  background: conic-gradient(
    from var(--border-angle),
    rgba(3, 166, 120, 0.2) 0%,
    rgba(242, 116, 5, 0.35) 33%,
    rgba(115, 23, 2, 0.2) 66%,
    rgba(3, 166, 120, 0.2) 100%
  );
  animation: border-rotate 6s linear infinite;
  z-index: 2;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 8px 40px rgba(242, 116, 5, 0.18),
      0 0 30px rgba(242, 116, 5, 0.08),
      0 0 60px rgba(3, 166, 120, 0.06);
    background: conic-gradient(
      from var(--border-angle),
      rgba(3, 166, 120, 0.4) 0%,
      rgba(242, 116, 5, 0.6) 33%,
      rgba(115, 23, 2, 0.4) 66%,
      rgba(3, 166, 120, 0.4) 100%
    );

    .card-glow {
      opacity: 1;
    }
  }
}

@keyframes border-rotate {
  to {
    --border-angle: 360deg;
  }
}

.card-inner {
  background: rgba(1, 64, 64, 0.35);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: calc(var(--radius-lg) - 1px);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  height: 100%;
}

.card-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(242, 116, 5, 0.08) 0%, rgba(3, 166, 120, 0.03) 50%, transparent 70%);
  opacity: 0;
  transition: opacity var(--transition-base);
  pointer-events: none;
}

.icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}
</style>
