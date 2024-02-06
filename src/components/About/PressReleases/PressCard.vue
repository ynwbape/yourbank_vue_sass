<script setup>
    import Tags from '../../Standalone/Tags.vue';

    // PressCard StyleSheet
    import '../../../assets/stylesheets/About/PressReleases/PressCard.scss';

    const props = defineProps({
        cardTitle: String,
        cardDescription: String,
        cardImg: String,
        cardImgAlt: String,

        tagType: String,
        tagValue: String,
        
        tagType2: String,
        tagValue2: String,

    });
</script>

<template>
    <div class="prCard">
        <img 
            fetchpriority="high"  
            width="723"  
            height="333"  
            :src="props.cardImg" 
            :alt="props.cardImgAlt"
        >

        <div class="prCardTexts">
            <div class="prTitlesTags">
                <h4>{{ cardTitle }}</h4>
                
                <div class="prTags">
                    <Tags 
                        :type="props.tagType"
                        :value="props.tagValue"
                    />
                    <Tags 
                        :type="props.tagType2"
                        :value="props.tagValue2"
                    />
                </div>
            </div>
            <p>{{ cardDescription }}</p>
        </div>
    </div>
</template>