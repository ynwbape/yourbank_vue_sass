<script setup>
    import HeroSection from '../components/Home/Herosection.vue';
    import CTA from '../components/Standalone/CTA.vue';
</script>

<template>
    <main>
        <HeroSection />    
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