<script setup>
    const props = defineProps({
        img: String,
        service: String,
        synopsis: String,
    })
</script>

<template>
    <div class="card">
        <div class="cardTitle">
            <div class="cardIconContainer">
                <div class="cardIcon">
                    <img :src="props.img" alt="">
                </div>
            </div>
            <h4>{{ service }}</h4>
        </div>

        <p>
            {{ synopsis }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../assets/stylesheets/variables';

    .card {
        display: flex;
        width: 68.8rem;
        padding: 5rem;
        flex-direction: column;
        align-items: center;
        gap: 2.4rem;
        flex: 1 0 0;
        z-index: 5;
        align-self: stretch;

        border-radius: 2rem;
        border: .1rem solid variables.$grey_15;
        background: linear-gradient(106deg, rgba(202, 255, 51, 0.05) -29.45%, rgba(202, 255, 51, 0.00) 27.86%), linear-gradient(267deg, #1C1C1C 40.67%, rgba(28, 28, 28, 0.00) 99.81%);
        background-blend-mode: normal, normal, screen;

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 2rem;
            align-self: stretch;

            h4 {
                color: variables.$absolute_white;
                font-size: 2.4rem;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 36px */
            }

            .cardIconContainer {
                display: flex;
                padding: 1.2rem;
                align-items: flex-start;
                gap: 1rem;
                border-radius: 7rem;
                background: linear-gradient(180deg, rgba(202, 255, 51, 0.05) 0%, rgba(202, 255, 51, 0.00) 100%);

                .cardIcon {
                    display: flex;
                    padding: 2rem;
                    align-items: flex-start;
                    gap: 1rem;
                    border-radius: 5rem;
                    border: .1prem solid variables.$green_60;
                    background: linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%);

                    img {
                        height: 3.4rem;
                    }
                }
            }
        }

        p {
            align-self: stretch;
            color: variables.$grey_70;
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 300;
            line-height: 150%; /* 27px */
        }
    }
</style>