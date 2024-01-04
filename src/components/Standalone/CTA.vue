<script setup>
    import abstratcDesign2 from '../../assets/img/icons/Home/abstractdesign2.svg'
</script>

<template>
    <section class="CTA">
        <div class="ctaTitles">
            <h2>
                Start your financial journey with
                <strong>YourBank Today!</strong>
            </h2>

            <p>
                Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored <br> solutions and exceptional customer service
            </p>
        </div>

        <a href="#openaccount" target="_blank">Open Account</a>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';
    .CTA {
        padding: 8rem;
        display: flex;
        align-items: center;
        gap: 15rem;
        position: relative;
        border-radius: 2rem;
        border: .1px solid variables.$grey_15;
        background-image: url('../../assets/img/icons/Home/abstractdesign2.svg');
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
                font-size: 4.8rem;
                font-weight: 500;
                line-height: 150%;
                align-self: stretch;
                margin-top: 2rem;
                margin-bottom: 1.4rem;
    
                strong {
                    font-weight: 400;
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