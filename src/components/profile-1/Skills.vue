<template>
  <section id="skills" class="skills">
    <div class="section-header">
      <h2>Skills & Technologies</h2>
    </div>
<!--    <div class="skills-grid">-->
<!--      <div v-for="(skill, index) in skills" :key="skill.name" class="skill" :data-aos="'fade-up'" :data-aos-delay="index * 100">-->
<!--        <img :src="skill.icon" :alt="skill.name"   :class="[skill?.class]">-->
<!--        <span>{{ skill.name }}</span>-->
<!--      </div>-->
<!--    </div>-->
  </section>

<!--  <section id="skills" class="skills" v-for="skill_group in groupedSkills">-->
<!--    <div class="section-header">-->
<!--      <h3>{{skill_group.category}}</h3>-->
<!--    </div>-->
<!--    <div class="skills-grid">-->
<!--      <div v-for="(skill, index) in skill_group.items" :key="skill.name" class="skill" :data-aos="'fade-up'" :data-aos-delay="index * 100">-->
<!--        <img :src="skill.icon" :alt="skill.name"   :class="[skill?.class]">-->
<!--        <span>{{ skill.name }}</span>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->
  <div class="container">
    <div class="row g-4">
      <div
        v-for="skill_group in groupedSkills"
        :key="skill_group.category"
        class="col-12 col-md-6 mb-4"
      >
        <div class="card bg-black-skill  text-white h-100 p-3">
          <div class="section-header mb-3">
            <h3>{{ skill_group.category }}</h3>
          </div>
          <div class="skills-grid">
            <div
              v-for="(skill, skil_index) in skill_group.items"
              :key="skill.name"
              class="skill"
              :data-aos="'fade-up'"
              :data-aos-delay="skil_index * 100"
            >
              <img :src="skill.icon" :alt="skill.name" :class="[skill?.class]" />
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const skills = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Livewire', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/livewire/livewire-original-wordmark.svg' },
  { name: 'Alpine.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg' },
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' , },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' ,class: 'white-icon'},
  { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
];
const groupedSkills = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    ],
  },
  {
    category: 'Frameworks / Libraries',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-plain.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
      { name: 'Livewire', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/livewire/livewire-original-wordmark.svg' },
      { name: 'Alpine.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg' },
      { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
  },
  {
    category: 'APIs / Query Languages',
    items: [
      { name: 'REST', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' }, // commonly used in REST
      { name: 'Axios', icon: 'https://avatars.githubusercontent.com/u/32372333?s=200&v=4' },
    ],
  },
  {
    category: 'DevOps / Tools',
    items: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', class: 'white-icon' },
      { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
      { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
      { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
      { name: 'Yarn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg' },
      { name: 'Visual Studio Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ],
  },
];
</script>
<style scoped>
.white-icon {
  filter: brightness(0) invert(1);
}
.card.bg-black-skill {
  background-color: transparent !important;
  box-shadow:
    0 0 20px rgba(248, 246, 246, 0.19),
    0 0 12px rgba(243, 243, 243, 0.23),
    0 0 12px rgba(243, 243, 243, 0.23) !important;
}

</style>