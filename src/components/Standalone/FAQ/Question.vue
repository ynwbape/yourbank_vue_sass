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
        <h6>{{ question }}</h6>

        <div class="questionLine"></div>
        
        <p>{{ answer }}</p>
    </div>
</template>
