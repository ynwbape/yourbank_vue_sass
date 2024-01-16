<script setup>
    import SectionTitles from '../Standalone/SectionTitles.vue';

    import { IMAGES } from '../../assets/scripts/images';
    
    import { TEXTS } from '../../assets/scripts/texts';


</script>

<template>
    <div class="mvContainer">
        <SectionTitles 
            :green-title="TEXTS.About.MissionVision.mvGreenTitle"
            :title-description="TEXTS.About.MissionVision.mvTitleResume"
        />   
        
        <div class="mvSubContainer">
            <div class="missionSection">
                <div class="missionImg">
                    <img class="designBackground" :src="IMAGES.About.aboutImages.missionVision.mvAbstractDesign" alt="Dots Design in background">
                    
                    <img :src="IMAGES.About.aboutImages.missionVision.missionImg" alt="A plant with a ton of coins on the ground">
                </div>

                <div class="missionTexts">
                    <h4>Mission</h4>

                    <p>
                        {{ TEXTS.About.MissionVision.Mission.missionResume }}
                    </p>
                </div>
            </div>
            <div class="visionSection">
                <div class="visionTexts">
                    <h4>Vision</h4>

                    <p>
                        {{ TEXTS.About.MissionVision.Vision.visionResume }}
                    </p>
                </div>

                <div class="visionImg">
                    <img class="designBackground" :src="IMAGES.About.aboutImages.missionVision.mvAbstractDesign" alt="Dots Design in background">
                    
                    <img :src="IMAGES.About.aboutImages.missionVision.visionImg" alt="Eye of a human visualize in front of him">
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