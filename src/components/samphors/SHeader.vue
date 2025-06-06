<template>
  <header class="section-header" style="padding: 0.5rem !important;">
    <div class="logo fw-bold ps-5 fs-3 text-white">
      SAMPHORS
    </div>
    <nav :class="{ active: isNavActive }">
      <ul>
<!--        <li><router-link to="/">Me</router-link></li>-->
<!--        <li><router-link to="/home">Home</router-link></li>-->
<!--        <li><router-link to="/about">About</router-link></li>-->
<!--        <li><router-link to="/skills">Skills</router-link></li>-->
<!--        <li><router-link to="/experience">Experience</router-link></li>-->
<!--        <li><router-link to="/contact">Contact</router-link></li>-->


<!--        <div><a href="#me">Me</a></div>-->
        <div><a href="#home">Home</a></div>
        <div><a href="#about">About</a></div>
        <div><a href="#skills">Skills</a></div>
        <div><a href="#experience">Experience</a></div>
        <div><a href="#contact">Contact</a></div>
      </ul>
    </nav>
    <a href=""></a>
<!--    <a href="#contact" class="contact-btn">Contact me</a>-->
    <div class="hamburger" @click="toggleNav" :class="{ active: isNavActive }">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isNavActive = ref(false)
const route = useRoute()

const toggleNav = () => {
  isNavActive.value = !isNavActive.value
}

watch(route, () => {
  isNavActive.value = false
})
</script>
<style scoped>
.section-header{
  background-color: #1a685f;
  font-weight: bold;
}
.section-header ul{
 margin: 0;
}
</style>