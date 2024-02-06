<script setup>
    // Exchange StyleSheet
    import '../../../../assets/stylesheets/Home/HeroSection/Exchange.scss';

    const props = defineProps({
        flag: String,
        countryCurrensyAbbv: String,
        countryCurrensy: String,
        amount: Number,
        flagDescription: String,
    });

</script>

<template>
    <div class="exchangeCurrensy">
        <div class="country">
            <div>
                <img 
                    fetchpriority="high" 
                    width="35"
                    height="35"
                    :src="flag" 
                    :alt="flagDescription">
                <p>{{ countryCurrensyAbbv }}</p>
            </div>
            <p class="whiteGrey">{{ countryCurrensy }}</p>
        </div>
        <div class="amount">
            <p>{{ amount }}</p>
        </div>
    </div>
</template>