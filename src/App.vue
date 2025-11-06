<template>
  <div id="app">
    <Header />
    <RouterView />
    <Footer /> 

  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
// import Hero from '@/components/common/Hero.vue'
// import FeaturedProducts from '@/components/pages/FeaturedProducts.vue'
// import Testimonials from '@/components/pages/Testimonials.vue'
// import Categories from '@/components/shop/Categories.vue'
// import Blog from '@/components/content/Blog.vue'
// import Community from '@/components/content/Community.vue'
// import Newsletter from '@/components/common/Newsletter.vue'
import Footer from '@/components/common/Footer.vue'
// import About from '@/components/pages/About.vue'
// import Carts from '@/components/shop/Carts.vue'
// import User from '@/components/user/User.vue'


export default {
  name: 'App',
  components: {
    Header,
    // Hero,
    // FeaturedProducts,
    // About,
    // Testimonials,
    // Categories,
    // Blog,
    // Community,
    // Newsletter,
    // Carts,
    // User,
    Footer
  }
}
</script>