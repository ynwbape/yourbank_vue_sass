<script setup>
    import HeroSection from '../components/Home/HeroSection.vue';
    import Products from '../components/Home/Products.vue';
    import CTA from '../components/Standalone/CTA.vue';
    import Testimonials from '../components/Standalone/Testimonials.vue';
</script>

<template>
    <main>
        <HeroSection />  
        <Products />
        <Testimonials />  
        <CTA />
    </main>    
</template>

<style lang="scss">
    @use '../assets/stylesheets/variables';
</style>