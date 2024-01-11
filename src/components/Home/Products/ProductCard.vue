<script setup>
    const props = defineProps({
        imgUrl: String,
        imgAlt: String,
        productName: String,
        productResume: String,
    })
</script>
<template>
    <div class="productCard">
        <div class="pcIconContainer">
            <div class="pcIcon">
                <img :src="props.imgUrl" :alt="props.imgAlt">
            </div>
        </div>

        <div class="pcTexts">
            <h5>{{ productName }}</h5>

            <p>{{ productResume }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../assets/stylesheets/variables';

    .productCard {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        flex: 1 0 0;
        .pcIconContainer {
            display: flex;
            padding: 1.2rem;
            align-items: flex-start;
            gap: 1rem;
            border-radius: 7rem;
            background: linear-gradient(180deg, rgba(202, 255, 51, 0.05) 0%, rgba(202, 255, 51, 0.00) 100%);
            .pcIcon {
                display: flex;
                padding: 2rem;
                align-items: flex-start;
                gap: 1rem;
                border-radius: 5rem;
                background: linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%);

                img {
                    height: 3.4rem;
                }
            }
        }

        .pcTexts {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            align-self: stretch;

            h5, p {
                align-self: stretch;
            }
            
            h5 {
                text-align: center;
                font-size: 2.4rem;
                font-weight: 400;
                line-height: 150%;
            }

            p {
                color: variables.$grey_70;
                text-align: center;
                font-size: 1.8rem;
                font-weight: 300;
                line-height: 150%; /* 27px */
            }
        }
    }   
</style>