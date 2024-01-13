<script setup>
    import Testimonials from '../../components/Standalone/Testimonials.vue';

    import { IMAGES } from '../../assets/scripts/images';

</script>

<script>
    
</script>
<template>
    <main>
        <div class="signupContainer">
            <div class="signup">
                <img :src="IMAGES.SignUpLogin.signUpLoginDesign" alt="abstract design">

                <h1>Sign Up</h1>
                <p>Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>

                <form action="">
                    <div class="inputs">
                        <input type="text" name="firstName" id="firstName" placeholder="Enter First Name" autocomplete="off">
                        
                        <input type="text" name="lastName" id="lastname" placeholder="Enter Last Name" autocomplete="off">
                    </div>
                    <div class="inputs">
                        <input type="email" name="email" id="email" placeholder="Enter your Email" autocomplete="off">
                        
                        <input class="passwordInput" type="password" name="password" id="password" placeholder="Enter your Password" autocomplete="off">
                    </div>

                    <div class="buttons">
                        <button type="submit">Sign Up</button>

                        <router-link to="/login" >Login</router-link>
                        
                        <div class="moreOptions">
                            <div class="line"></div>
                            <p>Or Continue with</p>
                            <div class="line"></div>
                        </div>
                        
                        <div class="socialSignup">
                            <button>
                                <a href="">
                                    <img :src="IMAGES.SignUpLogin.greenGoogle" alt="Green Google icon">
                                </a>
                            </button>

                            <button>
                                <a href="">
                                    <img :src="IMAGES.SignUpLogin.greenFacebook" alt="Green Google icon">
                                </a>
                            </button>

                            <button>
                                <a href="">
                                    <img :src="IMAGES.SignUpLogin.greenApple" alt="Green Google icon">
                                </a>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
        <Testimonials />
    </main>

</template>

<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    .signupContainer {
        .signup {
            display: flex;
            width: 132.6rem;
            padding: 10rem 15rem;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            position: relative;
    
            border-radius: 2rem;
            border: .1rem solid variables.$grey_15;
            background: lightgray 50% / cover no-repeat, variables.$grey_11;
            background-blend-mode: overlay, normal;
            
            img {
                position: absolute;
                top: 0;
                right: 0;
            }

            h1 {
                text-transform: capitalize;
                color: variables.$green_60;
                text-align: center;
                font-size: 4.8rem;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                align-self: stretch;
            }

            p {
                color: variables.$grey_75;
                text-align: center;
                font-size: 1.8rem;
                font-style: normal;
                font-weight: 300;
                line-height: normal;
            }

            form {
                margin-top: 8rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4rem;
                align-self: stretch;

                .inputs {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 3rem;
                    align-self: stretch;
                    position: relative;
                    input {
                        display: flex;
                        padding: 2.4rem;
                        align-items: center;
                        gap: 1rem;
                        flex: 1 0 0;
                        border-radius: 8.8rem;
                        border: .1rem solid variables.$grey_15;
                        background-color: variables.$grey_10;

                        &::placeholder,
                        &:-moz-placeholder {
                            color: variables.$grey_35;
                            font-family: Lexend;
                            font-size: 1.8rem;
                            font-weight: 300;
                            line-height: 150%;
                        }

                        &.passwordInput {
                            position: relative;
                        }   
                    }
                }

                a[href="#password"] {
                    color: variables.$absolute_white;
                    text-align: center;
                    font-size: 1.8rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%;
                    text-decoration: underline;
                    align-self: stretch;

                }

                .buttons {
                    display: flex;
                    padding: 0 25.4rem;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 2.4rem;
                    align-self: stretch;

                    button[type="submit"] {
                        display: flex;
                        padding: 1.8rem 2rem;
                        justify-content: center;
                        align-items: center;
                        gap: 1rem;
                        align-self: stretch;
                        border-radius: 6.3rem;
                        background-color: variables.$green_60;

                        // text
                        color: variables.$grey_15;
                        text-align: center;
                        font-size: 1.8rem;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 150%; /* 27px */
                        flex: 1 0 0;

                        cursor: pointer;

                        &:hover {
                            background-color: variables.$green_65;
                        }
                    }

                    a {
                        display: flex;
                        padding: 1.8rem 2rem;
                        justify-content: center;
                        align-items: center;
                        gap: 1rem;
                        align-self: stretch;

                        border-radius: 6.3rem;
                        border: .1rem solid variables.$grey_20;
                        background-color: variables.$grey_15;

                        color: variables.$grey_70;
                        text-align: center;
                        text-decoration: none;
                        font-size: 1.8rem;
                        font-weight: 400;
                        line-height: 150%;

                        &:hover {
                            background-color: variables.$grey_20;
                        }
                    }
                    

                    .moreOptions {
                        display: flex;
                        align-items: center;
                        gap: 2rem;
                        align-self: stretch;

                        .line {
                            width: 16.6rem;
                            height: .1rem;
                            background-color: variables.$grey_70;
                        }

                        p {
                            color: variables.$grey_70;
                            text-align: center;
                            font-size: 1.8rem;
                            font-weight: 400;
                            line-height: 150%;
                        }
                    }

                    .socialSignup {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 2.4rem;
                        align-self: stretch;

                        button {
                            display: flex;
                            padding: 1.2rem;
                            justify-content: center;
                            align-items: flex-start;
                            gap: 1rem;
                            border: unset;
                            border-radius: 7rem;
                            background: linear-gradient(180deg, rgba(202, 255, 51, 0.05) 0%, rgba(202, 255, 51, 0.00) 100%);
                            
                            a {
                                display: flex;
                                padding: 2rem;
                                justify-content: center;
                                align-items: center;
                                gap: 1rem;
                                border: unset;
                                border-radius: 5rem;
                                background: linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%);

                                img {
                                    position: unset;
                                    width: 3rem;
                                    height: 3rem;
                                }
                            }
                        }
                    }
                }
                
            }
        }
    }
</style>