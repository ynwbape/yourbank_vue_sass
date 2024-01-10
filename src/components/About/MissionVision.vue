<script setup>
    import SectionTitles from '../Standalone/SectionTitles.vue';

    import mvAbstractDesign from "../../assets/img/About/mvAbstractDesign.svg";
    import missionImg from "../../assets/img/About/missionimage.png";
    import visionImg from "../../assets/img/About/visionimage.png";
    
    // let mvTitle = ""
    let mvGreenTitle = "Mission & Vision";
    let mvTitleDescription = "We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development";


</script>

<template>
    <div class="mvContainer">
        <SectionTitles 
            :green-title="mvGreenTitle"
            :title-description="mvTitleDescription"
        />   
        
        <div class="mvSubContainer">
            <div class="missionSection">
                <div class="missionImg">
                    <img class="designBackground" :src="mvAbstractDesign" alt="Dots Design in background">
                    
                    <img :src="missionImg" alt="A plant with a ton of coins on the ground">
                </div>

                <div class="missionTexts">
                    <h4>Mission</h4>

                    <p>
                        At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.
                    </p>
                </div>
            </div>
            <div class="visionSection">
                <div class="visionTexts">
                    <h4>Vision</h4>

                    <p>
                        Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.
                    </p>
                </div>

                <div class="visionImg">
                    <img class="designBackground" :src="mvAbstractDesign" alt="Dots Design in background">
                    
                    <img :src="visionImg" alt="Eye of a human visualize in front of him">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    .mvContainer {
        display: flex;
        width: 159.6rem;
        flex-direction: column;
        align-items: flex-end;
        gap: 8rem;


        .mvSubContainer {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            align-self: stretch;

            .visionSection {
                margin-top: -10rem;
            }
            
            .missionSection, .visionSection {
                display: flex;
                align-items: center;
                align-self: stretch;

                .missionImg, .visionImg  {
                    display: flex;
                    width: 66.4rem;
                    height: 62.1rem;
                    padding: 6rem 6rem 0rem 6rem;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 1rem;

                    border-radius: 5rem 5rem 2rem 2rem;
                    border: .1rem solid variables.$grey_15;
                    background: linear-gradient(106deg, rgba(202, 255, 51, 0.05) -29.45%, rgba(202, 255, 51, 0.00) 27.86%), linear-gradient(267deg, #1C1C1C 40.67%, rgba(28, 28, 28, 0.00) 99.81%);
                    background-blend-mode: normal, normal, screen;
                    
                    position: relative;
                    .designBackground {
                        width: 63.4rem;
                        height: 60.2rem;
                        position: absolute;
                        left: 3.1rem;
                        top: -.7rem;
                    }

                    img {
                        flex: 1 0 0;
                        z-index: 5;
                        align-self: stretch;
                        border-radius: 5rem 5rem 0rem 0rem;
                    }
                }


                .missionTexts, .visionTexts {
                    display: flex;
                    padding-left: 5rem;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 1.4rem;
                    flex: 1 0 0;
                    border-left: .1rem solid variables.$green_60;

                    
                    h4 {
                        align-self: stretch;
                        color: variables.$absolute_white;
                        font-size: 3.8rem;
                        font-weight: 500;
                        line-height: 150%; /* 57px */
                    }

                    p {
                        align-self: stretch;
                        color: variables.$grey_70;
                        font-size: 1.8rem;
                        font-weight: 300;
                        line-height: 150%; /* 27px */
                    }
                }

                .visionTexts {
                        padding-left: unset;
                        padding-right: 5rem;
                        border-left: unset;
                        border-right: 1px solid var(--Green-60, #CAFF33);
                    }
            }
        }
    }
</style>