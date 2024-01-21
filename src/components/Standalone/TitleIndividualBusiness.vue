<script setup>
    // TitleIndividualBusiness StyleSheet
    import '../../assets/stylesheets/Standalone/TitleIndividualBusiness.scss';

    
    const props = defineProps({
        title: String,
        greenTitle: String,
        titleResume: String,
    });
</script>

<template>
    <div class="tibHeader">
            <div class="tibTitles">
                <h2>
                    {{ title }}
                    <strong>{{ greenTitle }}</strong>
                </h2>
                <p>{{ titleResume }}</p>
            </div>
            <div class="tibTabButtons">
                <button id="individual" class="active">Individuals</button>
                <button id="business" class="unfocused">Businesses</button>
            </div>
        </div>
</template>