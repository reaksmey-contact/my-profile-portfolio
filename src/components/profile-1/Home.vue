<template>
  <section class="hero">
    <div  class="hero-content">
      <h1>Hi, I'm Ravy Reaksmey <span class="wave">👋</span></h1>
      <span v-for="(txt, index) in homeDescChars" :data-aos="'fade-in'"
            :data-aos-delay="index* 500">{{txt}}</span>
      <div class="location">
        <i class="fas fa-map-marker-alt"></i>
        <span>Sen Sok District, Phnom Penh, Cambodia</span>
      </div>
      <div class="available">
        <span class="dot"></span>
        <span>Available for new recruitment</span>
      </div>
      <div class="social-links mb-4">
<!--        <a href="#"><i class="fab fa-github"></i></a>-->
<!--        <a href="#"><i class="fab fa-twitter"></i></a>-->
<!--        <a href="#"><i class="fab fa-linkedin-in"></i></a>-->
      </div>
<!--      <a to="/contact" @click="downloadCV" class="contact-btn cursor-pointer">Download My CV 📥</a>-->
    </div>

    <div data-aos="fade-left" data-aos-duration="2500" class="hero-image">
        <img class="img-shadow-right-bottom" src="/img-1/reaksmey-profile.JPG" alt="Profile picture">
    </div>
  </section>
</template>

<script setup lang="ts">
const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/pdf/reaksmey-cv.pdf'; // static path
  link.download = 'reaksmey-cv.pdf';  // optional: force download name
  link.click();
};
// No script logic needed for this component
const homeDesc = "I'm a Full Stack Web Developer & Designer with a focus on creating user-friendly, visually engaging, and high-performance web experiences. Merging technical expertise with creative vision, I craft digital solutions that are both functional and aesthetically appealing. With a proven track record of delivering scalable, high-quality web applications, I'm skilled in building innovative features, optimizing performance, and working collaboratively with cross-functional teams. I'm adaptable, deadline-driven, and passionate about solving problems through technology.";
const homeDescChars = homeDesc.split('.')
</script>
<style scoped>
.img-shadow-left-bottom {
  position: relative;
  display: inline-block;
}

.img-shadow-left-bottom img {
  display: block;
  width: 100%;
  height: auto;
  box-shadow: -10px 10px 20px rgba(255, 255, 255, 0.3); /* left and bottom shadow */
  border-radius: 8px; /* optional: rounded corners */
}

</style>