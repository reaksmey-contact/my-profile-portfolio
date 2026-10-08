<template>
  <header>
    <div class="logo">

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
        <div><a href="#skills">Skills & Technologies</a></div>
        <div><a href="#experience">Experience</a></div>
        <div><a href="#contact">Contact</a></div>
      </ul>
    </nav>
    <div class="header-actions">
      <button @click="toggleTheme" class="theme-toggle" aria-label="Toggle Dark Mode">
        <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
      </button>
      <a href="#contact" class="contact-btn">Contact me</a>
    </div>
    <div class="hamburger" @click="toggleNav" :class="{ active: isNavActive }">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const isNavActive = ref(false)
const isDark = ref(true)
const route = useRoute()

const toggleNav = () => {
  isNavActive.value = !isNavActive.value
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
    document.documentElement.setAttribute('data-theme', savedTheme)
  } else {
    // Default to dark mode based on previous design
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})

watch(route, () => {
  isNavActive.value = false
})
</script>

<style scoped>
.theme-toggle {
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 1.2rem;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border);
}
.theme-toggle:hover {
  background: var(--bg-tertiary);
  color: var(--accent);
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
</style>