<template>
  <section id="about" class="about">
    <div class="section-header">
      <h2>Curious about me? Here you have it:</h2>
    </div>
    <div class="about-content">
      <div data-aos="flip-left" class="about-image">
        <img class="img-shadow-left-bottom" src="/src/assets/img/my-img/me-2.png" alt="Casual photo">
      </div>
      <div data-aos="flip-right" class="about-text">
        <p>I'm a passionate and adaptable Full Stack Developer with over 5 years of experience creating robust web applications. My journey in tech began with a curiosity about how websites work, which evolved into a deep love for coding.</p>
        <p>When I'm not coding, you can usually find me hiking in nature, experimenting with new recipes in the kitchen, or diving into a good book. I believe that diverse experiences fuel creativity and problem-solving skills.</p>
        <p>I approach each project with enthusiasm and dedication, focusing on writing clean, maintainable code while delivering exceptional user experiences. I'm constantly learning new technologies to stay at the cutting edge of web development.</p>
        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to <router-link to="/contact">contact me</router-link>.</p>
        <div class="interests">
          <h3>Things I enjoy doing:</h3>
          <div class="interests-grid" :data-aos="'fade-up'" :data-aos-delay="100">
            <div
              class="interest"
              v-for="(interest, index) in interests"
              :key="index"
              :data-aos="'fade-up'"
              :data-aos-delay="index * 100"
            >
              {{ interest.icon }} {{ interest.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script logic needed for this component
import { ref } from 'vue'

const interests = ref([
  { icon: '🏋️', label: 'Hitting the gym' },
  { icon: '🎮', label: 'Playing video games' },
  { icon: '🧠', label: 'Solving problems' },
  { icon: '🎬', label: 'Watching movies' },
  { icon: '✈️', label: 'Traveling' },
  { icon: '📚', label: 'Reading books' },
])
</script>