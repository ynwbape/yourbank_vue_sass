<script setup>
    import TitleIndividualBusiness from '../Standalone/TitleIndividualBusiness.vue';
    import ProductCard from './Products/ProductCard.vue';
    
    import { TEXTS } from '../../assets/scripts/texts'
    import { products } from '../../assets/scripts/arrays';

    // Products StyleSheet
    import '../../assets/stylesheets/Home/Products.scss';
</script>

<template>
    <div class="productsContainer">
        <TitleIndividualBusiness 
            title="Our"
            green-title="Products"
            :title-resume="TEXTS.Home.Products.paragraph"
        />

        <div class="productCards">
            <ProductCard 
                v-for="product in products"
                :key="product.id"
                :product-name="product.name"
                :product-resume="product.resume"
                :img-url="product.url"
                :img-alt="product.alt"
            />
        </div>
    </div>
</template>