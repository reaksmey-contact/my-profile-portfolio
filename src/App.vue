<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts" setup>
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
