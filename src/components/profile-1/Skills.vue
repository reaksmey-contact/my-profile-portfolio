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
        <div class="card bg-black-skill h-100 p-3">
          <div class="section-header mb-3">
            <h3>{{ skill_group.category }}</h3>
          </div>
          <div class="skills-grid">
            <div
              v-for="(skill, skil_index) in skill_group.items"
              :key="skill.name"
              :data-aos="'fade-up'"
              :data-aos-delay="skil_index * 100"
              class="skill"
            >
              <img :alt="skill.name" :class="[skill?.class]" :src="skill.icon" />
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const skills = [
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'GraphQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  {
    name: 'Laravel',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  },
  {
    name: 'Livewire',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/livewire/livewire-original-wordmark.svg',
  },
  {
    name: 'Alpine.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg',
  },
  {
    name: 'C#',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  },
  {
    name: '.NET',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
  },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    class: 'white-icon',
  },
  {
    name: 'GitLab',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
  },
]
const groupedSkills = [
  {
    category: 'Programming Languages',
    items: [
      {
        name: 'C#',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      },
      {
        name: 'Go',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
      },
      {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'PHP',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      },
      {
        name: 'SQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg',
      },
    ],
  },
  {
    category: 'Frontend Technologies',
    items: [
      {
        name: 'Vue.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      },
      {
        name: 'Nuxt.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
      },
      {
        name: 'Tailwind CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      },
      {
        name: 'Alpine.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg',
      },
      {
        name: 'Bootstrap',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      },
      {
        name: 'HTML5',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      },
    ],
  },
  {
    category: 'Backend Technologies',
    items: [
      {
        name: 'ASP.NET',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
      },
      {
        name: 'Laravel',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
      },
      {
        name: 'Livewire',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/livewire/livewire-original-wordmark.svg',
      },
      {
        name: 'NestJS',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTML4NC6c6pDdfmXbW8ufyroqby7mexWOwbpKzsIvXxptJBLaq7VW4GK4d&s=10',
      },
      {
        name: 'Golang',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
      },
      {
        name: 'Socket.IO',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
      },
      {
        name: 'gRPC',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grpc/grpc-original.svg',
      },
      {
        name: 'Swagger',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg',
      },
      {
        name: 'Bull/Queue',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      },
    ],
  },
  {
    category: 'ORM & Data Access',
    items: [
      {
        name: 'EF Core',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      },
      {
        name: 'TypeORM',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typeorm/typeorm-original.svg',
      },
      {
        name: 'Sequelize',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg',
      },
    ],
  },
  {
    category: 'Databases',
    items: [
      {
        name: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'SQL Server',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
      },
      {
        name: 'Mongo',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
    ],
  },
  {
    category: 'Caching, Streaming & CDC',
    items: [
      {
        name: 'Redis',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      },
      {
        name: 'Apache Kafka',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
      },
      {
        name: 'Debezium',
        icon: 'https://avatars.githubusercontent.com/u/11964329?s=280&v=4',
      },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      {
        name: 'Docker',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      },
      {
        name: 'Docker Compose',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      },
      {
        name: 'Nginx',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
      },
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'GitHub',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
        class: 'white-icon',
      },
      {
        name: 'GitLab',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
      },
      {
        name: 'JetBrains Rider',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rider/rider-original.svg',
      },
      {
        name: 'DataGrip',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/datagrip/datagrip-original.svg',
      },
      {
        name: 'Postman',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      },
        {
        name: 'Bruno',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_Lzbnqk7uA-56-ELFe9rBe7XfOKXi9FwIWM1Dp-m8Q&s=10'
      },
    ],
  },
]
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
