<script setup>
    import TitleImageSection from '../components/Standalone/TitleImageSection.vue';
    import MissionVision from '../components/About/MissionVision.vue';
    import PressReleases from '../components/About/PressReleases.vue';

    // Image background for TitleImageSection component
    import { IMAGES } from '../assets/scripts/images';
    
     import { TEXTS } from '../assets/scripts/texts';
</script>

<template>
    <main>
        <!-- <Toppriority /> -->
        <TitleImageSection 
            :opt-sentence="TEXTS.About.BankExcellence.abeOptSentence"
            :title="TEXTS.About.BankExcellence.abeTitle"
            :green-bold-title="TEXTS.About.BankExcellence.abeGreenBoldTtitle"
            :description="TEXTS.About.BankExcellence.abeResume"
            :image="IMAGES.About.aboutImages.abeImg"
            :image-description="TEXTS.About.BankExcellence.abeImgDesc"
        />

        <MissionVision />
        <PressReleases />
    </main>
</template>

<style lang="scss" scoped>
    @use '../assets/stylesheets/variables';
</style>