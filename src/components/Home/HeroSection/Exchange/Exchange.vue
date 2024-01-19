<script setup>
    // Exchange StyleSheet
    import '../../../../assets/stylesheets/Home/HeroSection/Exchange.scss';

    const props = defineProps({
        flag: String,
        countryCurrensyAbbv: String,
        countryCurrensy: String,
        amount: Number,
    });

</script>
<template>
    <div class="exchangeCurrensy">
        <div class="country">
            <div>
                <img :src="flag" alt="India's Flag">
                <p>{{ countryCurrensyAbbv }}</p>
            </div>
            <p class="whiteGrey">{{ countryCurrensy }}</p>
        </div>
        <div class="amount">
            <p>{{ amount }}</p>
        </div>
    </div>
</template>