<template>
  <div id="app">
    <router-view />
  </div>
  <ScrollTop />
</template>
<script lang="ts" setup>
import ScrollTop from 'primevue/scrolltop';
import { onMounted } from 'vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
// Initialize AOS
onMounted(() => {
  AOS.init()
})
</script>
<style lang="scss" >
@import '@fortawesome/fontawesome-free/css/all.min.css';
@import 'aos/dist/aos.css';
</style>
