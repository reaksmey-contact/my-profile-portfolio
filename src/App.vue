<template>
  <div id="app">
    <router-view />
  </div>
  
  <!-- Custom Scroll to Top Button (replaces PrimeVue) -->
  <button 
    :class="['custom-scrolltop', { 'visible': showScroll }]"
    @click="scrollToTop"
    aria-label="Scroll to top"
  >
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from 'vue'
import AOS from 'aos';
import 'aos/dist/aos.css';

const showScroll = ref(false)

const handleScroll = () => {
  showScroll.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  AOS.init()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss">
@import '@fortawesome/fontawesome-free/css/all.min.css';
@import 'aos/dist/aos.css';

.custom-scrolltop {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--accent-gradient);
  border: none;
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 240, 255, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  /* Hidden state */
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
}

.custom-scrolltop.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.custom-scrolltop:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(112, 0, 255, 0.6);
}

.custom-scrolltop i {
  font-size: 1.2rem;
  color: white;
}
</style>
