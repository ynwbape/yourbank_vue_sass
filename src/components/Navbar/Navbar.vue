<script setup>
    import shape from '../../assets/img/icons/logo/yb_shape.svg'
    import yourbank from '../../assets/img/icons/logo/YourBanK.svg'
</script>

<template>
    <div class="header">
        <div class="nav">
            <div class="logo">
                <img class="shape" :src="shape" alt="Logo's shape">
                <img class="navTitle" :src="yourbank" alt="Website's name">
            </div>
            <menu>
                <router-link to="/">Home</router-link>
                <router-link to="/careers">Careers</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/security">Security</router-link>
            </menu>
            <div class="login">
                <router-link to="/signup">Sign Up</router-link>
                <router-link to="/login">Login</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../assets/stylesheets/variables';

    .header {
        border: 1px solid yellow;
        box-sizing: content-box;
        padding: 50px 162px 53px 162px;

        .nav {
            display: flex;
            justify-content: space-between;
            border: 1px solid red;
            width: 1528px;
            padding: 20px 34px;

            .logo {
                display: flex;
                gap: 4px;
                flex-shrink: 0;
            }

            menu {
                display: flex;
                justify-content: center;
                gap: 2.6rem;

                a {
                    display: block;
                    padding: 1.2rem 2.4rem;
                    font-size: 1.8rem;
                    text-decoration: none;
                    align-self: center;
                    color: variables.$absolute_white;
                    
                    &:visited {
                        color: variables.$absolute_white;
                    }
    
                    &:hover,
                    &:active,
                    &:focus {
                        border-radius: variables.$borderRadius82;
                        background-color: variables.$grey_15;
                    } 
                }

            }

            .login {
                display: flex;
                gap: 3rem;
                align-items: center;
                a {
                    display: block;
                    padding: 1.2rem 2.4rem;
                    font-size: 1.8rem;
                    color: variables.$absolute_white;
                    text-decoration: none;
                    font-size: 1.8rem;

                    &:active,
                    &:focus,
                    &:hover {
                        border-radius: variables.$borderRadius82;
                        background-color: variables.$grey_20;
                    }
                } 

                a:last-child {
                    display: block;
                    padding: 1.4rem 3rem;
                    color: variables.$grey_11;
                    background-color: variables.$green_60;
                    border-radius: variables.$borderRadius82;

                    &:hover {
                        background-color: variables.$green_65;
                    }
                }
            }
        }
    }
</style>