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
                <button class="active">Individuals</button>
                <button class="unfocused">Businesses</button>
            </div>
        </div>
</template>