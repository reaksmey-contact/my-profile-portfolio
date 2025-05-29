<template>
  <section id="experience" class="experience">
    <div class="section-header">
      <h2>Experience</h2>
    </div>
    <p class="experience-intro">Here is a quick summary of my most recent experiences:</p>

    <div class="experience-cards mb-5">
      <div class="row">


      <template v-for="exp in experiences" :key="exp.title">
        <div class="col-md-12 mb-5">
        <div class="experience-card" data-aos="flip-up" data-aos-duration="1500" lang="ts" setup>
          <div class="company-logo d-flex flex-column m-4">
            <img :src="exp?.logo" />
            <span>{{ exp.company }}</span>
          </div>
          <div class="experience-details p-4">
            <div class="fs-3">{{ exp.title }}</div>
            <p class="duration">{{ exp.duration }}</p>
            <div class="text-start">
            <p   v-for="task in exp.tasks" :key="task">- {{ task }}</p>
            </div>
          </div>
        </div>
        </div>
      </template>
      </div>
    </div>

    <div class="experience-card mb-5">
      <div class="row gy-5 mb-5 mt-3">
        <div class="col-md-12 text-center"><h4>Project Involve</h4></div>
        <div
          v-for="(exp_logo, exp_logo_index) in ExpLogo"
          class="col-md-4 col-sm-6 col-6 d-flex justify-content-center"
        >
          <img
            :data-aos="'fade-up'"
            :data-aos-duration="exp_logo_index * 100"
            :src="exp_logo.logo"
            alt=""
            class="rounded img-project-invole"
          />
        </div>
      </div>
    </div>
  </section>

  <Projects></Projects>
</template>

<script lang="ts" setup>
import Projects from '@/components/profile-1/Projects.vue'
import { ref } from 'vue'

const codeClansTask =
  'Developed and maintained responsive, high-performance web applications using Laravel, Vue.js, Bootstrap, jQuery, MySQL, JavaScript, HTML5, CSS, and AJAX, with integration of RESTful APIs, authentication systems to enhance functionality and user experience. -\n' +
  'Developed backend services with NestJS, Sequelize ORM, and TypeORM, creating RESTful and GraphQL APIs with PostgreSQL and MySQL, using Redis for performance  optimization.-\n' +
  'Used Cron jobs and queues to run scheduled tasks and handle background jobs, making the system faster and more efficient.-\n' +
  'Developed and maintained enterprise web applications with C# and ASP.NET.-\n' +
  'Implemented JWT authentication and role-based access control (RBAC) for security.-\n' +
  'Utilized Docker for streamlined application setup and deployment.-\n' +
  'Managed source code using Git, GitHub, and GitLab, integrating CI/CD.- \n' +
  'Using Swagger documentation to improve API usability for developers.-\n' +
  'Developed SQL stored procedures and functions to optimize data retrieval for reports, and used database triggers to automate updates, ensuring data accuracy.-\n' +
  'Integrated Mailgun for automated emails and Firebase Cloud Messaging for cross-platform push notifications to boost user engagement.-\n' +
  'Implemented activity logging to track user actions and improve system monitoring and security.\n'
const experiences = [
  {
    company: 'Codeclans',
    title: 'Web developer',
    duration: 'Jan 2023 - Present',
    logo: '/img/project-logo/codeclans.png',
    website: 'https://codeclans.asia/',
    tasks: codeClansTask.split('-'),
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
      'Continuously learned and adapted to the latest web development technologies.',
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
