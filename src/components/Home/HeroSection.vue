<script setup>
    // Components
    import Transaction from './HeroSection/Transaction/Transaction.vue';
    import Exchange from './HeroSection/Exchange/Exchange.vue';

    // Object of images 
    import { IMAGES } from '../../assets/scripts/images';

    // Objects of texts
    import { TEXTS } from '../../assets/scripts/texts';

    // HeroSection StyleSheet
    import '../../assets/stylesheets/Home/HeroSection.scss';
</script>

<template>
    <section class="hsContainer">
        <img fetchpriority="high" width="418" height="383" :src="IMAGES.Home.HeroSectionImages.arrows" alt="Green arrows" class="arrowsdesign">

        <article class="fjContainer">
            <div class="fjHeadings">
                <div class="no-check-bank">
                    <img fetchpriority="low" width="24" height="20" :src="IMAGES.Home.HeroSectionImages.checkIcon" alt="Green Check">
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
            </div>

            <a href="#openaccount" target="_blank">Open Account</a>
        </article>
        <article class="teContainer">
            <div class="income">
                <img fetchpriority="low" width="40" height="40" :src="IMAGES.Home.HeroSectionImages.plusIcon" alt="Plus icon">
                <div class="incomeTexts">
                    <strong>
                        {{ TEXTS.Home.HeroSection.incomeValue }}
                    </strong>

                    <p> Monthly Income </p>
                </div>
            </div>

            <div class="transactionPart">
                <p class="teTitle">Your Transactions</p>
                <div class="transactions">
                    <Transaction transac-name="Joel Kenley" currency="$" :money=68 />
                    <Transaction transac-name="Mark Smith" currency="$" :money=180 />
                </div>
            </div>

            <div class="exchangePart">
                <p class="teTitle">Money Exchange</p>

                <div class="exchanges">
                    <Exchange 
                        :flag="IMAGES.Home.HeroSectionImages.indiaFlag" 
                        flag-description="India's flag"
                        country-currensy-abbv="INR" 
                        country-currensy="Indian Rupees"
                        :amount="5"
                    />
                    
                    <Exchange 
                        :flag="IMAGES.Home.HeroSectionImages.usFlag" 
                        flag-description="United States of America's flag"
                        country-currensy-abbv="USD" 
                        country-currensy="United States Dollar"
                        :amount="12"
                    />
                </div>

                <button class="exchangeBtn">Exchange</button>
            </div>

            <div class="supportedCurrencyContainer">
                <p>Supported Currensy</p>
                <div class="currencies">
                    <img 
                        fetchpriority="high" 
                        width="35" 
                        height="35" 
                        :src="IMAGES.Home.HeroSectionImages.dollarIcon" alt="Dollar Icon"
                    >
                    <img 
                        fetchpriority="high" 
                        width="35" 
                        height="35" 
                        :src="IMAGES.Home.HeroSectionImages.euroIcon" alt="Euro icon"
                    >
                    <img 
                        fetchpriority="high" 
                        width="35" 
                        height="35" 
                        :src="IMAGES.Home.HeroSectionImages.bitcoinIcon" 
                        alt="Bitcoin icon"
                    >
                    <img 
                        fetchpriority="high" 
                        width="35" 
                        height="35" 
                        :src="IMAGES.Home.HeroSectionImages.ethIcon" alt="Ethereum icon"
                    >
                </div>
            </div>
        </article>
    </section>
</template>