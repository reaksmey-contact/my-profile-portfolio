<template>
  <div class="">
    <div class="hero__container">
      <div style="position: relative;">
        <img src="/samphors/bg/top-bg.png" alt="">
        <div class="hero__text  w-50 blurred-bg text-black" style="position: absolute;top: 0; left: 5%; top: 15%">
          <h1 class="fs-3 fw-bold">
             <span v-for="(char, index) in titleChars"
                   :key="index"
                   :data-aos="'fade-up'"
                   :data-aos-delay="index * 100">
      {{ char }}
    </span>
          </h1>
          <p class="hero__description text-black">
          {{description}}
          </p>
          <!--            <button class="hero__button">Learn More</button>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const title = 'Hi, I\'m Sang Samphors'
const titleChars = title.split('')
const description = ref("With over 6 years of experience in accounting, tax planning, and financial reporting, I specialize in helping individuals, small businesses, and startups maintain accurate financial records, optimize their tax strategies, and make informed decisions that support sustainable growth. I bring a strong attention to detail, a commitment to compliance, and a proactive approach to identifying financial opportunities and risks. Whether it's managing day-to-day bookkeeping, preparing for audits, or providing strategic financial insights, I empower clients to navigate their financial landscape with confidence and clarity.\n")
</script>
<style>
.hero__container{
  max-width: 100% !important;
}
</style>