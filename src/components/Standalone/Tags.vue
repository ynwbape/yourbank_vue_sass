<script setup>
    const props = defineProps({
        type: String,
        value: String,
    });
</script>

<template>
    <p class="tags">
        {{ type }}: {{ value }}
    </p>
</template>

<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    .tags {
        display: flex;
        padding: .8rem 1.6rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        border-radius: 6.8rem;
        border: .1rem solid variables.$grey_15;
        background-color: variables.$grey_10;

        align-self: stretch;
        color: variables.$grey_70;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 300;
        line-height: 150%; /* 27px */
    }
</style>