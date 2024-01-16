<script setup>
    import SectionTitles from '../Standalone/SectionTitles.vue';
    import ValueCard from './Values/ValueCard.vue';

    import { TEXTS } from '../../assets/scripts/texts';

    import { valuesDescriptionArray } from '../../assets/scripts/arrays';
    
</script>

<template>
    <div class="valuesContainer">
        <SectionTitles
            :title="TEXTS.Careers.Values.title"
            :green-title="TEXTS.Careers.Values.greenTitle"
            :title-description="TEXTS.Careers.Values.valueTitleDescription"
        />

        <div class="valueCardsContainer">
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
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    .valuesContainer {
        display: flex;
        width: 159.6rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 8rem;

        .valueCardsContainer {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8rem;
            align-self: stretch;

            .vcSubContainer {
                display: flex;
                align-items: flex-start;
                gap: 8rem;
                align-self: stretch;
            }
        }
    }
</style>