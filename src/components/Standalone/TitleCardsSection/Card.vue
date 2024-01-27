<script setup>
    // Card StyleSheet
    import '../../../assets/stylesheets/Standalone/TitleCardsSection/Card.scss';

    const props = defineProps({
        img: String,
        service: String,
        synopsis: String,
    });
</script>

<template>
    <div class="card">
        <div class="cardTitle">
            <div class="cardIconContainer">
                <div class="cardIcon">
                    <img :src="props.img" alt="Card green icon">
                </div>
            </div>
            <h4>{{ service }}</h4>
        </div>

        <p>
            {{ synopsis }}
        </p>
    </div>
</template>