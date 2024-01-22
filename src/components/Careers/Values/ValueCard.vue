<script setup>
    import '../../../assets/stylesheets/Careers/Values/ValueCard.scss';

    const props = defineProps({
        valueName: String,
        valueDescription: String,
    });
</script>

<template>
    <div class="valueCard">
        <h4>{{ valueName }}</h4>

        <p>{{ valueDescription }}</p>
    </div>
</template>