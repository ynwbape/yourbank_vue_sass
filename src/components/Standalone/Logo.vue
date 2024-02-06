<script setup>
    import { IMAGES } from '../../assets/scripts/images';

    // Laptop responsive 
    import '../../assets/stylesheets/Standalone/Logo.scss';
</script>

<template>
    <div class="logo">
        <img width="40" height="40" fetchpriority="high" class="shape" :src="IMAGES.Navbar.Logo.shape" alt="Logo's shape">
        <img width="106" height="18" fetchpriority="high" class="navTitle" :src="IMAGES.Navbar.Logo.yourbank" alt="Website's name">
    </div>  
</template>