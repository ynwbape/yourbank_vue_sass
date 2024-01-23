<script setup>
    import HeroSection from '../components/Home/HeroSection.vue';
    import Products from '../components/Home/Products.vue';
    import Testimonials from '../components/Standalone/Testimonials.vue';
    import Cases from "../components/Home/Cases.vue";
    import Features from "../components/Home/Features.vue";
    import FAQ from '../components/Standalone/FAQ.vue';
    import CTA from '../components/Standalone/CTA.vue';

    import { faqArray } from '../assets/scripts/arrays';
</script>

<template>
    <main>
        <HeroSection />  
        <Products />
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
        <Testimonials />
        <CTA />
    </main>    
</template>