<script setup>
    import Testimonial from './Testimonials/Testimonial.vue';
    import TitleIndividualBusiness from "./titleIndividualBusiness.vue";
    
    import { IMAGES } from '../../assets/scripts/images';
    
    
    import { testimonialmResume } from '../../assets/scripts/texts';
    import { testimonials } from '../../assets/scripts/arrays';
    
</script>

<template>
    <div class="testimonials">
        <TitleIndividualBusiness 
            title="Our"
            green-title="Testimonials"
            :title-resume="testimonialmResume"
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
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';
    .testimonials {
        display: flex;
        width: 159.6rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 10rem;

        .testimonialCarousel {
            display: flex;
            align-items: center;
            gap: 5rem;
            align-self: stretch;

            .leftArrow, .rightArrow {
                display: flex;
                padding: 1.4rem;
                align-items: flex-start;
                gap: 1rem;

                border-radius: 10rem;
                border: .1rem solid variables.$grey_15;
                background-color: variables.$grey_11;

                cursor: pointer;
            }

            .items {
                max-width: 137.2rem;
                overflow: hidden;
                display: flex;
                align-items: flex-start;
                gap: 8rem;
                flex: 1 0 0;
                position: relative;

                .fadeLeft, .fadeRight {
                    height: 34.9rem;
                    position: absolute;
                    top: -1.4rem;
                }

                .fadeLeft {
                    width: 55.6rem;
                    left: 0;
                    
                    background: 
                        linear-gradient(
                            270deg, 
                            rgba(25,25,25, 0.00) 0%,
                            variables.$grey_19 105.84%
                        )
                    ;
                }

                .fadeRight {
                    width: 48rem;
                    right: .1px;

                    background: 
                        linear-gradient(
                            270deg, 
                            variables.$grey_19 10.8%,
                            rgba(25,25,25, 0.00) 105.84%
                        )
                    ;
                }
            }
        }
    }
</style>