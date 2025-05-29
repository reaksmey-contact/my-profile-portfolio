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
          <p>{{ project.description }}</p>
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
      'Pinia',
      'Vue Router',
      'Axios',
      'Vite',
      'Tailwind CSS',
      'Bootstrap 5',
      'Vee Validate',
      'Yup',
      'NestJS',
      'Node.js',
      'PostgreSQL',
      'MySQL',
      'Sequelize',
      'JWT',
      'Passport.js',
      'Redis',
      'Bull Queue',
      'Swagger',
      'Firebase',
      'Google Maps API',
      'S3 (AWS SDK)',
      'Puppeteer',
      'PDFKit',
      'Multer',
      'ExcelJS',
      'Winston Logger'
    ],
    liveLink: '#',
    codeLink: '#',
    isNew: true
  },
  {
    title: 'AIA',
    image: '/img/project-logo/aia.png',
    description: 'The AIA project is about creating a system to help manage life insurance policies, claims, and customer information for AIA Cambodia. It makes it easier for insurance agents and customers to handle insurance tasks and improves communication between the insurance company and healthcare providers.',
    tags: ['#C.Net'],
    liveLink: '#',
    codeLink: '#',
    isNew: false
  },
  {
    title: 'Active People ',
    image: '/img/project-logo/ap.png',
    description: ' building and maintaining a system to survey and collect data from people applying for loans. This system helped streamline the loan application process by efficiently gathering customer information, improving data accuracy, and supporting the microfinance institution’s mission to provide financial services to communities across Cambodia.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind', 'Figma'],
    liveLink: '#',
    codeLink: '#',
    isNew: true
  }
]
</script>

<style scoped>
.project-card.reverse {
  flex-direction: row-reverse;
}
</style>