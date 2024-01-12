<script setup>
    const props = defineProps({
        imgUrl: String,
        imgAlt: String,
        caseName: String,
    })
</script>
<template>
    <div class="caseCard">
        <div class="ccIconContainer">
            <div class="ccIcon">
                <img :src="props.imgUrl" :alt="props.imgAlt">
            </div>
        </div>

        <p>{{ caseName }}</p>
    </div>
</template>
<style lang="scss" scoped>
    @use '../../../assets/stylesheets/variables';

    .caseCard {
        display: flex;
        padding: 3rem;
        flex-direction: column;
        align-items: center;
        gap: 2.4rem;
        flex: 1 0 0;
        border-radius: 1.6rem;
        border: .1rem solid variables.$grey_15;
        background-color: variables.$grey_10;

        p {
            text-align: center;
            font-size: 2rem;
            font-weight: 400;
            line-height: 150%;
            align-self: stretch;
        }
        .ccIconContainer {
            display: flex;
            padding: 1.2rem;
            align-items: flex-start;
            gap: 1rem;
            border-radius: 7rem;
            background: linear-gradient(180deg, rgba(202, 255, 51, 0.05) 0%, rgba(202, 255, 51, 0.00) 100%);
            .ccIcon {
                display: flex;
                padding: 2rem;
                align-items: flex-start;
                gap: 1rem;
                border-radius: 5rem;
                background: linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%);

                img {
                    height: 3.4rem;
                }
            }
        }
    }
</style>