<script setup>
    import Testimonial from './Testimonials/Testimonial.vue';
    import TitleIndividualBusiness from "./titleIndividualBusiness.vue";
    
    import { IMAGES } from '../../assets/scripts/images';
    
    
    import { TEXTS } from '../../assets/scripts/texts';
    import { testimonials } from '../../assets/scripts/arrays';

    // Testimonials StyleSheet
    import '../../assets/stylesheets/Home/Testimonials.scss';
    
</script>

<template>
    <div class="testimonials">
        <TitleIndividualBusiness 
            title="Our"
            green-title="Testimonials"
            :title-resume="TEXTS.Standalone.titleIndividualBusiness.paragraph"
        />
        
        <div class="testimonialCarousel">
            <button id="slideLeft" class="leftArrow">
                <img :src="IMAGES.Home.testimonialsImages.leftArrowIcon" alt="Green left arrow">
            </button>
            <div class="items">
                <div class="fadeLeft"></div>
                <!-- array.map version Vue -->
                <Testimonial
                    v-for="testimonial in testimonials"
                    :key="testimonial.id"
                    :testimonial="testimonial.testimonial" 
                    :author="testimonial.author"
                /> 
                <div class="fadeRight"></div>
            </div>
            <button id="slideRight" class="rightArrow">
                <img :src="IMAGES.Home.testimonialsImages.rightArrowIcon" alt="Green right arrow">
            </button>
            
            <!-- For Mobile -->
            <div class="itemsMobile">
                <div class="fadeLeftMobile"></div>
                <Testimonial 
                    v-for="testimonial in testimonials"
                    :key="testimonial.id"
                    :testimonial="testimonial.testimonial" 
                    :author="testimonial.author"
                />
                <div class="fadeRightMobile"></div>
            </div>
            
            <div class="tCarouselBtnMobile">
                <button id="slideLeftMobile" class="leftArrowMobile">
                    <img :src="IMAGES.Home.testimonialsImages.leftArrowIcon" alt="Green left arrow">
                </button>
                <button id="slideRightMobile" class="rightArrowMobile">
                    <img :src="IMAGES.Home.testimonialsImages.rightArrowIcon" alt="Green right arrow">
                </button>
            </div>
        </div>
    </div>
</template>