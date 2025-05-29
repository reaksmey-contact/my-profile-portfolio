<template>
  <section id="projects" class="projects">
    <div class="section-header">
      <h2>Experience Projects</h2>
    </div>
    <p class="projects-intro">Some of my noteworthy projects I have built:</p>
    <div class="project-cards">
      <div v-for="(project, index) in projects" :key="project.title" class="project-card" :class="{ 'reverse': index % 2 === 1 }">
        <div data-aos="fade-up" data-aos-duration="2500"  class="project-image">
          <img :src="project.image" :alt="project.title">
        </div>
        <div class="project-details">
          <div class="project-badge" v-if="project.isNew">NEW</div>
          <h3>{{ project.title }}</h3>
          <p v-html="project.description"></p>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
          <div class="project-links">
<!--            <a :href="project.liveLink" class="project-link"><i class="fas fa-external-link-alt"></i> Live Preview</a>-->
<!--            <a :href="project.codeLink" class="project-link"><i class="fab fa-github"></i> View Code</a>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Experiences from '@/components/profile-1/Experiences.vue'

const projects = [
  {
    title: 'Morea',
    image: '/img/project-logo/morea.png',
    description: 'MOREA Web Portal is a centralized sales and operations management system designed to track and control activities across multiple depots and the entire corporation. It enables real-time monitoring of salesman visits, stock levels, purchases, and sales. The system includes features for managing users, controlling salesman operations, recording store visits, and analyzing performance data. It streamlines sales workflows, improves stock tracking, and ensures efficient coordination between sales teams and depot operations.',
    tags: [
      'Vue.js',
      'TypeScript',
      'PrimeVue',
      'Vue Router',
      'Axios',
      'Vite',
      'Tailwind CSS',
      'Bootstrap 5',
      'NestJS',
      'Node.js',
      'PostgreSQL',
      'Sequelize',
      'JWT',
      'Redis',
      'Swagger',
      'Firebase',
    ],
    liveLink: '#',
    codeLink: '#',
    isNew: false
  },
  {
    title: 'AIA',
    image: '/img/project-logo/aia.png',
    description: 'The AIA project focuses on developing and maintaining a comprehensive system to manage life insurance policies, claims processing, and customer information for AIA Cambodia. The system enhances operational efficiency for insurance agents and improves customer experience by streamlining insurance-related tasks.\n' +
      '<br>' +
      'As part of this project, we provide ongoing support and maintenance to ensure the system remains stable, secure, and up-to-date. This includes bug fixes, performance optimizations, and technical assistance. Additionally, ',
    tags: ['ASP.Net','Sql','Vue.js','TypeScript','Swagger'],
    liveLink: '#',
    codeLink: '#',
    isNew: false
  },
  {
    title: 'Active People ',
    image: '/img/project-logo/ap.png',
    description: ' building and maintaining a system to survey and collect data from people applying for loans. This system helped streamline the loan application process by efficiently gathering customer information, improving data accuracy, and supporting the microfinance institution’s mission to provide financial services to communities across Cambodia.',
    tags: ['Laravel', 'JQuery', 'Postgresql'],
    liveLink: '#',
    codeLink: '#',
    isNew: false
  },
  {
    title: 'Discoverloas',
    image: '/img/project-logo/discoverLaos.png',
    description: 'Developing and maintaining a web-based system to manage travel packages, destinations, bookings, and customer interactions. The platform helps users explore travel options, make reservations, and receive updates. It also provides admin tools for managing travel content, user data, and system settings to ensure a smooth and engaging travel experience.',
    tags: ['Laravel', 'JQuery', 'Postgresql'],
    liveLink: '#',
    codeLink: '#',
    isNew: false
  },
  {
    title: 'Ministry of Land Management, Urban Planning and Construction(MLMUPC)',
    image: '/img/project-logo/mlmupc.png',
    description: 'Built and maintained an exam management system with key functionalities to support the end-to-end examination process. The system allows for student registration, score entry, result generation, and automated exam announcements. It includes QR code scanning for efficient and secure exam attendance check-in, and automatically arranges students into exam rooms based on alphabetical order or predefined criteria. The platform is designed to simplify exam logistics, reduce administrative workload, and ensure accurate and timely communication with students',
    tags: ['ASP.net', 'Postgresql','Vue.js','TypeScript','Swagger'],
    liveLink: '#',
    codeLink: '#',
    isNew: false
  }
]
</script>

<style scoped>
.project-card.reverse {
  flex-direction: row-reverse;
}
</style>