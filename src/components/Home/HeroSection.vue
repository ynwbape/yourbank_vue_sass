<script setup>
    import check from '../../assets/img/icons/Home/check.png'
    import plusIcon from '../../assets/img/icons/Home/plusicon.svg'
</script>

<template>
    <section>
        <div class="container1">
            <div class="no-check-bank">
                <img :src="check" alt="Green Check">
                <p>
                    No LLC Required, No Credit Check
                </p>
            </div>
            <h2>
                Welcome to YourBank <br>
                Empowering Your 
                <strong>Financial <br> Journey</strong>
            </h2>
            <p>
                At YourBank, our mission is to provide comprehensive banking solutions that empower <br>
                individuals and businesses to achieve their financial goals. We are committed to delivering <br> personalized and innovative services that prioritize our customers' needs.
            </p>

            <a href="#openaccount">Open Account</a>
        </div>
        <div class="container2">
            <div class="income">
                <img :src="plusIcon" alt="">
                <p>
                    <strong>+ $5000,00</strong> <br>
                    Monthly Income
                </p>
            </div>

            <div class="transaction"></div>
            <div class="exchange"></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    section {
        display: flex;
        gap: 12rem;
        align-items: flex-start;
        padding: 10rem 29.7rem 10rem 16.2rem;
        border: 1px solid bisque;
        .container1 {
            width: 82.6rem;

            .no-check-bank {
                display: inline-flex;
                align-items: center;
                gap: .6rem;
                padding: 1rem 2rem 1rem 1.2rem;
                background-color: variables.$grey-15;
                border-radius: variables.$borderRadius61;

                img {
                    height: 2.4rem;
                }

                p {
                    font-size: 1.8rem;
                    font-weight: 300;
                    line-height: 2.4rem;
                }
            }

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
                color: variables.$white-90;
                align-self: stretch;
            }

            a {
                display: inline-block;
                background-color: variables.$green_60;
                padding: 1.8rem 3rem;
                text-align: center;
                color: variables.$grey_11;
                border-radius: variables.$borderRadius82;
                font-size: 1.8rem;
                font-weight: 400;
                line-height: 150%;
                text-decoration: none;
                margin-top: 5rem;

                &:visited {
                    text-decoration: none;
                    color: variables.$grey_11;
                }
            }

        }
        .container2 {
            display: flex;
            flex-direction: column;
            gap: 2.6rem;
            flex-shrink: 0;
            width: 51.5rem;
            padding: 3.5rem;
            border-radius: 1rem;
            border: 0.087rem solid variables.$grey_15;
            position: relative;
            background: 
                linear-gradient(
                    215deg, 
                    rgba(26, 26, 26, 0.00) 
                    0%, 
                    variables.$grey_10 
                    39.72%
                ),
                lightgray 0% 0% / 6.2rem 6.2rem 
                repeat, variables.$grey_10
            ;
            background-blend-mode: normal, screen, normal;

            .income {
                display: flex;
                align-items: center;
                gap: .9rem;
                position: absolute;
                padding: 1.4rem 1.7rem;
                background-color: variables.$grey_14;
                left: -6.1rem;
                top: -4.3rem;
                border-radius: 1rem;

                img {
                    padding: .9rem;
                    border-radius: 4.6rem;
                    background-color: variables.$green_60;
                }

                p {
                    strong {
                        font-size: 1.7rem;
                        color: variables.$Absolute_white;
                        align-self: stretch;
                        font-weight: 400;
                        line-height: 150%;
                    }

                    text-align: center;
                    align-self: stretch;
                    color: variables.$white_90;
                    font-size: 1.3rem;
                    font-weight: 300;
                    line-height: 150%;
                }
            }

            .transaction {
                height: 22.5rem;
                border: 1px solid red;
            }

            .exchange {
                height: 30.4rem;
                border: 1px solid burlywood;
            }
        }
    }
</style>