<script setup>
    // Title + image component
    import TitleImageSection from '../components/Standalone/TitleImageSection.vue';
    
    // How we protect you component
    import HowWeProtectYou from '../components/Security/HowWeProtectYou.vue';
    
    // Frequently Asked Quesiton component
    import FAQ from '../components/Standalone/FAQ.vue';
    
    // Image background for TitleImageSection component
    import { IMAGES } from '../assets/scripts/images';
    
    import { TEXTS } from '../assets/scripts/texts';

    // arrays of questions for FAQ Component
    import { faqArray, cardArray } from '../assets/scripts/arrays';
</script>

t<template>
    <main>
        <!-- <Toppriority /> -->
        <TitleImageSection 
            :title="TEXTS.Security.TopPriority.tisTitle"
            :green-bold-title="TEXTS.Security.TopPriority.tisGreenBoldTtitle"
            :description="TEXTS.Security.TopPriority.tisDescription"
            :image="IMAGES.Security.SecurityImages.tisTopPriorityImage"
            :image-description="TEXTS.Security.TopPriority.tisImgDescription"
        />

        <!-- How we protect you section -->
        <HowWeProtectYou 
            :img="IMAGES.Security.SecurityImages.pyImg"

            :card-id="cardArray[0].id"
            :card-icon="cardArray[0].img"
            :card-title="cardArray[0].service"
            :card-description="cardArray[0].synopsis"

            :card-id2="cardArray[1].id"
            :card-icon2="cardArray[1].img"
            :card-title2="cardArray[1].service"
            :card-description2="cardArray[1].synopsis"

            :card-id3="cardArray[2].id"
            :card-icon3="cardArray[2].img"
            :card-title3="cardArray[2].service"
            :card-description3="cardArray[2].synopsis"

            :card-id4="cardArray[3].id"
            :card-icon4="cardArray[3].img"
            :card-title4="cardArray[3].service"
            :card-description4="cardArray[3].synopsis"
        />

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
    </main>
</template>

<style lang="scss" scoped>
    @use '../assets/stylesheets/variables';
</style>