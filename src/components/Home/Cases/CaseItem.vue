<script setup>
    const props = defineProps({
        caseItemName: String,
        caseImgUrl: String,
        caseImgAlt: String,
    })
</script>
<template>
    <div class="casesItem">
        <div class="casesIconContainer">
            <div class="casesIcon">
                <img :src="props.caseImgUrl" :alt="props.caseImgAlt">
            </div>
        </div>
        
        <p>{{ caseItemName }}</p>
    </div>
</template>
<style lang="scss" scoped>
    @use '../../../assets/stylesheets/variables'; 

    .casesItem {
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
            align-self: stretch;
            text-align: center;
            font-size: 2rem;
            font-weight: 400;
            line-height: 150%;
        }

        .casesIconContainer {
            display: flex;
            padding: 1.2rem;
            align-items: flex-start;
            gap: 1rem;
            border-radius: 7rem;
            background: linear-gradient(180deg, rgba(202, 255, 51, 0.05) 0%, rgba(202, 255, 51, 0.00) 100%);
            .casesIcon {
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