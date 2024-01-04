<script setup>
    import Card from '../Standalone/TitleCardsSection/Card.vue';
    
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
    <section id="TCSID" class="tcsContainer">
        <div class="tcsTitles">
            <h2>
                {{ title }} 
                <strong>{{ greenBoldTitle }}</strong>
            </h2>

            <p>
                {{ description }}
            </p>
        </div>

        <div class="cards">
            <img :src="props.img" alt="" :style="props.imgClass">

            <div class="subContainer">
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
            
            <div class="subContainer">
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

    .tcsContainer {
        display: flex;
        width: 160rem;
        flex-direction: column;
        align-items: center;
        gap: 20rem;

        .tcsTitles {
            display: flex;
            padding-right: 30rem;
            flex-direction: column;
            align-items: flex-start;
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

        .cards {
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

            .subContainer {
                display: flex;
                flex-wrap: wrap;
                gap: 3rem;
                align-self: stretch;
            }
        }
    }
</style>