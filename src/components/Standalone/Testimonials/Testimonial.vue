<script setup> 
    import quoteIcon from '../../../assets/img/Login/icons/quoteicon.svg'

    const props = defineProps({
        testimonial: String,
        author: String,
    })
</script>

<template>
    <div class="item">
        <img :src="quoteIcon" alt="Green quote icon">

        <p>
            {{ testimonial }}
        </p>

        <span>{{ author }}</span>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../assets/stylesheets/variables';

    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
        flex: 1 0 0;

        p {
            color: variables.$absolute_white;
            text-align: center;
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 150%;
            align-self: stretch;
        }

        span {
            color: variables.$green_60;
            text-align: center;
            font-size: 1.8rem;
            font-weight: 500;
            line-height: 150%;
        }
    }
</style>