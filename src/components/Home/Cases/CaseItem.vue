<script setup>
    // CaseItem StyleSheet
    import '../../../assets/stylesheets/Home/Cases/CaseItem.scss';

    const props = defineProps({
        caseItemName: String,
        caseImgUrl: String,
        caseImgAlt: String,
    });
</script>

<template>
    <div class="casesItem">
        <div class="casesIconContainer">
            <div class="casesIcon">
                <img :src="props.caseImgUrl" :alt="props.caseImgAlt">
            </div>
        </div>
        
        <p>{{ caseItemName }}</p>
    </div>
</template>