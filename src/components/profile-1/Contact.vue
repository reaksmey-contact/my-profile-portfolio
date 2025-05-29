<template>
  <section id="contact" class="contact">
    <div class="section-header">
      <h2>Contact</h2>
    </div>
    <p class="contact-intro">What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
    <div class="contact-info">
      <div class="contact-email">
        <i class="fas fa-envelope"></i>
        <a href="mailto:reaksmey.contact@gmail.com">
    <span v-for="(char, index) in emailChars"
          :key="index"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100">
      {{ char }}
    </span>
        </a>
      </div>
      <div class="contact-phone">
        <i class="fas fa-phone"></i>
        <a href="tel:+85581514641">
          <span v-for="(char, index) in phoneChars"
                :key="index"
                :data-aos="'fade-up'"
                :data-aos-delay="index * 200">
      {{ char }}
          </span>
        </a>
      </div>

      <div class="contact-phone">
        <img data-aos="zoom-in" data-aos-delay="1000" width="200" class="rounded" src="/img/my-img/telegram-qr.png" alt="">
      </div>
    </div>
<!--    <p class="contact-outro">You can also find me on these platforms!</p>-->
<!--    <div class="social-links-large">-->
<!--      <a href="#"><i class="fab fa-github"></i></a>-->
<!--      <a href="#"><i class="fab fa-twitter"></i></a>-->
<!--      <a href="#"><i class="fab fa-linkedin-in"></i></a>-->
<!--    </div>-->
  </section>
</template>

<script setup lang="ts">
const email = 'reaksmey.contact@gmail.com'
const emailChars = email.split('')

const phone = '+855 81514641'
const phoneChars = phone.split('')
// No script logic needed for this component
</script>