<script setup>
    import SectionTitles from '../Standalone/SectionTitles.vue';
    import ValueCard from './Values/ValueCard.vue';

    import { TEXTS } from '../../assets/scripts/texts';

    import { valuesDescriptionArray } from '../../assets/scripts/arrays';
    
    // Values StyleSheet
    import '../../assets/stylesheets/Careers/Values.scss';
</script>

<template>
    <section class="valuesContainer">
        <SectionTitles
            :title="TEXTS.Careers.Values.title"
            :green-title="TEXTS.Careers.Values.greenTitle"
            :title-description="TEXTS.Careers.Values.valueTitleDescription"
        />

        <article class="valueCardsContainer">
            <div class="vcSubContainer">
                <ValueCard 
                    value-name="Integrity"
                    :value-description="valuesDescriptionArray[0]"
                />
                <ValueCard 
                    value-name="Customer Centricity"
                    :value-description="valuesDescriptionArray[1]"
                />
            </div>
            <div class="vcSubContainer">
                <ValueCard 
                    value-name="Collaboration"
                    :value-description="valuesDescriptionArray[2]"
                />
                <ValueCard 
                    value-name="Innovation"
                    :value-description="valuesDescriptionArray[3]"
                />
            </div>
        </article>
    </section>
</template>