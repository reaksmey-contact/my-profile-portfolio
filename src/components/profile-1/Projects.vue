<template>
  <section id="projects" class="projects">
    <div class="section-header">
      <h2>Projects</h2>
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
            <a :href="project.liveLink" class="project-link"><i class="fas fa-external-link-alt"></i> Live Preview</a>
            <a :href="project.codeLink" class="project-link"><i class="fab fa-github"></i> View Code</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Field',
    image: '/img-1/project/morea-web-portal.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind', 'Figma'],
    liveLink: '#',
    codeLink: '#',
    isNew: true
  },
  {
    title: 'Field',
    image: 'img-1/project/morea-web-portal.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind', 'Figma'],
    liveLink: '#',
    codeLink: '#',
    isNew: false
  },
  {
    title: 'Field',
    image: 'img-1/project/morea-web-portal.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
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