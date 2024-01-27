<script setup>
    import SectionTitles from '../Standalone/SectionTitles.vue';
    import PressCard from '../About/PressReleases/PressCard.vue';

    import { TEXTS } from '../../assets/scripts/texts';


    import { pressCardArray } from '../../assets/scripts/arrays';
    
    // PressReleases StyleSheet
    import '../../assets/stylesheets/About/PressReleases.scss';
</script>

<template>
    <section class="prContainer">
        <SectionTitles 
            :green-title="TEXTS.About.PressReleases.prGreenTitle"
            :title-description="TEXTS.About.PressReleases.prTitleResume"
        />   
        
        <div class="prCardSubContainer">
            <div class="prSubContainer">
                <PressCard 
                    :card-title="pressCardArray[0].title"
                    :card-description="pressCardArray[0].description"
                    :card-img="pressCardArray[0].imgURL"
                    :card-img-alt="pressCardArray[0].imgAlt"

                    tag-type="Location"
                    tag-value="India"

                    tag-type2="Date"
                    tag-value2="06/11/2024"
                />
                <PressCard 
                    :card-title="pressCardArray[1].title"
                    :card-description="pressCardArray[1].description"
                    :card-img="pressCardArray[1].imgURL"
                    :card-img-alt="pressCardArray[1].imgAlt"

                    tag-type="Location"
                    tag-value="India"

                    tag-type2="Date"
                    tag-value2="12/11/2024"
                />
            </div>

            <div class="prSubContainer">
                <PressCard 
                    :card-title="pressCardArray[2].title"
                    :card-description="pressCardArray[2].description"
                    :card-img="pressCardArray[2].imgURL"
                    :card-img-alt="pressCardArray[2].imgAlt"

                    tag-type="Location"
                    tag-value="India"

                    tag-type2="Date"
                    tag-value2="24/11/2024"
                />
                <PressCard 
                    :card-title="pressCardArray[3].title"
                    :card-description="pressCardArray[3].description"
                    :card-img="pressCardArray[3].imgURL"
                    :card-img-alt="pressCardArray[3].imgAlt"

                    tag-type="Location"
                    tag-value="India"

                    tag-type2="Date"
                    tag-value2="28/11/2024"
                />
            </div>
        </div>
    </section>
</template>