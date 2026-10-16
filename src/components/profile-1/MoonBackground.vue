<template>
  <div class="moon-sky-container" :class="{ 'is-dark': isDark }" aria-hidden="true">
    <!-- Volumetric moonlight wash across the sky -->
    <div class="moonlight-rays"></div>

    <!-- Radiant Moon -->
    <div class="moon-wrapper">
      <div class="moon-halo-outer"></div>
      <div class="moon-halo-inner"></div>
      <div class="moon-sphere">
        <!-- Realistic Crater details -->
        <span class="crater crater-1"></span>
        <span class="crater crater-2"></span>
        <span class="crater crater-3"></span>
        <span class="crater crater-4"></span>
        <span class="crater crater-5"></span>
        <div class="moon-terminator"></div>
      </div>
    </div>

    <!-- Soft twinkling ambient stars -->
    <div class="stars-layer">
      <span
        v-for="(star, index) in stars"
        :key="index"
        class="star"
        :style="{
          top: star.top,
          left: star.left,
          width: star.size,
          height: star.size,
          animationDelay: star.delay,
          animationDuration: star.duration,
          opacity: star.opacity,
        }"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isDark = ref(true)

// Generate gentle random stars for the dark sky
const stars = [
  { top: '8%', left: '15%', size: '2px', delay: '0s', duration: '3.2s', opacity: 0.7 },
  { top: '12%', left: '35%', size: '3px', delay: '0.8s', duration: '4s', opacity: 0.85 },
  { top: '18%', left: '72%', size: '2px', delay: '1.4s', duration: '3.5s', opacity: 0.6 },
  { top: '25%', left: '22%', size: '1.5px', delay: '2.1s', duration: '4.2s', opacity: 0.75 },
  { top: '32%', left: '55%', size: '2.5px', delay: '0.5s', duration: '3.8s', opacity: 0.9 },
  { top: '40%', left: '88%', size: '2px', delay: '1.9s', duration: '4.5s', opacity: 0.65 },
  { top: '55%', left: '10%', size: '2px', delay: '2.7s', duration: '3.6s', opacity: 0.7 },
  { top: '65%', left: '42%', size: '2px', delay: '1.1s', duration: '4.1s', opacity: 0.8 },
  { top: '75%', left: '80%', size: '3px', delay: '0.3s', duration: '3.9s', opacity: 0.85 },
  { top: '82%', left: '25%', size: '1.5px', delay: '1.7s', duration: '4.3s', opacity: 0.6 },
  { top: '90%', left: '65%', size: '2px', delay: '2.4s', duration: '3.4s', opacity: 0.75 },
  { top: '15%', left: '85%', size: '2.5px', delay: '1.6s', duration: '3.7s', opacity: 0.9 },
]

let observer: MutationObserver | null = null

const updateThemeState = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme')
  isDark.value = currentTheme === 'dark' || (!currentTheme && localStorage.getItem('theme') !== 'light')
}

onMounted(() => {
  updateThemeState()
  observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.attributeName === 'data-theme') {
        updateThemeState()
      }
    }
  })
  observer.observe(document.documentElement, { attributes: true })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.moon-sky-container {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.8s ease;
}

.moon-sky-container.is-dark {
  opacity: 1;
  visibility: visible;
}

/* Wide atmospheric moonlight wash radiating across the page */
.moonlight-rays {
  position: absolute;
  top: -10%;
  right: -5%;
  width: 80vw;
  height: 80vw;
  max-width: 1000px;
  max-height: 1000px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 75% 25%,
    rgba(224, 242, 254, 0.22) 0%,
    rgba(186, 230, 253, 0.12) 30%,
    rgba(125, 211, 252, 0.05) 55%,
    transparent 75%
  );
  filter: blur(40px);
  animation: shine-pulse 6s ease-in-out infinite alternate;
}

/* Moon positioning */
.moon-wrapper {
  position: absolute;
  top: 90px;
  right: 7%;
  width: 130px;
  height: 130px;
}

@media (max-width: 768px) {
  .moon-wrapper {
    top: 75px;
    right: 5%;
    width: 85px;
    height: 85px;
  }
}

/* Outer expansive celestial aura */
.moon-halo-outer {
  position: absolute;
  inset: -60px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(224, 242, 254, 0.45) 0%,
    rgba(186, 230, 253, 0.25) 45%,
    rgba(56, 189, 248, 0.1) 70%,
    transparent 100%
  );
  filter: blur(20px);
  animation: halo-breathe 5s ease-in-out infinite alternate;
}

/* Inner bright corona glow */
.moon-halo-inner {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(224, 242, 254, 0.5) 50%,
    transparent 80%
  );
  filter: blur(10px);
}

/* The physical moon sphere with texture & glow */
.moon-sphere {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(
    circle at 35% 35%,
    #ffffff 0%,
    #f8fafc 30%,
    #e2e8f0 60%,
    #cbd5e1 85%,
    #94a3b8 100%
  );
  box-shadow:
    inset -12px -12px 25px rgba(30, 41, 59, 0.35),
    inset 4px 4px 10px rgba(255, 255, 255, 0.9),
    0 0 25px rgba(255, 255, 255, 0.95),
    0 0 55px rgba(224, 242, 254, 0.75),
    0 0 110px rgba(186, 230, 253, 0.45);
  overflow: hidden;
  transition: transform 0.5s ease;
}

/* Moon craters */
.crater {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 60% 60%, rgba(148, 163, 184, 0.4) 0%, rgba(100, 116, 139, 0.25) 80%);
  box-shadow: inset 1px 1px 2px rgba(51, 65, 85, 0.3), 1px 1px 2px rgba(255, 255, 255, 0.6);
}

.crater-1 {
  width: 28px;
  height: 28px;
  top: 22%;
  left: 20%;
}

.crater-2 {
  width: 20px;
  height: 20px;
  top: 55%;
  left: 28%;
}

.crater-3 {
  width: 15px;
  height: 15px;
  top: 38%;
  left: 58%;
}

.crater-4 {
  width: 12px;
  height: 12px;
  top: 68%;
  left: 55%;
}

.crater-5 {
  width: 9px;
  height: 9px;
  top: 20%;
  left: 50%;
}

/* Soft twilight terminator shadow edge */
.moon-terminator {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(
    115deg,
    transparent 45%,
    rgba(15, 23, 42, 0.12) 70%,
    rgba(15, 23, 42, 0.28) 100%
  );
}

/* Stars layer */
.stars-layer {
  position: absolute;
  inset: 0;
}

.star {
  position: absolute;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.9);
  animation: star-twinkle infinite alternate ease-in-out;
}

/* Animations */
@keyframes halo-breathe {
  0% {
    transform: scale(0.96);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.08);
    opacity: 1;
  }
}

@keyframes shine-pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.85;
  }
  100% {
    transform: scale(1.05);
    opacity: 1;
  }
}

@keyframes star-twinkle {
  0% {
    transform: scale(0.8);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.4;
  }
}

/* Print support: Print background with moon and shine */
@media print {
  .moon-sky-container.is-dark {
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
}
</style>
