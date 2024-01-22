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
        <img :src="IMAGES.Standalone.Tags.tagsBriefcase" alt="Grey briefcase icon">

        <p>{{ requirement }}</p>
    </div>
</template>