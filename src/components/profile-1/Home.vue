<template>
  <section class="hero">
    <div class="hero-content">
      <h1 data-aos="fade-down" data-aos-duration="1000">
        Hi, I'm <span class="highlight-name">Ravy Reaksmey</span> <span class="wave">👋</span>
      </h1>
      <p class="hero-description" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
        {{ homeDesc }}
      </p>
      <div class="location" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <i class="fas fa-map-marker-alt"></i>
        <span>Sen Sok District, Phnom Penh, Cambodia</span>
      </div>
      <div class="available" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
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

    <div data-aos="zoom-in" data-aos-duration="1500" class="hero-image floating-anim">
        <img src="/img/my-img/me-3.JPG" alt="Profile picture">
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
</script>