<script setup>
    import Toppriority from '../components/Security/Toppriority.vue';
    import ProtectYou from '../components/Security/ProtectYou.vue';
    import FAQ from '../components/Security/FAQ.vue'
</script>

t<template>
    <main>
        <Toppriority />
        <ProtectYou />
        <FAQ />
    </main>
</template>

<style lang="scss" scope>
    @use '../assets/stylesheets/variables';

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15rem;
        overflow: hidden;
    }
</style>