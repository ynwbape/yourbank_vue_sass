<script setup>
    import CTA from '../components/Standalone/CTA.vue';
</script>

<template>
    <main> 
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