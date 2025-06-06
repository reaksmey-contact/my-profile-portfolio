<template>
  <div id="app">
    <router-view />
  </div>
  <ScrollTop color="white" style="background-color: #0f1689" icon="pi pi-arrow-up" />
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


.p-button.p-scrolltop{
  background-color: white !important;
  border-color: #f8ff33 !important;
  border-width: 2px !important;
}
</style>
