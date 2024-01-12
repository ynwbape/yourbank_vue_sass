<script setup>
    const props = defineProps({
        cconTitle: String,
        cconResume: String,
        cconStat: Number,
        cconStatName: String,
        cconStat2: Number,
        cconStatName2: String,
        cconStat3: Number,
        cconStatName3: String,
    })

</script>
<template>
    <div class="individualContent">
        <div class="indiHeadings">
            <h5>{{ cconTitle }}</h5>
            
            <p>
                {{ cconResume }}
            </p>
        </div>
        <div class="statistics">
            <div class="stat">
                <span>{{cconStat}}%</span>
                <p>{{cconStatName}}</p>
            </div>
            <div class="statLine"></div>
            <div class="stat">
                <span>{{cconStat2}}%</span>
                <p>{{cconStatName2}}</p>
            </div>
            <div class="statLine"></div>
            <div class="stat">
                <span>{{cconStat3}}%</span>
                <p>{{cconStatName3}}</p>
            </div>
        </div>
        <a href="#">Learn More</a>
    </div>
</template>
<style lang="scss" scoped>
    @use '../../../assets/stylesheets/variables';

    .individualContent {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 6.2rem;
        flex: 1 0 0;

        a {
            display: flex;
            padding: 1.8rem 2.4rem;
            align-items: flex-start;
            border-radius: 8.2rem;
            border: .1rem solid variables.$grey_15;
            background-color: variables.$grey_11;
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 150%;
        }
        .indiHeadings {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.4rem;
            align-self: stretch;
            
            h5 {
                font-size: 3rem;
                font-weight: 500;
                line-height: 150%;
                align-self: stretch;
            }

            p {
                align-self: stretch;
                color: variables.$grey_70;
                font-size: 1.8rem;
                font-weight: 300;
                line-height: 150%; /* 27px */
            }
        }

        .statistics {
            display: flex;
            align-items: flex-start;
            gap: 5rem;
            align-self: stretch;

            .stat {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: .5rem;
                flex: 1 0 0;

                span {
                    color: variables.$green_60;
                    font-size: 5.8rem;
                    font-weight: 500;
                    line-height: 150%;
                    align-self: stretch;
                }

                p {
                    color: variables.$grey_70;
                    font-size: 1.8rem;
                    font-weight: 300;
                    line-height: 150%;
                }
            }

            .statLine {
                width: .1rem;
                height: 14.6rem;
                background-color: variables.$grey_15;
            }
        }
    }
</style>