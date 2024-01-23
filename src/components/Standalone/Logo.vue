<script setup>
    import { IMAGES } from '../../assets/scripts/images';

    // Laptop responsive 
    import '../../assets/stylesheets/Standalone/Logo.scss';
</script>

<template>
    <div class="logo">
        <img class="shape" :src="IMAGES.Navbar.Logo.shape" alt="Logo's shape">
        <img class="navTitle" :src="IMAGES.Navbar.Logo.yourbank" alt="Website's name">
    </div>  
</template>