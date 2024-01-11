<script setup>
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
    });

    const props = defineProps({
        title: String,
        greenTitle: String,
        titleResume: String,
    })
</script>

<template>
    <div class="tibHeader">
            <div class="tibTitles">
                <h2>
                    {{ title }}
                    <strong>{{ greenTitle }}</strong>
                </h2>
                <p>{{ titleResume }}</p>
            </div>
            <div class="tibTabButtons">
                <button id="individual" class="active">Individuals</button>
                <button id="business" class="unfocused">Businesses</button>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    .tibHeader {
            display: flex;
            align-items: flex-end;
            gap: 30rem;
            align-self: stretch;
            .tibTitles {
                h2 {
                    font-size: 4.8rem;
                    font-weight: 500;
                    line-height: 150%;
                    align-self: stretch;
                    margin-top: 2rem;
                    margin-bottom: 1.4rem;

                    strong {
                        font-weight: 500;
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

            .tibTabButtons {
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
                    border-radius: 14rem;
                    text-align: center;
                    font-size: 1.8rem;
                    font-weight: 400;
                    line-height: 150%;

                    &.active {
                        background-color: variables.$green_60;
                        // Text
                        color: variables.$grey_11;
                        
                    }

                    &.active:hover {
                        background-color: variables.$green_65;
                    }

                    &.unfocused {
                        background-color: transparent;

                        color: variables.$absolute_white;
                    }

                    &.unfocused:hover {
                        background-color: variables.$grey_20;
                    }
                }
            }
        }
</style>