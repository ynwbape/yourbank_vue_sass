<script setup>
    import { IMAGES } from '../../../assets/scripts/images';

    const props = defineProps({
        feature: String,
        featureResume: String,
    });
</script>
<template>
    <div class="featureCard">
        <div class="featureName">
            <h5>{{ feature }}</h5>
            
            <img :src="IMAGES.Home.FeaturesImages.arrowTopDiagonalIcon" alt="Green arrow pointing to top right direction">
        </div>

        <p>{{ featureResume }}</p>
    </div>
</template>
<style lang="scss" scoped>
    @use '../../../assets/stylesheets/variables';
    .featureCard {
        display: flex;
        padding: 5rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 3rem;
        flex: 1 0 0;
        align-self: stretch;
        border-radius: 12px;
        border: .1rem solid variables.$grey_15;
        background: variables.$grey_11;

        .featureName {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            align-self: stretch;

            h5 {
                flex: 1 0 0;
                font-size: 2.2rem;
                font-weight: 400;
                line-height: 150%;
            }

            img {
                height: 3.4rem;
            }
        }

        p {
            color: variables.$grey_70;
            font-size: 1.8rem;
            font-weight: 300;
            line-height: 150%;
            letter-spacing: -.011rem;
        }
    }
</style>