<script setup>
    import { IMAGES } from '../../assets/scripts/images';

    // TopPriority StyleSheet 
    import '../../assets/stylesheets/Security/TopPriority.scss';

    const props = defineProps({
        // Optionnal sentence for this component 
        //(Use in About Component)
        title: String,
        greenBoldTitle: String,
        //When greenBoldTitle is in between case
        description: String,
        image: String,
        imageDescription: String
    });
</script>

<template>
    <section class="tpContainer">
        <img
            fetchpriority="low" 
            :src="IMAGES.Standalone.TitleImageSection.svgBG" 
            alt="Abstract Design Background of green dots"
        >
        
        <div class="tpTitles">
            <h2>
                {{ title }}
                <strong>{{ greenBoldTitle }}</strong>
            </h2>

            <p>
                {{ description }}
            </p>
        </div>

    
        <img 
            fetchpriority="high" 
            witch="868"
            height="716"
            class="tpImage" 
            :src="props.image" 
            :alt="props.imageDescription"
        >
    </section>
</template>