<script setup>
    import HeroSection from '../components/Home/HeroSection.vue';
    import CTA from '../components/Standalone/CTA.vue';
    import Testimonials from '../components/Standalone/Testimonials.vue';
</script>

<template>
    <main>
        <HeroSection />  
        <Testimonials />  
        <CTA />
    </main>    
</template>

<style lang="scss">
    @use '../assets/stylesheets/variables';

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15rem;
        overflow: hidden;
    }
</style>