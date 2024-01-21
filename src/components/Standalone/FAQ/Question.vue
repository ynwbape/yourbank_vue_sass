<script setup>
    // Question StyleSheet
    import '../../../assets/stylesheets/Standalone/FAQ/Question.scss';
    
    const props = defineProps({
        question: String,
        answer: String
    });
</script>

<template>
    <div class="question">
        <h4>{{ question }}</h4>

        <p>{{ answer }}</p>
    </div>
</template>
