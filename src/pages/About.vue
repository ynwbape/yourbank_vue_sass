<script setup>
    import TitleImageSection from '../components/Standalone/TitleImageSection.vue';
    import MissionVision from '../components/About/MissionVision.vue';
    import PressReleases from '../components/About/PressReleases.vue';

    // Image background for TitleImageSection component
    import abeImg from '../assets/img/About/aboutbankexcellence.png';
    
    // TitleImageSection headings
    // First setence in TitleImageSection component for About part
    const abeOptSentence = "Welcome to YourBank"
    const abeTitle = "Where Banking Meets";
    const abeGreenBoldTtitle = "Excellence!"
    
    // for TitleImageSection description's attribute
    const abeDescription = "At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.";

    // description value for 'alt' attribute in img tag in TitleImageSection component
    const abeImgDesc = "Employees in front of a building"; 
</script>

<template>
    <main>
        <!-- <Toppriority /> -->
        <TitleImageSection 
            :opt-sentence="abeOptSentence"
            :title="abeTitle"
            :green-bold-title="abeGreenBoldTtitle"
            :description="abeDescription"
            :image="abeImg"
            :image-description="abeImgDesc"
        />

        <MissionVision />
        <PressReleases />
    </main>
</template>

<style lang="scss" scoped>
    @use '../assets/stylesheets/variables';

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15rem;
        overflow: hidden;
    }
</style>