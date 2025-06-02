<template>
  <div class="hero">
    <div class="hero__container">
      <div style="position: relative;">
        <img src="/samphors/bg/top-bg.png" alt="">
        <div class="hero__text  w-50 blurred-bg text-black" style="position: absolute;top: 0; left: 25%; top: 25%">
          <h1 class="fs-3">
             <span v-for="(char, index) in titleChars"
                   :key="index"
                   :data-aos="'fade-up'"
                   :data-aos-delay="index * 100">
      {{ char }}
    </span>
          </h1>
          <p class="hero__description text-black">
            With over 6 years of experience in accounting, tax planning, and financial reporting, I help individuals, small businesses, and startups maintain accurate financial records and grow with confidence.
          </p>
          <!--            <button class="hero__button">Learn More</button>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const title = 'Hi, I\'m Sang Samphors'
const titleChars = title.split('')
</script>