<script setup>
    import { TEXTS } from '../../assets/scripts/texts';

</script>
<template>
    <section class="CTA">
        <div class="ctaTitles">
            <h2>
                {{ TEXTS.Standalone.CTA.title }}
                <strong>
                    {{ TEXTS.Standalone.CTA.greenTitle }}
                </strong>
            </h2>

            <p>
                {{ TEXTS.Standalone.CTA.paragraph }}
            </p>
        </div>

        <a href="#openaccount" target="_blank">Open Account</a>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';
    .CTA {
        width: 159.6rem;
        padding: 8rem;
        display: flex;
        align-items: center;
        gap: 15rem;
        position: relative;
        border-radius: 2rem;
        border: .1px solid variables.$grey_15;
        background-image: url('../../assets/img/Home/abstractdesign2.svg');
        background-repeat: no-repeat;
        background-blend-mode: normal, screen, normal;

        img {
            position: relative;
            top: 0;
            left: 0;
            bottom: -1rem;  
        }

        .ctaTitles {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.4rem;
            flex: 1 0 0;

            h2 {
                font-size: 4rem;
                font-weight: 400;
                line-height: 150%;
                align-self: stretch;
    
                strong {
                    color: variables.$green_60;
                }
            }
    
            p {
                font-size: 1.8rem;
                font-weight: 300;
                line-height: 150%;
                color: variables.$grey_70;
                align-self: stretch;
            }

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
</style>