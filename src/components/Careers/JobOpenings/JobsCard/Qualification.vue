<script setup>
    import { IMAGES } from '../../../../assets/scripts/images';

    // Qualification StyleSheet
    import '../../../../assets/stylesheets/Careers/JobOpenings/JobsCard/Qualification.scss';

    const props = defineProps({
        requirement: String,
    });
</script>

<template>
    <div class="qualification">
        <img 
            fetchpriority="high"
            width="24"
            height="19"
            :src="IMAGES.Standalone.Tags.tagsBriefcase"
            alt="Grey briefcase icon"
        >

        <p>{{ requirement }}</p>
    </div>
</template>