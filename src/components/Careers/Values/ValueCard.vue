<script setup>
    const props = defineProps({
        valueName: String,
        valueDescription: String,
    })
</script>

<template>
    <div class="valueCard">
        <h4>{{ valueName }}</h4>

        <p>{{ valueDescription }}</p>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../assets/stylesheets/variables';

    .valueCard {
        display: flex;
        padding-left: 3rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 3rem;
        flex: 1 0 0;
        border-left: .1rem solid variables.$green_60;

        h4 {
            align-self: stretch;
            color: variables.$grey_30;
            font-size: 5.8rem;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 87px */
        }
        
        p {
            align-self: stretch;
            color: variables.$grey_70;
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 300;
            line-height: 150%; /* 27px */
        }
    }
</style>