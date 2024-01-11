<script setup>
    import Card from '../Standalone/TitleCardsSection/Card.vue';
    import SectionTitles from '../Standalone/SectionTitles.vue';
    
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

    const pyDescription = "At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times"; 
</script>

<template>
    <section id="HWPYID" class="hwpyContainer">
        <SectionTitles 
            title="How We"
            green-title="Protect You"
            :title-description="pyDescription"
        />

        <div class="hwpyCards">
            <img :src="props.img" alt="" :style="props.imgClass">

            <div class="hwpySubContainer">
                <Card
                    :key="props.cardId"
                    :img="props.cardIcon" 
                    :service="props.cardTitle" 
                    :synopsis="props.cardDescription"
                />
                <Card
                    :key="props.cardId2"
                    :img="props.cardIcon2" 
                    :service="props.cardTitle2" 
                    :synopsis="props.cardDescription2"
                />    
            </div>
            
            <div class="hwpySubContainer">
                <Card
                    :key="props.cardId3"
                    :img="props.cardIcon3" 
                    :service="props.cardTitle3" 
                    :synopsis="props.cardDescription3"
                />    
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
<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    .hwpyContainer {
        display: flex;
        width: 160rem;
        flex-direction: column;
        align-items: center;
        gap: 20rem;

        .hwpyCards {
            display: flex;
            padding: 0rem 10rem;
            flex-direction: column;
            gap: 3rem;
            align-self: stretch;
            position: relative;

            img {
                width: 159.3rem;
                height: 63.1rem;
                position: absolute;
                top: -8.2rem;
                right: .6rem;
                border-radius: 50px 50px 20px 20px;
                background-blend-mode: normal, normal, screen;
            }

            .hwpySubContainer {
                display: flex;
                flex-wrap: wrap;
                gap: 3rem;
                align-self: stretch;
            }
        }
    }
</style>