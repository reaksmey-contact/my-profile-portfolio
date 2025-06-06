<template>
  <div class="landing-page">
<!--     Header -->
   <SHeader></SHeader>
    <SHome></SHome>
    <SSkills></SSkills>
    <SExperience></SExperience>


    <!-- Content Section -->
    <section class="content mb-5">
      <div class="content__container">
        <div class="content__wrapper">
          <h2 class="content__title">Lorem ipsum its TEX</h2>
          <p class="content__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p class="content__paragraph">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p class="content__paragraph">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <button class="content__button">Read More</button>
        </div>
      </div>
    </section>


    <!-- Footer -->
    <footer class="footer">
      <div class="footer__container">
        <h2 class="footer__title">Sed ut Perspiciata</h2>
        <div class="footer__content">
          <div class="footer__item">
            <div class="footer__icon">
              <svg class="footer__icon-svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </div>
            <h3 class="footer__item-title">Send Message</h3>
            <p class="footer__item-text">Contact us directly</p>
          </div>
          <div class="footer__item">
            <div class="footer__icon">
              <svg class="footer__icon-svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <h3 class="footer__item-title">Call Us</h3>
            <p class="footer__item-text">+1 (555) 123-4567</p>
          </div>
          <div class="footer__item">
            <div class="footer__icon">
              <svg class="footer__icon-svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 class="footer__item-title">Visit Office</h3>
            <p class="footer__item-text">123 Business St, City</p>
          </div>
        </div>
        <div class="footer__bottom">
          <p class="footer__copyright">
            © 2024 Company Name. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SHeader from '@/components/samphors/SHeader.vue'
import SHome from '@/components/samphors/SHome.vue'
import Test1 from '@/components/samphors/Test1.vue'
import SExperience from '@/components/samphors/SExperience.vue'
import SSkills from '@/components/samphors/SSkills.vue'

interface GridItem {
  id: number
  title: string
  description: string
  number: string
}

interface FAQ {
  question: string
  answer: string
}

interface Column {
  id: number
  title: string
  content: string
}

const gridItems = ref<GridItem[]>([
  {
    id: 1,
    title: 'Not Simply Do',
    description: 'why we call them',
    number: '01'
  },
  {
    id: 2,
    title: 'Not Simply Do',
    description: 'why we call them',
    number: '02'
  },
  {
    id: 3,
    title: 'Not Simply Do',
    description: 'why we call them',
    number: '03'
  },
  {
    id: 4,
    title: 'Not Simply Do',
    description: 'why we call them',
    number: '04'
  },
  {
    id: 5,
    title: 'Not Simply Do',
    description: 'why we call them',
    number: '05'
  },
  {
    id: 6,
    title: 'Not Simply Do',
    description: 'why we call them',
    number: '06'
  }
])

const features = ref<string[]>([
  'Lorem ipsum dolor sit amet',
  'Consectetur adipiscing elit',
  'Sed do eiusmod tempor',
  'Incididunt ut labore',
  'Et dolore magna aliqua',
  'Ut enim ad minim veniam',
  'Quis nostrud exercitation',
  'Ullamco laboris nisi',
  'Ut aliquip ex ea commodo',
  'Consequat duis aute irure'
])

const faqs = ref<FAQ[]>([
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipiscing lorem ipsum',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipiscing lorem ipsum',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipiscing lorem ipsum',
    answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipiscing lorem ipsum',
    answer: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipiscing lorem ipsum',
    answer: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
  }
])

const columns = ref<Column[]>([
  {
    id: 1,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  },
  {
    id: 2,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  },
  {
    id: 3,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  },
  {
    id: 4,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  },
  {
    id: 5,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  },
  {
    id: 6,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  }
])
</script>

<style>
/* Landing Page Styles - Scoped under .landing-page */
/* Reset and Base Styles */
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Dosis:wght@200..800&family=Edu+NSW+ACT+Cursive:wght@400..700&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
.landing-page {
  min-height: 100vh;
  background-color: #ffffff;
  font-weight: 400;
  font-family: "Titillium Web", monospace;
  line-height: 1.6;
  color: #333;
}

.blurred-bg {
  background: rgba(255, 255, 255, 0.2); /* Semi-transparent white */
  backdrop-filter: blur(10px);          /* Blur effect */
  -webkit-backdrop-filter: blur(10px);  /* Safari support */
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.landing-page * {
  box-sizing: border-box;
}

/* Navigation Styles */
.landing-page .nav {
  background-color: #334155;
  color: white;
  padding: 1rem 1.5rem;
}

.landing-page .nav__container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.landing-page .nav__brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.landing-page .nav__logo {
  width: 2rem;
  height: 2rem;
  background-color: #f97316;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.landing-page .nav__logo-text {
  color: white;
  font-weight: bold;
  font-size: 0.875rem;
}

.landing-page .nav__company-name {
  font-weight: bold;
}

.landing-page .nav__button {
  border: 1px solid white;
  background: transparent;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.landing-page .nav__button:hover {
  background-color: white;
  color: #334155;
}

/* Hero Section */
.landing-page .hero {
  color: white;
  min-height: 500px !important;
}

.landing-page .hero__container {
  max-width: 1200px;
  margin: 0 auto;
}

.landing-page .hero__content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .landing-page .hero__content {
    grid-template-columns: 1fr 1fr;
  }
}

.landing-page .hero__title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

@media (min-width: 1024px) {
  .landing-page .hero__title {
    font-size: 3rem;
  }
}

.landing-page .hero__description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: #cbd5e1;
}

.landing-page .hero__button {
  border: 1px solid white;
  background: transparent;
  color: white;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.landing-page .hero__button:hover {
  background-color: white;
  color: #334155;
}

.landing-page .hero__card {
  background-color: white;
  color: #1e293b;
  padding: 2rem;
  border-radius: 0.5rem;
}

.landing-page .hero__card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.landing-page .hero__card-text {
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 1.5rem;
}

.landing-page .hero__card-button {
  background-color: #334155;
  color: white;
  padding: 0.5rem 1.5rem;
  border: none;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.landing-page .hero__card-button:hover {
  background-color: #475569;
}

/* Content Section */
.landing-page .content {
  background-color: #e5e7eb;
  padding: 4rem 0;
}

.landing-page .content__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.landing-page .content__wrapper {
  max-width: 64rem;
}

.landing-page .content__title {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #1e293b;
}

.landing-page .content__paragraph {
  color: #64748b;
  margin-bottom: 1rem;
}

.landing-page .content__button {
  border: 1px solid #334155;
  background: transparent;
  color: #334155;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.landing-page .content__button:hover {
  background-color: #334155;
  color: white;
}

/* Statement Section */
.landing-page .statement {
  padding: 4rem 0;
  background-color: white;
}

.landing-page .statement__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
}

.landing-page .statement__title {
  font-size: 1.875rem;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 1rem;
}

.landing-page .statement__button {
  border: 1px solid #334155;
  background: transparent;
  color: #334155;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.landing-page .statement__button:hover {
  background-color: #334155;
  color: white;
}

/* Grid Section */
.landing-page .grid-section {
  padding: 4rem 0;
  background-color: #f9fafb;
}

.landing-page .grid-section__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.landing-page .grid-section__title {
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #1e293b;
}

.landing-page .grid-section__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .landing-page .grid-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .landing-page .grid-section__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.landing-page .grid-item {
  text-align: center;
}

.landing-page .grid-item__image {
  background-color: #d1d5db;
  height: 12rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}

.landing-page .grid-item__title {
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.landing-page .grid-item__description {
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 1rem;
}

.landing-page .grid-item__number {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e293b;
}

/* Two Column Section */
.landing-page .two-column {
  padding: 4rem 0;
  background-color: white;
}

.landing-page .two-column__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.landing-page .two-column__content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .landing-page .two-column__content {
    grid-template-columns: 1fr 1fr;
  }
}

.landing-page .two-column__title {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #1e293b;
}

.landing-page .two-column__description {
  color: #64748b;
  margin-bottom: 1.5rem;
}

.landing-page .two-column__button {
  border: 1px solid #334155;
  background: transparent;
  color: #334155;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.landing-page .two-column__button:hover {
  background-color: #334155;
  color: white;
}

.landing-page .two-column__images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.landing-page .two-column__image {
  background-color: #d1d5db;
  height: 8rem;
  border-radius: 0.5rem;
}

/* Another Grid Section */
.landing-page .another-grid {
  padding: 4rem 0;
  background-color: #f9fafb;
}

.landing-page .another-grid__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.landing-page .another-grid__content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .landing-page .another-grid__content {
    grid-template-columns: 1fr 1fr;
  }
}

.landing-page .another-grid__images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.landing-page .another-grid__image {
  background-color: #d1d5db;
  height: 8rem;
  border-radius: 0.5rem;
}

.landing-page .another-grid__title {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #1e293b;
}

.landing-page .another-grid__description {
  color: #64748b;
  margin-bottom: 1.5rem;
}

.landing-page .another-grid__button {
  border: 1px solid #334155;
  background: transparent;
  color: #334155;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.landing-page .another-grid__button:hover {
  background-color: #334155;
  color: white;
}

/* Dark Section */
.landing-page .dark-section {
  background-color: #334155;
  color: white;
  padding: 4rem 0;
}

.landing-page .dark-section__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.landing-page .dark-section__content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .landing-page .dark-section__content {
    grid-template-columns: 1fr 1fr;
  }
}

.landing-page .dark-section__title {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.landing-page .dark-section__description {
  color: #cbd5e1;
  margin-bottom: 1.5rem;
}

.landing-page .dark-section__list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.landing-page .dark-section__list-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.landing-page .dark-section__bullet {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #f97316;
  border-radius: 50%;
  margin-right: 0.75rem;
  flex-shrink: 0;
}

.landing-page .dark-section__button {
  border: 1px solid white;
  background: transparent;
  color: white;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.landing-page .dark-section__button:hover {
  background-color: white;
  color: #334155;
}

.landing-page .dark-section__image {
  background-color: #d1d5db;
  height: 16rem;
  border-radius: 0.5rem;
}

/* FAQ Section */
.landing-page .faq {
  padding: 4rem 0;
  background-color: white;
}

.landing-page .faq__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.landing-page .faq__title {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #1e293b;
}

.landing-page .faq__list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.landing-page .faq__item {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
}

.landing-page .faq__question {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.landing-page .faq__answer {
  color: #64748b;
}

/* Three Column Section */
.landing-page .three-column {
  padding: 4rem 0;
  background-color: #f9fafb;
}

.landing-page .three-column__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.landing-page .three-column__main-title {
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: #1e293b;
}

.landing-page .three-column__subtitle {
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #64748b;
}

.landing-page .three-column__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .landing-page .three-column__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .landing-page .three-column__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.landing-page .three-column__item {
  text-align: center;
}

.landing-page .three-column__item-title {
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 1rem;
}

.landing-page .three-column__item-content {
  font-size: 0.875rem;
  color: #64748b;
}

.landing-page .three-column__button-wrapper {
  text-align: center;
}

.landing-page .three-column__button {
  border: 1px solid #334155;
  background: transparent;
  color: #334155;
  padding: 0.75rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.landing-page .three-column__button:hover {
  background-color: #334155;
  color: white;
}

/* Footer */
.landing-page .footer {
  background-color: #1e293b;
  color: white;
  padding: 4rem 0;
}

.landing-page .footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.landing-page .footer__title {
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
}

.landing-page .footer__content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;
}

@media (min-width: 768px) {
  .landing-page .footer__content {
    grid-template-columns: repeat(3, 1fr);
  }
}

.landing-page .footer__item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.landing-page .footer__icon {
  width: 4rem;
  height: 4rem;
  background-color: #475569;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.landing-page .footer__icon-svg {
  width: 2rem;
  height: 2rem;
}

.landing-page .footer__item-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.landing-page .footer__item-text {
  font-size: 0.875rem;
  color: #cbd5e1;
}

.landing-page .footer__bottom {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #475569;
}

.landing-page .footer__copyright {
  font-size: 0.875rem;
  color: #94a3b8;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .landing-page .hero__title {
    font-size: 2rem;
  }

  .landing-page .content__title,
  .landing-page .statement__title,
  .landing-page .grid-section__title,
  .landing-page .two-column__title,
  .landing-page .another-grid__title,
  .landing-page .dark-section__title,
  .landing-page .faq__title,
  .landing-page .three-column__main-title,
  .landing-page .footer__title {
    font-size: 1.5rem;
  }
}

</style>