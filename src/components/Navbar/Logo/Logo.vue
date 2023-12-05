<script setup>
    import shape from '../../../assets/img/icons/logo/yb_shape.svg'
    import yourbank from '../../../assets/img/icons/logo/YourBanK.svg'
</script>

<template>
    <div class="logo">
        <img class="shape" :src="shape" alt="Logo's shape">
        <img class="navTitle" :src="yourbank" alt="Website's name">
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