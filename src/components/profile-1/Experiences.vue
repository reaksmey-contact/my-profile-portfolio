<template>
  <section id="experience" class="experience">
    <div class="section-header">
      <h2>Experience</h2>
    </div>
    <p class="experience-intro">Here is a quick summary of my most recent experiences:</p>

    <div class="experience-card p-4 mb-5">
      <div class="row gy-4">
        <div class="col-md-12 text-center"><h4>Project Involve</h4></div>
        <div
          v-for="(exp_logo, exp_logo_index) in ExpLogo"
          class="col-md-4 d-flex justify-content-center"
        >
          <img
            :data-aos="'fade-up'"
            :data-aos-duration="exp_logo_index * 100"
            :src="exp_logo.logo"
            alt=""
            class="rounded"
            height="200"
            width="200"
          />
        </div>
      </div>
    </div>
    <div class="experience-cards">
      <template v-for="exp in experiences" :key="exp.title">
        <div class="experience-card" data-aos="flip-up" data-aos-duration="1500" lang="ts" setup>
          <div class="company-logo d-flex flex-column">
            <img :src="exp?.logo" />
            <span>{{ exp.company }}</span>
          </div>
          <div class="experience-details">
            <h3>{{ exp.title }}</h3>
            <p class="duration">{{ exp.duration }}</p>
            <ul>
              <li v-for="task in exp.tasks" :key="task">{{ task }}</li>
            </ul>
            <div class="text-warning">
              🌐 <a :href="exp?.website" class="text-warning" target="_blank">{{ exp?.website }}</a>
            </div>
          </div>

        </div>

      </template>
    </div>
  </section>

  <Projects></Projects>
</template>

<script lang="ts" setup>
import Projects from '@/components/profile-1/Projects.vue'
import { ref } from 'vue'

const experiences = [
  {
    company: 'Codeclans',
    title: 'Web developer',
    duration: 'Jan 2023 - Present',
    logo: '/img/project-logo/codeclans.png',
    website: 'https://codeclans.asia/',
    tasks: [
      'Developed and maintained responsive web applications using Laravel, Vue.js, and Bootstrap.',
      'Implemented RESTful & GraphQL APIs with NestJS, .NET Core 6, and PostgreSQL/MySQL.',
      'Designed and optimized databases for efficient data management.',
      'Built NestJS backend services with Sequelize ORM and caching strategies using Redis.',
      'Integrated JWT authentication and role-based access control (RBAC) for security.',
      'Utilized Docker for containerized deployments and streamlined development workflows.',
      'Developed and optimized Vue 3 applications using Pinia, Composition API, and lazy loading.',
      'Improved frontend performance, SEO, and accessibility.',
      'Integrated Git, GitHub, and GitLab for version control and CI/CD workflows.',
      'Developed a property management system for leasing, sales, and operations.',
      'Developed a web application for the Ministry of Land Management, Urban Planning and Construction (MLMUPC) using C#.NET for the backend and Vue.js for the frontend.',
      'Developed a web application for AIA Insurance using C#.NET.',
    ],
  },
  {
    company: 'Eazy Partner Solution Co.,Ltd',
    title: 'Web developer',
    logo: '/img/project-logo/ez-partner.png',
    website: 'https://www.facebook.com/ONEMILLIONSQUOTES/',
    duration: 'Jan 2021 - Jun 2023',
    tasks: [
      'Developed a property management system for leasing, sales, and operations of properties.',
      'Built responsive web applications using HTML, CSS, JavaScript, jQuery, and Alpine.js.',
      'Designed and implemented complex features with PHP, Laravel, and Livewire.',
      'Optimized application performance and user experience through data analysis.',
      'Collaborated with UX/UI teams for seamless design integration.',
      'Worked with REST APIs, leveraging hands-on experience.',
      'Continuously learned and adapted to the latest web development technologies.'
    ],
  },

]
const ExpLogo = ref([
  {
    tite: 'Aia',
    logo: '/img/project-logo/aia.png',
  },
  {
    tite: 'Active People',
    logo: '/img/project-logo/ap.png',
  },
  {
    tite: 'Morea',
    logo: '/img/project-logo/morea.png',
  },
  {
    tite: 'discoverLaos',
    logo: '/img/project-logo/discoverLaos.png',
  },
  {
    tite: 'MLMUPC',
    logo: '/img/project-logo/mlmupc.png',
  },
  {
    tite: 'EAZY Partner Solution Co.,ltd',
    logo: '/img/project-logo/ez-partner.png',
  },
])
</script>