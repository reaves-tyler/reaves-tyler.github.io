<template>
  <div class="error-page">
    <div class="error-glow" />
    <span class="error-code">{{ error?.statusCode || 500 }}</span>
    <h1 class="error-title">
      {{ error?.statusCode === 404 ? 'Page Not Found' : 'Something Went Wrong' }}
    </h1>
    <p class="error-message">
      {{ error?.statusCode === 404
        ? "The page you're looking for doesn't exist or has been moved."
        : error?.message || 'An unexpected error occurred.'
      }}
    </p>
    <button class="error-btn" @click="handleError">
      ← Back to Home
    </button>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped lang="scss">
.error-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.error-glow {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(242, 116, 5, 0.1) 0%, rgba(115, 23, 2, 0.06) 40%, transparent 70%);
  pointer-events: none;
}

.error-code {
  font-size: clamp(5rem, 15vw, 10rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  background: var(--gradient-warm);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.8;
  margin-bottom: 1rem;
}

.error-title {
  font-size: clamp(1.25rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.error-message {
  color: var(--text-secondary);
  font-size: 1.05rem;
  max-width: 420px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.error-btn {
  background: transparent;
  border: 1px solid rgba(3, 166, 120, 0.3);
  color: var(--aurora-bright);
  padding: 0.75rem 1.75rem;
  border-radius: 2rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    background: rgba(3, 166, 120, 0.1);
    border-color: rgba(3, 166, 120, 0.5);
    box-shadow: var(--glow-aurora);
  }
}
</style>
