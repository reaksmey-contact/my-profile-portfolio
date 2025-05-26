<template>
  <div id="app" class="profile-1">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import Header from './components/profile-1/Header.vue';
import Footer from './components/profile-1/Footer.vue';
import { onMounted } from 'vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
// Initialize AOS
onMounted(() => {
  AOS.init()
})
</script>
<style lang="scss" >
//@import './assets/css-1/profile1.scss';

//@import './assets/css-1/layer.css';
@import '@fortawesome/fontawesome-free/css/all.min.css';
@import 'aos/dist/aos.css';
</style>
