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
        <p>I am a Full Stack Developer with over 4 years of experience building reliable web applications. I started learning about websites out of curiosity, and it grew into a passion for coding.

          When I’m not coding, I enjoy hiking, trying new recipes, and reading books. I believe that different experiences help me think creatively and solve problems better.

          I work on every project with care, writing clean code and making sure users have a great experience. I always try to learn new technologies to keep improving.

          I’m happy to talk about new projects, ideas, or opportunities. Feel free to reach out!

        </p>
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