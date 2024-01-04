<script setup>
    const props = defineProps({
        question: String,
        answer: String
})
</script>

<template>
    <div class="question">
        <h4>{{ question }}</h4>

        <p>{{ answer }}</p>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../assets/stylesheets/variables';

    .question {
        display: flex;
        padding: 5rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 3rem;
        flex: 1 0 0;
        align-self: stretch;
        border-radius: 14px;
        border: .1rem solid variables.$grey_15;

        h4 {
            color: variables.$absolute_white;
            font-size: 2rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            align-self: stretch;
        }

        p {
            color: variables.$grey_70;
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 300;
            line-height: 150%; /* 27px */
        }
    }
</style>