<script setup>    
    //Start Your Career Component 
    import CTA from '../components/Standalone/CTA.vue';
    
    // Our Values section component 
    import Values from '../components/Careers/Values.vue';
    
    // Our Benefits section (TitleCardsSection component)
    import OurBenefits from '../components/Careers/OurBenefits.vue';
    
    // Job openings section
    import JobOpenings from '../components/Careers/JobOpenings.vue';
    
    // Frequently Asked Quesiton component
    import FAQ from '../components/Standalone/FAQ.vue';
    
    // Title + image component
    import TitleImageSection from '../components/Standalone/TitleImageSection.vue';
    
    // Image background for TitleImageSection component
    import { IMAGES } from '../assets/scripts/images';

    // YourBank Careers headings section
    import { TEXTS } from '../assets/scripts/texts';
    
    // arrays 
    import { 
        faqArray, 
        benefitsArray 
    } from '../assets/scripts/arrays';
    
    
    
</script>

<template>
    <main> 
        <!-- Welcome to YourBank Section -->
        <TitleImageSection 
            :title="TEXTS.Careers.YourBankCareer.ybcTitle"
            :green-bold-title="TEXTS.Careers.YourBankCareer.ybcGreenBoldTtitle"
            :end-title="TEXTS.Careers.YourBankCareer.ybcEndTitle"
            :description="TEXTS.Careers.YourBankCareer.ybcDescription"
            :image="IMAGES.Careers.careersImages.ybcImg"
            :image-description="TEXTS.Careers.YourBankCareer.ybcImgDesc"
        />

        <!-- Our Values Section -->
        <Values />

        <!-- Our Benefits section -->
        <OurBenefits 
            :card-id="benefitsArray[0].id"
            :card-icon="benefitsArray[0].img"
            :card-title="benefitsArray[0].benefice"
            :card-description="benefitsArray[0].synopsis"
            
            :card-id2="benefitsArray[1].id"
            :card-icon2="benefitsArray[1].img"
            :card-title2="benefitsArray[1].benefice"
            :card-description2="benefitsArray[1].synopsis"
            
            :card-id3="benefitsArray[2].id"
            :card-icon3="benefitsArray[2].img"
            :card-title3="benefitsArray[2].benefice"
            :card-description3="benefitsArray[2].synopsis"
            
            :card-id4="benefitsArray[3].id"
            :card-icon4="benefitsArray[3].img"
            :card-title4="benefitsArray[3].benefice"
            :card-description4="benefitsArray[3].synopsis"
        />

        <!-- Job Openings Section -->
        <JobOpenings />
        
        <!-- Frequently Asked Question -->
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

        <!-- Start your career section -->
        <CTA />
    </main>    
</template>

<style lang="scss">
    @use '../assets/stylesheets/variables';
</style>