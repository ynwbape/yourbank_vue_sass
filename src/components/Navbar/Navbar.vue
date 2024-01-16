<script setup>
    import Logo from '../Navbar/Logo/Logo.vue';
</script>

<template>
    <header>
        <nav>
            <Logo />
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
        </nav>
    </header>
</template>

<style lang="scss">
    @use '../../assets/stylesheets/variables';

    header {
        box-sizing: content-box;
        padding: 5rem 16.2rem 5.3rem 16.2rem;

        nav {
            display: flex;
            justify-content: space-between;
            width: 152.8rem;
            padding: 2rem 3.4rem;
            border-radius: 10rem;
            border: .1rem solid variables.$grey_15;
            background-color: variables.$grey_11;

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
                    font-weight: 400;
                    line-height: 150%;
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

    // Laptop
    @media screen and (max-width: 1440px)  {
        header {
            display: flex;
            justify-content: center;

            nav {
                width: 128rem;
                padding: 1.4rem 2.4rem;

                menu {
                    a {
                        display: block;
                        padding: 1rem 1.8rem;
                        font-size: 1.4rem;
                        
                        
                    }
                }

                .login {
                    gap: 2rem;
    
                    a {
                        font-size: 1.4rem;
                    }
    
                    a:last-child {
                        padding: 1.2rem 2.4rem;
                        
                    }
                }
            }

        }
    }
</style>