<script setup>
    import { ref } from 'vue';
    import Question from './FAQ/Question.vue'

    const faqArray = ref([
        {
            id: 0,
            question: "How do I open an account with YourBank?",
            answer: 'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
        },
        {
            id: 1,
            question: "What documents do I need to provide to apply for a loan?",
            answer: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
        },
        {
            id: 2,
            question: "How can I access my accounts online?",
            answer: 'Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven\'t registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.',
        },
        {
            id: 3,
            question: "Are my transactions and personal information secure?",
            answer: 'At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.',
        },
        
    ])
</script>

<template>
    <div class="faqContainer">
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
                        :key="faqArray[0].id"
                        :question="faqArray[0].question" 
                        :answer="faqArray[0].answer"
                    />
                    <Question 
                        :key="faqArray[1].id"
                        :question="faqArray[1].question" 
                        :answer="faqArray[1].answer"
                    />
                </div>
                
                <div class="row">
                    <Question 
                        :key="faqArray[2].id"
                        :question="faqArray[2].question" 
                        :answer="faqArray[2].answer"
                    />
                    <Question 
                        :key="faqArray[3].id"
                        :question="faqArray[3].question" 
                        :answer="faqArray[3].answer"
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
    </div>
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