<script setup>
    import SectionTitles from '../Standalone/SectionTitles.vue';
    import FeatureCard from './Features/FeatureCard.vue';
    
    import { TEXTS } from '../../assets/scripts/texts'; 

    import { featureCardArray } from '../../assets/scripts/arrays';

    // Features StyleSheet
    import "../../assets/stylesheets/Home/Features.scss";
    // SectionTitles StyleSheet
    import '../../assets/stylesheets/Standalone/SectionTitles.scss';
</script>

<template>
    <section class="featuresContainer">
        <SectionTitles 
            :title="TEXTS.Home.Features.title"
            :green-title="TEXTS.Home.Features.greenTitle"
            :title-description="TEXTS.Home.Features.paragraph"
        />

        <article class="features">
            <div class="featuresTypes">
                <button class="activeFeature">Online Banking</button>
                <button>Financial Tools</button>
                <button>Customer Support</button>
            </div>

            <div class="featuresCardContainer">
                <div class="fcSubContainer">
                    <FeatureCard 
                        :feature="featureCardArray[0].feature"
                        :feature-resume="featureCardArray[0].featureResume"
                    />
                    <FeatureCard 
                        :feature="featureCardArray[1].feature"
                        :feature-resume="featureCardArray[1].featureResume"
                    />
                </div>
                <div class="fcSubContainer">
                    <FeatureCard 
                        :feature="featureCardArray[2].feature"
                        :feature-resume="featureCardArray[2].featureResume"
                    />
                    <FeatureCard 
                        :feature="featureCardArray[3].feature"
                        :feature-resume="featureCardArray[3].featureResume"
                    />    
                </div>
            </div>
        </article>
    </section>
</template>