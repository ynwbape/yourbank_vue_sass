<script setup> 
    import { IMAGES } from '../../../assets/scripts/images';

    // Testimonial StyleSheet
    import '../../../assets/stylesheets/Home/Testimonials/Testimonial.scss';

    const props = defineProps({
        testimonial: String,
        author: String,
    });
</script>

<template>
    <div class="item">
        <img 
            fetchpriority="high" 
            width="60" 
            height="60"
            :src="IMAGES.Home.testimonialsImages.quoteIcon" 
            alt="Green quote icon"
        >

        <p>
            {{ testimonial }}
        </p>

        <span>{{ author }}</span>
    </div>
</template>