<script setup>
    import { IMAGES } from '../../../../assets/scripts/images';

    // Transaction StyleSheet
    import '../../../../assets/stylesheets/Home/HeroSection/Transaction.scss';

    const props = defineProps({
        transacName: String,
        currency: String,
        money: Number,
    });
</script>

<template>
    <div class="transaction">
        <div class="name">
            <div class="nameIconContainer">
                <img :src="IMAGES.Home.HeroSectionImages.transacIcon" alt="Transaction Icon">
            </div>
            <div class="texts">
                <p>Transaction</p>
                <p>{{ transacName }}</p>
            </div>
        </div>
        <div class="numbers">
            <p>-{{ currency }}{{ money }}.00</p>
        </div>
    </div>
</template>