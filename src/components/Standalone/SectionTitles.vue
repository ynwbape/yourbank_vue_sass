<script setup>
    const props = defineProps({
        title: String,
        greenTitle: String,
        titleDescription: String,
    })
</script>
<template>
    <div class="sectionTitles">
            <h2>
                {{ title }}
                <strong>
                     {{ greenTitle }}
                </strong>
            </h2>

            <p>
                {{ titleDescription }}
            </p>
        </div>  
</template>
<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    .sectionTitles {
            display: flex;
            padding-right: 30rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.4rem;
            align-self: stretch;

            h2 {
                font-size: 4.8rem;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 72px */
                strong {
                    color: variables.$green_60;
                }
            }

            p {
                color: variables.$grey_70;
                font-size: 1.8rem;
                font-style: normal;
                font-weight: 300;
                line-height: 150%;
            }
        }
</style>