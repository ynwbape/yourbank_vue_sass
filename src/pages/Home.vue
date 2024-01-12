<script setup>
    import {ref} from "vue";
    import HeroSection from '../components/Home/HeroSection.vue';
    import Products from '../components/Home/Products.vue';
    import CTA from '../components/Standalone/CTA.vue';
    import Testimonials from '../components/Standalone/Testimonials.vue';
    import FAQ from '../components/Standalone/FAQ.vue';
    import Features from "../components/Home/Features.vue";
    import Cases from "../components/Home/Cases.vue";

    let faqArray = ref([
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
        
    ]);
</script>

<template>
    <main>
        <HeroSection />  
        <Products />
        <Testimonials />
        <Cases />
        <Features />
        <FAQ 
            :faq_id="faqArray[0].id"
            :faq_question="faqArray[0].question"
            :faq_answer="faqArray[0].answer"

            :faq_id2="faqArray[1].id"
            :faq_question2="faqArray[1].question"
            :faq_answer2="faqArray[1].answer"

            :faq_id3="faqArray[2].id"
            :faq_question3="faqArray[2].question"
            :faq_answer3="faqArray[2].answer"

            :faq_id4="faqArray[3].id"
            :faq_question4="faqArray[3].question"
            :faq_answer4="faqArray[3].answer"
        />
        <CTA />
    </main>    
</template>

<style lang="scss">
    @use '../assets/stylesheets/variables';
</style>