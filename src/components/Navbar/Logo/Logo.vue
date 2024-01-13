<script setup>
    import { IMAGES } from '../../../assets/scripts/images';
</script>

<template>
    <div class="logo">
        <img class="shape" :src="IMAGES.Navbar.Logo.shape" alt="Logo's shape">
        <img class="navTitle" :src="IMAGES.Navbar.Logo.yourbank" alt="Website's name">
    </div>  
</template>

<style lang="scss">
    @use '../../../assets/stylesheets/variables';

    .logo {
        display: flex;
        gap: .4rem;
        flex-shrink: 0;
    }
</style>