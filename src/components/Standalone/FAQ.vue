<script setup>
    import Question from './FAQ/Question.vue'

    import { TEXTS } from '../../assets/scripts/texts';

    // FAQ StyleSheet
    import '../../assets/stylesheets/Home/FAQ.scss';

    
    const props = defineProps({
        faq_id: Number,
        faq_question: String,
        faq_answer: String,

        faq_id2: Number,
        faq_question2: String,
        faq_answer2: String,

        faq_id3: Number,
        faq_question3: String,
        faq_answer3: String,

        faq_id4: Number,
        faq_question4: String,
        faq_answer4: String,
    });
</script>

<template>
    <section class="faqContainer">
        <div class="faqTitles">
            <h2>
                <strong>{{ TEXTS.Standalone.FAQ.greenTitle }}</strong>
                {{ TEXTS.Standalone.FAQ.title }}
            </h2>

            <p>
                {{TEXTS.Standalone.FAQ.paragraph}}
            </p>
        </div>

        <div class="questionsContainer">
            <div class="questions">
                <div class="gradient"></div>
                <div class="row">
                    <Question 
                        :key="props.faq_id"
                        :question="props.faq_question" 
                        :answer="props.faq_answer"
                    />
                    <Question 
                        :key="props.faq_id2"
                        :question="props.faq_question2" 
                        :answer="props.faq_answer2"
                    />
                </div>
                
                <div class="row">
                    <Question 
                        :key="props.faq_id3"
                        :question="props.faq_question3" 
                        :answer="props.faq_answer3"
                    />
                    <Question 
                        :key="props.faq_id4"
                        :question="props.faq_question4" 
                        :answer="props.faq_answer4"
                    />
                </div>

            </div>
            <button>
                Load All FAQ's
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                    <path d="M16.5 8.75L11 14.25L5.5 8.75" stroke="white" stroke-width="2"/>
                </svg>
            </button>
        </div>
    </section>
</template>