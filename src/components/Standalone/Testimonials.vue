<script setup>
    import { ref } from "vue"
    import Testimonial from '../Standalone//Testimonials/Testimonial.vue'
    
    import leftArrow from '../../assets/img/Login/icons/arrows/leftArrow.svg'
    import rightArrow from '../../assets/img/Login/icons/arrows/rightArrow.svg'

    
    
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
    ])

</script>

<script>
    // When content is loaded
    window.addEventListener('DOMContentLoaded', () => {
        
        const individual = document.getElementById('individual');
        const business = document.getElementById('business');
        
        let isIndivualClicked = false
        let isBusinessClicked = false
        
        function changeClassName() {
            business.addEventListener("click", () => {
                !isBusinessClicked;
                individual.classList.remove("active");
                individual.classList.add("unfocused");
                business.classList.remove("unfocused");
                business.classList.add("active");
            });

            if (isBusinessClicked === true && business.classList.contains("active")) {
                console.log("Business already have this class !");
            }
            
            individual.addEventListener("click", () => {
                !isIndivualClicked;
                business.classList.remove("active");
                business.classList.add("unfocused");
                individual.classList.remove("unfocused");
                individual.classList.add("active");
                
            });
            
            if (isIndivualClicked === true && individual.classList.contains("active")) {
                console.log("Individual already have this class !");
            }
        };

        changeClassName();
    })
    
    // console.log(individual, business);
</script>

<template>
    <div class="testimonials">
        <div class="testimonialHeader">
            <div class="testimonialTitles">
                <h2>
                    Our <strong>Testimonials</strong>
                </h2>
                <p>
                    Discover how YourBank has transformed lives with innovative digital solutions and personalized customer <br>
                    service. See why our clients trust us for a secure and prosperous financial journey
                </p>
            </div>
            <div class="testimonialButtons">
                <button id="individual" class="active">For Individuals</button>
                <button id="business" class="unfocused">For Businesses</button>
            </div>
        </div>
        <div class="testimonialCarousel">
            <button id="slideLeft" class="leftArrow">
                <img :src="leftArrow" alt="Green left arrow">
            </button>
            <div class="items">
                <!-- array.map version Vue -->
                <Testimonial
                    v-for="testimonial in testimonials"
                    :key="testimonial.id"
                    :testimonial="testimonial.testimonial" 
                    :author="testimonial.author"
                /> 
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

        .testimonialHeader {
            display: flex;
            align-items: flex-end;
            gap: 30rem;
            align-self: stretch;
            .testimonialTitles {
                h2 {
                    font-size: 4.8rem;
                    font-weight: 500;
                    line-height: 150%;
                    align-self: stretch;
                    margin-top: 2rem;
                    margin-bottom: 1.4rem;

                    strong {
                        font-weight: 400;
                        color: variables.$green_60;
                    }
                }

                p {
                    color: variables.$grey_70;
                    font-size: 1.8rem;
                    font-weight: 300;
                    line-height: 150%;
                    align-self: stretch;
                }
            }

            .testimonialButtons {
                display: flex;
                padding: 1.4rem;
                align-items: flex-start;
                border-radius: 8.2rem;
                border: .1rem solid variables.$grey_15;
                background-color: variables.$grey_11;

                button {
                    // Button Shape
                    display: flex;
                    padding: 1.4rem 2.4rem;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                    border: none;
                    cursor: pointer;

                    &.active {
                        border-radius: 14rem;
                        background-color: variables.$green_60;
                    
                        // Text
                        color: variables.$grey_11;
                        text-align: center;
                        font-size: 1.8rem;
                        font-weight: 400;
                        line-height: 150%;
                    }

                    &.active:hover {
                        background-color: variables.$green_65;
                    }

                    &.unfocused {
                        border-radius: 14rem;
                        background-color: transparent;

                        color: variables.$absolute_white;
                        text-align: center;
                        font-size: 1.8rem;
                        font-weight: 400;
                        line-height: 150%;
                    }

                    &.unfocused:hover {
                        background-color: variables.$grey_20;
                    }
                }
            }
        }

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
            }

            .items {
                max-width: 137.2rem;
                overflow: hidden;
                display: flex;
                align-items: flex-start;
                gap: 8rem;
                flex: 1 0 0;
            }
        }
    }
</style>