<script setup>
    import { ref } from 'vue';
    import Card from '../Standalone/ProtectYou/Card.vue';
    
    import pYouImg from '../../assets/img/Security/protectyouimage.png';

    import addThingIcon from '../../assets/img/Security/icons/addThingIcon.svg';
    import pilesIcon from '../../assets/img/Security/icons/pilesicon.svg';
    import starsIcon from '../../assets/img/Security/icons/starsicon.svg';
    import mobileBankIcon from '../../assets/img/Security/icons/mobilebankicon.svg';
    
    let cardArray = ref([
        {
            id: 0,
            image: addThingIcon,
            service: "Secure Online Banking Platform",
            synopsis: "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.",
        },
        {
            id: 1,
            image: pilesIcon,
            service: "Multi-Factor Authentication",
            synopsis: "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.",
        },
        {
            id: 2,
            image: starsIcon,
            service: "Fraud Monitoring",
            synopsis: "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.",
        },
        {
            id: 3,
            image: mobileBankIcon,
            service: "Secure Mobile Banking",
            synopsis: "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.",
        },
        // {},
        // {},
        // {},
    ]);
</script>

<template>
    <section class="protectYouContainer">
        <div class="protectYouTitles">
            <h2>
                How We <strong>Protect You</strong>
            </h2>

            <p>
                At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data <br> protection measures ensure your assets and transactions are safeguarded at all times
            </p>
        </div>

        <div class="cards">
            <img :src="pYouImg" alt="">

            <div class="subContainer">
                <Card
                    :img="cardArray[0].image" 
                    :service="cardArray[0].service" 
                    :synopsis="cardArray[0].synopsis"
                />
                <Card
                    :img="cardArray[1].image" 
                    :service="cardArray[1].service" 
                    :synopsis="cardArray[1].synopsis"
                />
            </div>

            <div class="subContainer">
                <Card
                    :img="cardArray[2].image" 
                    :service="cardArray[2].service" 
                    :synopsis="cardArray[2].synopsis"
                />
                <Card
                    :img="cardArray[3].image" 
                    :service="cardArray[3].service" 
                    :synopsis="cardArray[3].synopsis"
                />
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    .protectYouContainer {
        display: flex;
        width: 160rem;
        flex-direction: column;
        align-items: center;
        gap: 20rem;

        .protectYouTitles {
            display: flex;
            padding-right: 30rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.4rem;
            align-self: stretch;

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
                font-size: 1.8rem;
                font-weight: 300;
                line-height: 150%;
                color: variables.$grey_70;
                align-self: stretch;
            }

        }

        .cards {
            display: flex;
            padding: 0rem 10rem;
            flex-direction: column;
            gap: 3rem;
            align-self: stretch;
            position: relative;

            img {
                width: 159.3rem;
                height: 63.1rem;
                position: absolute;
                top: -8.2rem;
                right: .6rem;
                border-radius: 50px 50px 20px 20px;
                background-blend-mode: normal, normal, screen;
            }

            .subContainer {
                display: flex;
                flex-wrap: wrap;
                gap: 3rem;
                align-self: stretch;
            }
        }
    }
</style>