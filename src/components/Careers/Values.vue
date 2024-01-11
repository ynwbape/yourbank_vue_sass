<script setup>
    import { ref } from "vue"
    import SectionTitles from '../Standalone/SectionTitles.vue';
    import ValueCard from './Values/ValueCard.vue';

    const valueTitleDescription = "At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.";

    let valuesDescriptionArray = ref([
    "We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.", 
    "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.", 
    "We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.",
    "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking."
    ])
</script>

<template>
    <div class="valuesContainer">
        <SectionTitles
            title="Our"
            green-title="Values"
            :title-description="valueTitleDescription"
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