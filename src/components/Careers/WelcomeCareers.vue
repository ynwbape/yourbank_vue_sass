<script setup>
    import { IMAGES } from '../../assets/scripts/images';

    // TitleImageSection StyleSheet
    import '../../assets/stylesheets/Careers/WelcomeCareers.scss';

    const props = defineProps({
        // Optionnal sentence for this component 
        //(Use in About Component)
        optSentence: String,
        title: String,
        greenBoldTitle: String,
        //When greenBoldTitle is in between case
        endTitle: String,
        description: String,
        image: String,
        imageDescription: String
    });
</script>

<template>
    <section class="wybcContainer">
        <img class="wybcImgAbstract" :src="IMAGES.Standalone.TitleImageSection.svgBG" alt="Abstract Design Background of green dots">
        
        <div class="wybcTitles">
            <p class="wybcBeforeTitle">{{ optSentence }}</p>
            
            <h2>
                {{ title }}
                <strong>{{ greenBoldTitle }}</strong>
                {{ endTitle }}
            </h2>
            
            <p>
                {{ description }}
            </p>
        </div>
        
        <img 
            class="wybcYBCImg" 
            fetchpriority="high" 
            width="968" 
            height="716"
            :src="props.image" 
            :alt="props.imageDescription"    
        >
    </section>
</template>