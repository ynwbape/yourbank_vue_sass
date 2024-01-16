<script setup>
    import TitleIndividualBusiness from '../Standalone/titleIndividualBusiness.vue';
    import ProductCard from './Products/ProductCard.vue';
    
    import { TEXTS } from '../../assets/scripts/texts'
    import { products } from '../../assets/scripts/arrays';


    
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

<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    .productsContainer {
        display: flex;
        width: 159.6rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 10rem;

        .productCards {
            display: flex;
            align-items: flex-start;
            gap: 5rem;
            align-self: stretch;
        }
    }
</style>