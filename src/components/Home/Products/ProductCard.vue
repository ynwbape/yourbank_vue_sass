<script setup>
    // ProductCard StyleSheet
    import '../../../assets/stylesheets/Home/Products/ProductCard.scss';
    
    const props = defineProps({
        imgUrl: String,
        imgAlt: String,
        productName: String,
        productResume: String,
    });
</script>

<template>
    <div class="productCard">
        <div class="pcIconContainer">
            <div class="pcIcon">
                <img :src="props.imgUrl" :alt="props.imgAlt">
            </div>
        </div>

        <div class="pcTexts">
            <h5>{{ productName }}</h5>

            <p>{{ productResume }}</p>
        </div>
    </div>
</template>