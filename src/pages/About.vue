<script setup>
    import TitleImageSection from '../components/Standalone/TitleImageSection.vue';
    import MissionVision from '../components/About/MissionVision.vue';
    import PressReleases from '../components/About/PressReleases.vue';

    // Image background for TitleImageSection component
    import { IMAGES } from '../assets/scripts/images';
    
     import {
        abeResume,
        abeTitle,
        abeGreenBoldTtitle,
        abeImgDesc
     } from '../assets/scripts/texts';
</script>

<template>
    <main>
        <!-- <Toppriority /> -->
        <TitleImageSection 
            :opt-sentence="abeOptSentence"
            :title="abeTitle"
            :green-bold-title="abeGreenBoldTtitle"
            :description="abeResume"
            :image="IMAGES.About.aboutImages.abeImg"
            :image-description="abeImgDesc"
        />

        <MissionVision />
        <PressReleases />
    </main>
</template>

<style lang="scss" scoped>
    @use '../assets/stylesheets/variables';
</style>