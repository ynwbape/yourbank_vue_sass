<script setup>
    import briefcase from '../../../../assets/img/Careers/icons/briefcase.fill.svg';

    const props = defineProps({
        requirement: String,
    })
</script>

<template>
    <div class="qualification">
        <img :src="briefcase" alt="Grey briefcase icon">

        <p>{{ requirement }}</p>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../../assets/stylesheets/variables';

    .qualification {
        display: flex;
        align-items: center;
        gap: 1rem;
        align-self: stretch;

        p {
            color: variables.$grey_70;
            font-size: 1.8rem;
            font-weight: 300;
            line-height: 150%; /* 27px */
        }
    }
</style>