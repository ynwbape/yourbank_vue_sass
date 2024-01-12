<script setup>
    import {ref} from "vue";
    import SectionTitles from '../Standalone/SectionTitles.vue';
    import FeatureCard from './Features/FeatureCard.vue';
    
    const featuresResume = "Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience";

    let featureCardArray = ref([
        {
            feature: "24/7 Account Access",
            featureResume: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
        },
        {
            feature: "Mobile Banking App",
            featureResume: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
        },
        {
            feature: "Secure Transactions",
            featureResume: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
        },
        {
            feature: "Bill Pay and Transfers",
            featureResume: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
        },
    ]);
</script>
<template>
    <div class="featuresContainer">
        <SectionTitles 
            title="Our"
            green-title="Features"
            :title-description="featuresResume"
        />

        <div class="features">
            <div class="featuresTypes">
                <button class="activeFeature">Online Banking</button>
                <button>Financial Tools</button>
                <button>Customer Support</button>
            </div>

            <div class="featuresCardContainer">
                <div class="fcSubContainer">
                    <FeatureCard 
                        :feature="featureCardArray[0].feature"
                        :feature-resume="featureCardArray[0].featureResume"
                    />
                    <FeatureCard 
                        :feature="featureCardArray[1].feature"
                        :feature-resume="featureCardArray[1].featureResume"
                    />
                </div>
                <div class="fcSubContainer">
                    <FeatureCard 
                        :feature="featureCardArray[2].feature"
                        :feature-resume="featureCardArray[2].featureResume"
                    />
                    <FeatureCard 
                        :feature="featureCardArray[3].feature"
                        :feature-resume="featureCardArray[3].featureResume"
                    />    
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    .featuresContainer {
        display: flex;
        width: 159.6rem;
        flex-direction: column;
        align-items: center;
        gap: 8rem;

        .features {
            display: flex;
            align-items: flex-start;
            gap: 3rem;
            align-self: stretch;

            .featuresTypes {
                display: flex;
                padding: 5rem;
                flex-direction: column;
                align-items: flex-start;
                gap: 2.4rem;
                border-radius: 1.2rem;
                background-color: variables.$grey_11;

                button {
                    display: flex;
                    padding: 1.8rem 2.4rem;
                    align-items: center;
                    gap: 1rem;
                    align-self: stretch;
                    border-radius: 10rem;
                    border: .1rem solid variables.$grey_15;
                    background-color: transparent;
                    font-size: 1.8rem;
                    cursor: pointer;
                    &.activeFeature {
                        background-color: variables.$grey_10;
                        color: variables.$green_60;
                        font-weight: 400;
                        line-height: 150%;
                    }
                }

            }

            .featuresCardContainer {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 3rem;
                flex: 1 0 0;

                .fcSubContainer {
                    display: flex;
                    align-items: flex-start;
                    gap: 3rem;
                    align-self: stretch;
                }
            }
        }
    }
</style>