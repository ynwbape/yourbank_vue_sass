<script setup>
    import { IMAGES } from '../../../assets/scripts/images';

    // FeatureCard StyleSheet
    import "../../../assets/stylesheets/Home/Features/FeatureCard.scss";

    const props = defineProps({
        feature: String,
        featureResume: String,
    });
</script>
<template>
    <div class="featureCard">
        <div class="featureName">
            <h5>{{ feature }}</h5>
            
            <img 
                fetchpriority="high" 
                width="34" 
                height="34" 
                :src="IMAGES.Home.FeaturesImages.arrowTopDiagonalIcon" alt="Green arrow pointing to top right direction"
            >
        </div>

        <p>{{ featureResume }}</p>
    </div>
</template>