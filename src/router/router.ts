import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/profile-1/Home.vue'
import About from '../components/profile-1/About.vue'
import Skills from '../components/profile-1/Skills.vue'
import Experiences from '../components/profile-1/Experiences.vue'
import Projects from '../components/profile-1/Projects.vue'
import Testimonials from '../components/profile-1/Testimonials.vue'
import Contact from '../components/profile-1/Contact.vue'
import Profile1 from '../components/profile-1/Profile1.vue'
import SProfile from '../components/samphors/SProfile.vue'



const routes = [
  { path: '/', redirect: '/me' },
  {
    path: '/me', component: Profile1,
    children: [
      { path: 'me', component: Profile1 },
      { path: '/home', component: Home },
      { path: '/about', component: About },
      { path: '/skills', component: Skills },
      { path: '/experience', component: Experiences },
      { path: '/projects', component: Projects },
      { path: '/testimonials', component: Testimonials },
      { path: '/contact', component: Contact },
    ]
  },
  {
    path: '/samphors',
    redirect: '/samphors/samphors-profile',
    children: [
      { path: 'samphors-profile', component: SProfile }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router