<script setup>
    // Card StyleSheet
    import '../../../assets/stylesheets/Careers/OurBenefits/Card.scss';

    const props = defineProps({
        img: String,
        service: String,
        synopsis: String,
    });
</script>

<template>
    <div class="obCard">
        <div class="obCardTitle">
            <div class="obCardIconContainer">
                <div class="obCardIcon">
                    <img 
                        fetchpriority="high" 
                        width="34"
                        height="34"
                        :src="props.img" 
                        alt="Green Icons"
                    >
                </div>
            </div>
            <h4>{{ service }}</h4>
        </div>

        <p>
            {{ synopsis }}
        </p>
    </div>
</template>