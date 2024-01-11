<script setup>
    import Tags from '../../Standalone/Tags.vue';

    const props = defineProps({
        cardTitle: String,
        cardDescription: String,
        cardImg: String,
        cardImgAlt: String,

        tagType: String,
        tagValue: String,
        
        tagType2: String,
        tagValue2: String,

    })
</script>

<template>
    <div class="prCard">
        <img :src="props.cardImg" :alt="props.cardImgAlt">

        <div class="prCardTexts">
            <div class="prTitlesTags">
                <h4>{{ cardTitle }}</h4>
                
                <div class="prTags">
                    <Tags 
                        :type="props.tagType"
                        :value="props.tagValue"
                    />
                    <Tags 
                        :type="props.tagType2"
                        :value="props.tagValue2"
                    />
                </div>
            </div>
            <p>{{ cardDescription }}</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use '../../../assets/stylesheets/variables';

    .prCard {
        display: flex;
        padding: 3rem;
        flex-direction: column;
        align-items: center;
        gap: 5.1rem;
        flex: 1 0 0;
        align-self: stretch;  
        
        border-radius: 4rem 4rem 1.6rem 1.6rem;
        border: .1rem solid variables.$grey_15;
        background-color: variables.$grey_11;

        img {
            height: 33.3rem;
            align-self: stretch;
            border-radius: 3rem 3rem 1.2rem 1.2rem;
            background: lightgray 50% / cover no-repeat;
        }

        .prCardTexts {
            display: flex;
            padding: 0rem 3rem;
            flex-direction: column;
            align-items: center;
            gap: 3rem;
            align-self: stretch;

            .prTitlesTags {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 2rem;
                align-self: stretch;

                h4 {
                    align-self: stretch;
                    font-size: 2.4rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 36px */
                }

                .prTags {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                }
            }

            p {
                align-self: stretch;
                color: variables.$grey_70;
                font-size: 1.8rem;
                font-style: normal;
                font-weight: 300;
                line-height: 150%; /* 27px */
            }
        }
    }
</style>