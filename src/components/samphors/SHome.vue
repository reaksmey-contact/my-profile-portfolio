<template>
  <div class="">
    <div class="hero__container">
      <div style="">
        <div class=" d-flex justify-content-center position: relative;">
          <img alt="" src="/samphors/bg/top-bg.png" />

          <div
            class="text-banner hero__text  blurred-bg text-black"
          >
            <h1 class="fs-3 fw-bold">
            <span
              v-for="(char, index) in titleChars"
              :key="index"
              :data-aos="'fade-up'"
              :data-aos-delay="index * 100"
            >
              {{ char }}
            </span>
            </h1>
            <div :data-aos="'fade-right'"
                 :data-aos-delay="titleChars.length * 100">
              <p

                class="hero__description text-black"
              >
                {{ description }}
              </p>
              <div class="d-flex gap-2">
                <div v-for="contact in contactMethods">
                  <i class="fs-4 cursor-pointer" :class="contact.icon"></i>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const title = "Hi, I'm Sang Samphors 👋👋"
const titleChars = title.split('')
const description = ref(
  "With over 6 years of experience in accounting, tax planning, and financial reporting, I specialize in helping individuals, small businesses, and startups maintain accurate financial records, optimize their tax strategies, and make informed decisions that support sustainable growth. I bring a strong attention to detail, a commitment to compliance, and a proactive approach to identifying financial opportunities and risks. Whether it's managing day-to-day bookkeeping, preparing for audits, or providing strategic financial insights, I empower clients to navigate their financial landscape with confidence and clarity.\n",
)


const contactMethods = ref([
  {
    id: 1,
    name: 'Telegram',
    url: 'https://t.me/yourusername',
    icon: 'pi pi-telegram',
  },
  {
    id: 2,
    name: 'Facebook',
    url: 'https://www.facebook.com/yourprofile',
    icon: 'pi pi-facebook',
  },
  {
    id: 3,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yourprofile',
    icon: 'pi pi-linkedin',
  },
  {
    id: 4,
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'pi pi-twitter',
  },
  {
    id: 5,
    name: 'Instagram',
    url: 'https://www.instagram.com/yourusername',
    icon: 'pi pi-instagram',
  },
  {
    id: 6,
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'pi pi-github',
  },
]);
</script>
<style>
.hero__container {
  max-width: 100% !important;
}
.text-banner{
  position: absolute; left: 10%; top: 25%;
  width: 50%;
}
</style>