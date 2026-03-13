import { reactive, onMounted, onUnmounted } from "vue";

const TRAIL_LENGTH = 14;
const EASE_BASE = 0.12;

export const useFireGlow = () => {
  // Each point follows the one before it with increasing delay
  const points = reactive(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 })),
  );
  const visible = reactive({ value: false });

  let targetX = 0;
  let targetY = 0;
  let rafId: number | null = null;

  const onMouseMove = (e: MouseEvent) => {
    targetX = e.clientX;
    targetY = e.clientY;
    if (!visible.value) visible.value = true;
  };

  const onMouseLeave = () => {
    visible.value = false;
  };

  const animate = () => {
    // Head follows mouse
    const headEase = EASE_BASE;
    if (points[0]) {
      points[0].x += (targetX - points[0].x) * headEase;
      points[0].y += (targetY - points[0].y) * headEase;
    }

    // Each subsequent point follows the one ahead of it with softer easing
    for (let i = 1; i < TRAIL_LENGTH; i++) {
      const ease = EASE_BASE * 0.85 ** i;
      if (points[i] && points[i - 1]) {
        points[i]!.x += (points[i - 1]!.x - points[i]!.x) * ease;
        points[i]!.y += (points[i - 1]!.y - points[i]!.y) * ease;
      }
    }

    rafId = requestAnimationFrame(animate);
  };

  onMounted(() => {
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    rafId = requestAnimationFrame(animate);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseleave", onMouseLeave);
    if (rafId !== null) cancelAnimationFrame(rafId);
  });

  return { points, visible, trailLength: TRAIL_LENGTH };
};
