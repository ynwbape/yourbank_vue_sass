<script setup>
    import { ref } from "vue";
    
    import SectionTitles from '../Standalone/SectionTitles.vue';
    import PressCard from '../About/PressReleases/PressCard.vue';

    // let mvTitle = ""
    let prGreenTitle = "Press Releases";
    let prTitleDescription = "Stay updated with the latest happenings and exciting developments at YourBank through our press releases.";

    import prCardImg from "../../assets/img/About/PressCard/prcard.png";
    import prCardImg2 from "../../assets/img/About/PressCard/prcard2.png";
    import prCardImg3 from "../../assets/img/About/PressCard/prcard3.png";
    import prCardImg4 from "../../assets/img/About/PressCard/prcard4.png";

    let pressCardArray = ref([
        {
            title: "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction",
            description: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.",
            imgURL: prCardImg,
            imgAlt: "Expert & client holding hands after a succeed debate",
        },
        {
            title: "YourBank Expands Branch Network with Opening of New Location in Chennai",
            description: "YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.",
            imgURL: prCardImg2,
            imgAlt: "Image of office buildings",
        },
        {
            title: "YourBank Partners with Local Nonprofit to Support Financial Education Initiatives",
            description: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
            imgURL: prCardImg3,
            imgAlt: "Workers writing some important things in their diaries",
        },
        {
            title: "YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility",
            description: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
            imgURL: prCardImg4,
            imgAlt: "Man with a board with the recycle signs represented by the earth",
        },
    ])
</script>

<template>
    <div class="prContainer">
        <SectionTitles 
            :green-title="prGreenTitle"
            :title-description="prTitleDescription"
        />   
        
        <div class="prCardSubContainer">
            <div class="prSubContainer">
                <PressCard 
                    :card-title="pressCardArray[0].title"
                    :card-description="pressCardArray[0].description"
                    :card-img="pressCardArray[0].imgURL"
                    :card-img-alt="pressCardArray[0].imgAlt"

                    tag-type="Location"
                    tag-value="India"

                    tag-type2="Date"
                    tag-value2="06/11/2024"
                />
                <PressCard 
                    :card-title="pressCardArray[1].title"
                    :card-description="pressCardArray[1].description"
                    :card-img="pressCardArray[1].imgURL"
                    :card-img-alt="pressCardArray[1].imgAlt"

                    tag-type="Location"
                    tag-value="India"

                    tag-type2="Date"
                    tag-value2="12/11/2024"
                />
            </div>

            <div class="prSubContainer">
                <PressCard 
                    :card-title="pressCardArray[2].title"
                    :card-description="pressCardArray[2].description"
                    :card-img="pressCardArray[2].imgURL"
                    :card-img-alt="pressCardArray[2].imgAlt"

                    tag-type="Location"
                    tag-value="India"

                    tag-type2="Date"
                    tag-value2="24/11/2024"
                />
                <PressCard 
                    :card-title="pressCardArray[3].title"
                    :card-description="pressCardArray[3].description"
                    :card-img="pressCardArray[3].imgURL"
                    :card-img-alt="pressCardArray[3].imgAlt"

                    tag-type="Location"
                    tag-value="India"

                    tag-type2="Date"
                    tag-value2="28/11/2024"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    .prContainer {
        display: flex;
        width: 159.6rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 8rem;
        .prCardSubContainer {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 3rem;
            align-self: stretch;    
            .prSubContainer {
                display: flex;
                align-items: flex-start;
                gap: 3rem;
                align-self: stretch;
            }
        }
    }
</style>