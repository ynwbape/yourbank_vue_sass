<script setup>
    import svgBG from '../../assets/img/Security/svgBG.png'

    const props = defineProps({
        // Optionnal sentence for this component 
        //(Use in About Component)
        optSentence: String,
        title: String,
        greenBoldTitle: String,
        //When greenBoldTitle is in between case
        endTitle: String,
        description: String,
        image: String,
        imageDescription: String
    })
</script>

<template>
    <section class="tisContainer">
        <img :src="svgBG" alt="">
        
        <div class="tisTitles">
            <p>{{ optSentence }}</p>
            
            <h2>
                {{ title }}
                <strong>{{ greenBoldTitle }}</strong>
                {{ endTitle }}
            </h2>

            <p>
                {{ description }}
            </p>
        </div>

        <div class="tisImage">
            <img :src="props.image" :alt="props.imageDescription">
        </div>

    </section>
</template>

<style lang="scss" scope>
    @use '../../assets/stylesheets/variables';

    .tisContainer {
        display: flex;
        width: 159.9rem;
        padding: 5rem;
        align-items: flex-start;
        gap: -26rem;
        border-radius: 2rem;
        background-color: variables.$grey_11;
        position: relative;

        img {
            position: absolute;
            top: 0;
            right: 0;
        }

        .tisImage {
            width: 96.8rem;
            height: 71.6rem;
            flex: 1 0 0;
            border-radius: 1.6rem;
            margin-left: -26rem;
            z-index: 3;
            img {
                position: unset;
                width: 100%;
            }
        }

        .tisTitles {
            display: flex;
            width: 79.1rem;
            padding: 8rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 2.3rem;
            flex-shrink: 0;
            border-radius: 20px 0px 80px 20px;
            background-color: variables.$grey_10;
            z-index: 5;

            h2 {
                font-size: 5.8rem;
                font-weight: 500;
                line-height: 130%;
                align-self: stretch;
                margin-top: 2rem;
                margin-bottom: 1.4rem;
    
                strong {
                    color: variables.$green_60;
                }
            }
    
            p {
                font-size: 1.8rem;
                font-weight: 300;
                line-height: 150%;
                color: variables.$grey_70;
                align-self: stretch;

                &:first-child {
                    margin-bottom: -50px;
                    color: variables.$absolute_white;
                    font-weight: 400;
                }
            }

        }
    }
</style>