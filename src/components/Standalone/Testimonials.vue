<script setup>
    import { ref } from "vue";
    import Testimonial from './Testimonials/Testimonial.vue';
    import TitleIndividualBusiness from "./titleIndividualBusiness.vue";
    
    import leftArrow from '../../assets/img/Login/icons/arrows/leftArrow.svg';
    import rightArrow from '../../assets/img/Login/icons/arrows/rightArrow.svg';
    
    const testimonials = ref([
        {
            id: 0,
            testimonial: `YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.`,
            author: "Sara T",
        },
        {
            id: 1,
            testimonial: `I recently started my own business, and
            YourBank has been instrumental in helping 
            me set up my business accounts and secure
            the financing I needed. Their expert guidance
            and tailored solutions have been invaluable.`,
            author: "John D",
        },
        {
            id: 2,
            testimonial: `I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.`,
            author: "Emily G",
        },
    ]);

    const testimonialmResume = "Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey";
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
                <img :src="leftArrow" alt="Green left arrow">
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
                <img :src="rightArrow" alt="Green right arrow">
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