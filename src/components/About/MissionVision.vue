<script setup>
    import SectionTitles from '../Standalone/SectionTitles.vue';

    import { IMAGES } from '../../assets/scripts/images';
    
    import { TEXTS } from '../../assets/scripts/texts';

    // MissionVision StyleSheet
    import '../../assets/stylesheets/About/MissionVision.scss';

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