<script setup>
    import Question from './FAQ/Question.vue'

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
    })
</script>

<template>
    <section class="faqContainer">
        <div class="faqTitles">
            <h2>
                <strong>Frequently</strong>
                Asked Quesions
            </h2>

            <p>
                Still you have any questions? Contact our Team via support@yourbank.com
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

<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    .faqContainer {
        display: flex;
        width: 159.5rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8rem;

        .faqTitles {
            display: flex;
            padding-right: 30rem;
            flex-direction: column;
            align-items: center;
            gap: 1.4rem;
            align-self: stretch;

            h2 {
                font-size: 4.8rem;
                font-weight: 500;
                line-height: 150%;
                align-self: stretch;
                margin-top: 2rem;
                margin-bottom: 1.4rem;
    
                strong {
                    font-weight: 400;
                    color: variables.$green_60;
                }
            }
    
            p {
                font-size: 1.8rem;
                font-weight: 300;
                line-height: 150%;
                color: variables.$grey_70;
                align-self: stretch;
            }
        }

        .questionsContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            align-self: stretch;

            .questions {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 3rem;
                align-self: stretch;
                position: relative;
                .gradient {
                    width: 159.5rem;
                    height: 27.5rem;
                    position: absolute;
                    z-index: 5;
                    bottom: -.2rem;
                    background: linear-gradient(180deg, rgba(25, 25, 25, 0.00) 0%, variables.$grey_19 100%);
                }
                .row {
                    display: flex;
                    align-items: flex-start;
                    gap: 3rem;
                    align-self: stretch;
                }

            }

            button {
                display: flex;
                padding: 1.8rem 2.4rem;
                align-items: center;
                gap: .4rem;
                border-radius: 10rem;
                border: .1rem solid variables.$grey_15;
                background-color: variables.$grey_11;
                cursor: pointer;
            }
        }
    }
</style>