<template>
  <div class="profile-1">
    <Header></Header>
    <Home></Home>
    <About></About>
    <Skills></Skills>
    <Experiences></Experiences>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>
<script setup lang="ts">
import Home from '@/components/profile-1/Home.vue'
import About from '@/components/profile-1/About.vue'
import Skills from '@/components/profile-1/Skills.vue'
import Experiences from '@/components/profile-1/Experiences.vue'
import Testimonials from '@/components/profile-1/Testimonials.vue'
import Contact from '@/components/profile-1/Contact.vue'
import Projects from '@/components/profile-1/Projects.vue'
import Footer from '@/components/profile-1/Footer.vue'
import Header from '@/components/profile-1/Header.vue'
</script>
<style >
.p-button.p-scrolltop{
  background-color: white !important;
  border-color: #f8ff33 !important;
  border-width: 2px !important;
}
</style>