<template>
  <section id="experience" class="experience">
    <div class="section-header">
      <h2>Experience</h2>
    </div>
    <p class="experience-intro">Here is a quick summary of my most recent experiences:</p>

    <div class="experience-card p-4 mb-5">

      <div class="row gy-4">
        <div class="col-md-12 text-center"> <h4>Project Invole</h4></div>
        <div class="col-md-4 d-flex justify-content-center" v-for="(exp_logo, exp_logo_index) in ExpLogo" :key="exp_logo.id">
          <img :data-aos="'fade-up'"
               :data-aos-duration="exp_logo_index * 100" width="200" height="200" :src="exp_logo.logo" class="rounded" alt="">
        </div>
      </div>

    </div>
    <div class="experience-cards">
      <div data-aos="flip-up"
           data-aos-duration="1500" v-for="exp in experiences" :key="exp.title" class="experience-card">
        <div class="company-logo">
          <span>{{ exp.company }}</span>
        </div>
        <div  class="experience-details">
          <h3>{{ exp.title }}</h3>
          <p class="duration">{{ exp.duration }}</p>
          <ul>
            <li v-for="task in exp.tasks" :key="task">{{ task }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <Projects></Projects>
</template>

<script setup>
import Projects from '@/components/profile-1/Projects.vue'
import { ref } from 'vue'

const experiences = [
  {
    company: 'UPWORK',
    title: 'Sr. Frontend Developer',
    duration: 'Jun 2021 - Present',
    tasks: [
      'Developed dynamic and responsive web applications',
      'Collaborated with cross-functional teams to deliver high-quality solutions',
      'Implemented modern UI/UX designs using React.js',
      'Optimized application performance and user experience',
      'Created reusable UI components library'
    ]
  },
  {
    company: 'UPWORK',
    title: 'Team Lead',
    duration: 'Jul 2019 - Jun 2021',
    tasks: [
      'Led a team of 5 developers',
      'Coordinated with clients to establish requirements',
      'Managed project timelines and deliverables',
      'Conducted code reviews and mentored junior developers',
      'Implemented agile methodologies'
    ]
  },
  {
    company: 'UPWORK',
    title: 'Full Stack Developer',
    duration: 'Jan 2018 - Jun 2019',
    tasks: [
      'Developed full-stack web applications',
      'Implemented RESTful APIs and database architecture',
      'Collaborated with designers to create responsive interfaces',
      'Integrated third-party services and APIs',
      'Maintained existing web applications'
    ]
  }
]
const ExpLogo = ref([
  {
    tite: 'Aia',
    logo:'/src/assets/img/project-logo/aia.png',
  },
  {
    tite: 'Active People',
    logo:'/src/assets/img/project-logo/ap.png',
  },
  {
    tite: 'Morea',
    logo:'/src/assets/img/project-logo/morea.png',
  },
  {
    tite: 'discoverLaos',
    logo:'/src/assets/img/project-logo/discoverLaos.png',
  },
  {
    tite: 'MLMUPC',
    logo:'/src/assets/img/project-logo/mlmupc.png',
  },
  {
    tite: 'EAZY Partner Solution Co.,ltd',
    logo:'/src/assets/img/project-logo/ez-partner.png',
  },

]);
</script>