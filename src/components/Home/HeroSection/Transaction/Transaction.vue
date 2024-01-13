<script setup>
    import { IMAGES } from '../../../../assets/scripts/images';

    const props = defineProps({
        transacName: String,
        currency: String,
        money: Number,
    });

</script>

<template>
    <div class="transaction">
        <div class="name">
            <img :src="IMAGES.Home.HeroSectionImages.transacIcon" alt="Transaction Icon">
            <div class="texts">
                <p>Transaction</p>
                <p>{{ transacName }}</p>
            </div>
        </div>
        <div class="numbers">
            <p>-{{ currency }}{{ money }}.00</p>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
    @use '../../../../assets/stylesheets/variables';
    .transaction {
        display: flex;
        padding: 1.4rem 2.1rem;
        justify-content: space-between;
        align-items: stretch;
        border-radius: 1rem;
        border: .087rem solid variables.$grey_15;
        background-color: variables.$grey_11;

        .name {
            display: flex;
            gap: .9rem;

            img {
                padding: .9rem;
                border-radius: 4.6rem;
                background-color: variables.$green_60;
            }

            .texts {
                p {
                    font-size: 1.6rem;
                    font-weight: 300;
                    line-height: 150%;

                    &:last-child {
                        font-size: 1.7rem;
                        font-weight: 400;
                        line-height: 150%;
                    }
                }

                
            }
        }

        .numbers {
            p {
                font-size: 2.1rem;
                font-weight: 500;
                line-height: 150%;
            }
        }
    }
</style>