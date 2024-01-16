<script setup>
    // Components
    import Transaction from './HeroSection/Transaction/Transaction.vue';
    import Exchange from './HeroSection/Exchange/Exchange.vue';

    // Object of images 
    import { IMAGES } from '../../assets/scripts/images';

    // Objects of texts
    import { TEXTS } from '../../assets/scripts/texts';
</script>

<template>
    <section>
        <img :src="IMAGES.Home.HeroSectionImages.arrows" alt="Green arrows" class="arrowsdesign">

        <article class="container1">
            <div class="no-check-bank">
                <img :src="IMAGES.Home.HeroSectionImages.checkIcon" alt="Green Check">
                <p>
                    {{ TEXTS.Home.HeroSection.noCheckBank }}
                </p>
            </div>
            <h2>
                {{ TEXTS.Home.HeroSection.title }}
                <strong>{{ TEXTS.Home.HeroSection.greenTitle }}</strong>
            </h2>
            <p>
                {{ TEXTS.Home.HeroSection.paragraph }}
            </p>

            <a href="#openaccount" target="_blank">Open Account</a>
        </article>
        <article class="container2">
            <div class="income">
                <img :src="IMAGES.Home.HeroSectionImages.plusIcon" alt="Plus icon">
                <div class="incomeTexts">
                    <strong>
                        {{ TEXTS.Home.HeroSection.incomeValue }}
                    </strong>

                    <p> Monthly Income </p>
                </div>
            </div>

            <div class="transactionPart">
                <p>Your Transactions</p>
                <div class="transactions">
                    <Transaction transac-name="Joel Kenley" currency="$" :money=68 />
                    <Transaction transac-name="Mark Smith" currency="$" :money=180 />
                </div>
            </div>

            <div class="exchangePart">
                <p>Money Exchange</p>

                <div class="exchanges">
                    <Exchange 
                        :flag="IMAGES.Home.HeroSectionImages.indiaFlag" 
                        country-currensy-abbv="INR" 
                        country-currensy="Indian Rupees"
                        :amount="5"
                    />
                    
                    <Exchange 
                        :flag="IMAGES.Home.HeroSectionImages.usFlag" 
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
                    <img :src="IMAGES.Home.HeroSectionImages.dollarIcon" alt="Dollar Icon">
                    <img :src="IMAGES.Home.HeroSectionImages.euroIcon" alt="Euro icon">
                    <img :src="IMAGES.Home.HeroSectionImages.bitcoinIcon" alt="Bitcoin icon">
                    <img :src="IMAGES.Home.HeroSectionImages.ethIcon" alt="Ethereum icon">
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
        position: relative;
        .arrowsdesign {
            position: absolute;
            right: 11rem;
        }
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
            background-color: variables.$grey_10;
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

                .incomeTexts {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: .087rem;

                    strong {
                        font-size: 1.7rem;
                        color: variables.$absolute_white;
                        align-self: stretch;
                        font-weight: 400;
                        line-height: 150%;
                    }
                    
                    p {
                        text-align: center;
                        align-self: stretch;
                        color: variables.$white_90;
                        font-size: 1.3rem;
                        font-weight: 300;
                        line-height: 150%;
                    }
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
                    align-items: flex-start;
                    align-self: stretch;
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

    @media screen and (max-width: 1440px) {
        section {
            width: 144rem;
            padding: 6rem 20rem 6rem 8rem;
            gap: 10rem;

            .arrowsdesign {
                right: 6.9rem;
                height: 27.5rem;
            }
            .container1 {
                gap: 4rem;

                .no-check-bank {
                    gap: .4rem;
                    padding: .8rem 1.6rem .8rem .8rem;
                    
                    img {
                        height: 2rem;
                    }

                    p {
                        font-size: 1.8rem;
                        font-weight: 300;
                        line-height: 2.4rem;
                    }
                }

                h2 {
                    font-size: 3.8rem;
                    margin-top: 1.6rem;
                    margin-bottom: 1rem;
                }

                p {
                    font-size: 1.6rem;
                }

                a {
                    padding: 1.4rem 2.4rem;
                    font-size: 1.4rem;
                    margin-top: 4rem;
                }

            }
            .container2 {
                gap: 2.1rem;
                width: 41.1rem;
                padding: 2.8rem;
                border-radius: .8rem;

                .income {
                    gap: .7rem;
                    padding: 1.1rem 1.4rem;
                    left: -4.8rem;
                    top: -3.4rem;
                    border-radius: .8rem;

                    img {
                        padding: .7rem;
                        border-radius: 3.6rem;
                    }

                    .incomeTexts {
                        gap: .069rem;

                        strong {
                            font-size: 1.4rem;
                        }
                        
                        p {
                            font-size: 1.1rem;
                        }
                    }

                }

                .transactionPart {
                    height: 18.2rem;

                    p {
                        font-size: 1.4rem;
                        margin-bottom: 1.4rem;
                    }
                }

                .exchangePart {
                    height: 24.3rem;
                    gap: 2rem;
                    
                    p {
                        font-size: 1.4rem;
                    }

                    .exchangeBtn {
                        border-radius: 5.7rem;
                        padding: 1.1rem 2.1rem;
                        font-size: 1.2rem;
                    }
                }

                .supported {
                    right: -4.1rem;
                    bottom: -6.8rem;
                    border-radius: 5.6rem;
                    padding: .7rem .7rem .7rem 1.7rem;
                    gap: .7rem;

                    p {
                        font-size: 1.2rem;
                    }

                    .currencies {
                        padding: .7rem;
                        gap: .55rem;
                        border-radius: 3.8rem;
                        border: .087rem solid variables.$grey_15;

                        img {
                            height: 2.7rem;
                        }
                    }
                }
            }
        }
    }
</style>