<script setup>
    // SectionTitles StyleSheet 
    import '../../assets/stylesheets/Standalone/SectionTitles.scss';

    const props = defineProps({
        title: String,
        greenTitle: String,
        titleDescription: String,
    })
</script>
<template>
    <div class="sectionTitles">
            <h2>
                {{ title }}
                <strong>
                     {{ greenTitle }}
                </strong>
            </h2>

            <p>
                {{ titleDescription }}
            </p>
        </div>  
</template>