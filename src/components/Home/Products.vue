<script setup>
    import { ref } from "vue";
    import TitleIndividualBusiness from '../Standalone/titleIndividualBusiness.vue';
    import ProductCard from './Products/ProductCard.vue';
    
    import greenBriefcaseIcon from '../../assets/img/Home/icons/greenbriefcase.fill.svg';
    import SavingsIcon from '../../assets/img/Home/icons/savingsicon.svg';
    import greenMoneyIcon from '../../assets/img/Home/icons/moneyicon.svg';
    
    const productsResume = "Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations";


    let products = ref([
        {
            id: 0,
            name: "Checking Accounts",
            resume: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
            url: greenBriefcaseIcon,
            alt: "Green briefcase icon",
        },
        {
            id: 1,
            name: "Savings Accounts",
            resume: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
            url: SavingsIcon,
            alt: "Green briefcase icon",
        },
        {
            id: 2,
            name: "Loans and Mortgages",
            resume: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
            url: greenMoneyIcon,
            alt: "Green briefcase icon",
        },
    ])
</script>

<template>
    <div class="productsContainer">
        <TitleIndividualBusiness 
            title="Our"
            green-title="Products"
            :title-resume="productsResume"
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