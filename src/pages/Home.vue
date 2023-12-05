<script setup>
    import HeroSection from '../components/Home/Herosection.vue'
</script>

<template>
    <main>
        <HeroSection />    
    </main>    
</template>

<style lang="scss">
    @use '../assets/stylesheets/variables';

    main {
        display: flex;
        flex-direction: column;
        gap: 15rem;
    }
</style>