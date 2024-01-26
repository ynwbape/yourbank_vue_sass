<script setup>
    import SectionTitles from '../Standalone/SectionTitles.vue';
    import Card from '../Careers/OurBenefits/Card.vue';
    
    import { TEXTS } from '../../assets/scripts/texts';

    // OurBenefits StyleSheet 
    import '../../assets/stylesheets/Careers/OurBenefits.scss';
    
    const props = defineProps({
        title: String,
        greenBoldTitle: String,
        description: String,
        img: String,
        imgClass: String,

        cardId: Number,
        cardIcon: String,
        cardTitle: String,
        cardDescription: String,
        
        cardId2: Number,
        cardIcon2: String,
        cardTitle2: String,
        cardDescription2: String,
        
        cardId3: Number,
        cardIcon3: String,
        cardTitle3: String,
        cardDescription3: String,
        
        cardId4: Number,
        cardIcon4: String,
        cardTitle4: String,
        cardDescription4: String,
    });
</script>

<template>
    <section id="OBID" class="obContainer">
        <SectionTitles 
            title="Our"
            green-title="Benefits"
            :title-description="TEXTS.Careers.Benefits.obResume"
        />

        <div class="obCards">
            <div class="obSubContainer">
                <Card
                    :key="props.cardId"
                    :img="props.cardIcon" 
                    :service="props.cardTitle" 
                    :synopsis="props.cardDescription"
                />

                <div class="obCardLine"></div>
                <Card
                :key="props.cardId2"
                :img="props.cardIcon2" 
                :service="props.cardTitle2" 
                :synopsis="props.cardDescription2"
                />    
            </div>
            <div class="obSubLine"></div>
            <div class="obSubContainer">
                <Card
                :key="props.cardId3"
                :img="props.cardIcon3" 
                :service="props.cardTitle3" 
                :synopsis="props.cardDescription3"
                />    
                <div class="obCardLine"></div>
                <Card
                    :key="props.cardId4"
                    :img="props.cardIcon4" 
                    :service="props.cardTitle4" 
                    :synopsis="props.cardDescription4"
                />    
            </div>
        </div>
    </section>
</template>