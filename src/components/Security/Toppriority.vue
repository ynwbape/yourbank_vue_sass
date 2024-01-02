<script setup>
    import svgBG from '../../assets/img/Security/svgBG.png'

    import toppriorityimage from '../../assets/img/Security/toppriorityimage.png'
</script>

<template>
    <div class="topPriorityContainer">
        <img :src="svgBG" alt="">
        
        <div class="topPriorityTitles">
            <h2>
                Your Security is Our
                <strong>Top Priority</strong>
            </h2>

            <p>
                At YourBank, we understand the importance of keeping your financial <br> information secure. We employ robust security measures and advanced <br> technologies to protect your personal and financial data. Rest assured <br> that when you bank with us, your security is our utmost priority.
            </p>
        </div>

        <div class="topPriorityImage">
            <img :src="toppriorityimage" alt="Someone holding a phone with a shield on the background of the phone">
        </div>

    </div>
</template>

<style lang="scss" scope>
    @use '../../assets/stylesheets/variables';

    .topPriorityContainer {
        display: flex;
        width: 159.9rem;
        padding: 5rem;
        align-items: flex-start;
        gap: -26rem;
        border-radius: 2rem;
        background-color: variables.$grey_11;
        position: relative;

        img {
            position: absolute;
            top: 0;
            right: 0;
        }

        .topPriorityImage {
            width: 96.8rem;
            height: 71.6rem;
            flex: 1 0 0;
            border-radius: 1.6rem;
            margin-left: -26rem;
            z-index: 3;
            img {
                position: unset;
            }
        }

        .topPriorityTitles {
            display: flex;
            width: 79.1rem;
            padding: 8rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 2.3rem;
            flex-shrink: 0;
            border-radius: 20px 0px 80px 20px;
            background-color: variables.$grey_10;
            z-index: 5;

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
    }
</style>