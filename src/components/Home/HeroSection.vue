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