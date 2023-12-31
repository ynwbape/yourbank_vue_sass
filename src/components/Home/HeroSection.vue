<script setup>
    // Images
    import check from '../../assets/img/icons/Home/check.png';
    import plusIcon from '../../assets/img/icons/Home/plusicon.svg';
    
    // Currencies
    import dollar from '../../assets/img/icons/Home/dollar.svg';
    import euro from '../../assets/img/icons/Home/euro.svg';
    import bitcoin from '../../assets/img/icons/Home/bitcoin.svg';
    import eth from '../../assets/img/icons/Home/eth.svg';

    // Flags
    import indiaFlag from "../../assets/img/flags/in-flag.gif";
    import usFlag from "../../assets/img/flags/us-flag.gif";

    // Components
    import Transaction from './HeroSection/Transaction/Transaction.vue';
    import Exchange from './HeroSection/Exchange/Exchange.vue';
</script>

<template>
    <section>
        <article class="container1">
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

            <a href="#openaccount" target="_blank">Open Account</a>
        </article>
        <article class="container2">
            <div class="income">
                <img :src="plusIcon" alt="Plus icon">
                <p>
                    <strong>+ $5000,00</strong> <br>
                    Monthly Income
                </p>
            </div>

            <div class="transactionPart">
                <p>Your Transactions</p>
                <div class="transactions">
                    <Transaction transac-name="Joel Kenley" currency="$" :money=68 />
                    <Transaction transac-name="Mark Smith" currency="$" :money=68 />
                </div>
            </div>

            <div class="exchangePart">
                <p>Money Exchange</p>

                <div class="exchanges">
                    <Exchange 
                        :flag="indiaFlag" 
                        country-currensy-abbv="INR" 
                        country-currensy="Indian Rupees"
                        :amount="5"
                    />
                    
                    <Exchange 
                        :flag="usFlag" 
                        country-currensy-abbv="USD" 
                        country-currensy="United States Dollar"
                        :amount="12"
                    />
                </div>

                <button class="exchangeBtn">Exchange</button>
            </div>

            <div class="supported">
                <p>Supported Currensy</p>
                <div class="currencies">
                    <img :src="dollar" alt="">
                    <img :src="euro" alt="">
                    <img :src="bitcoin" alt="">
                    <img :src="eth" alt="">
                </div>
            </div>
        </article>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    section {
        display: flex;
        gap: 12rem;
        align-items: flex-start;
        padding: 10rem 29.7rem 10rem 16.2rem;
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
                        color: variables.$absolute_white;
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

            .transactionPart {
                height: 22.5rem;

                p {
                    font-size: 1.7rem;
                    font-weight: 500;
                    align-self: stretch;
                    line-height: 150%;
                    margin-bottom: 1.7rem;
                }

                .transactions { 
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
            }

            .exchangePart {
                height: 30.4rem;
                display: flex;
                flex-direction: column;
                gap: 2.5rem;
                
                p {
                    font-size: 1.7rem;
                    font-weight: 500;
                    align-self: stretch;
                    line-height: 150%;
                }

                .exchanges {
                    display: flex;
                }

                .exchangeBtn {
                    background-color: variables.$grey_14;
                    color: variables.$green_65;
                    border: none;
                    border-radius: 7.1rem;
                    align-self: stretch;
                    padding: 1.4rem 2.6rem;
                }
            }

            .supported {
                position: absolute;
                right: -5.2rem;
                bottom: -8.2rem;
                border-radius: 6.9rem;
                padding: .9rem .9rem .9rem 2rem;
                display: flex;
                gap: .9rem;
                align-items: center;
                background-color: variables.$grey_14;

                p {
                    font-size: 1.5rem;
                    font-weight: 400;
                    line-height: 150%;
                }

                .currencies {
                    display: flex;
                    padding: .9rem;
                    gap: .7rem;
                    border-radius: 4.8rem;
                    border: .087rem solid variables.$grey_15;
                    background-color: variables.$grey_10;

                    img {
                        height: 3.5rem;
                    }
                }
            }
        }
    }
</style>