<template>
  <section id="testimonials" class="testimonials">
    <div class="section-header">
      <h2>Testimonials</h2>
    </div>
    <p class="testimonials-intro">Nice things people have said about me:</p>
    <div class="testimonial-cards">
      <div v-for="testimonial in testimonials" :key="testimonial.author" class="testimonial-card">
        <div class="testimonial-avatar">
          <img :src="testimonial.image" :alt="testimonial.author">
        </div>
        <p class="testimonial-text">{{ testimonial.text }}</p>
        <div class="testimonial-author">
          <h4>{{ testimonial.author }}</h4>
          <p>{{ testimonial.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    image: '/img-1/reaksmey-profile.JPG',
    text: "I've had the pleasure of working with Sagar on multiple projects, and his technical expertise and attention to detail have consistently impressed me. He's a reliable developer who delivers quality work on time.",
    author: 'John Doe',
    title: 'CEO at TechCorp'
  },
  {
    image: '/img-1/reaksmey-profile.JPG',
    text: "Working with Sagar was an excellent experience. His communication skills and problem-solving abilities made our project run smoothly. I highly recommend him for any web development project.",
    author: 'Jane Smith',
    title: 'Product Manager at DesignHub'
  },
  {
    image: '/img-1/reaksmey-profile.JPG',
    text: "Sagar consistently delivers high-quality code and innovative solutions. His deep understanding of both frontend and backend technologies makes him an invaluable asset to any development team.",
    author: 'David Wang',
    title: 'CTO at WebSolutions'
  }
]
</script>