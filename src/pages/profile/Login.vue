<script setup>
    import { IMAGES } from '../../assets/scripts/images';

    import Testimonials from '../../components/Standalone/Testimonials.vue';
    
    import '../../assets/stylesheets/profile/Login.scss';
</script>

<script>
    
</script>

<template>
    <main>
        <div class="loginContainer">
            <div class="login">
                <img :src="IMAGES.SignUpLogin.signUpLoginDesign" alt="abstract design">

                <div class="loginHeadings">
                    <h1>login</h1>

                    <p>Welcome back! Please log in to access your account.</p>
                </div>

                <form action="">
                    <div class="inputs">
                        <input type="email" name="email" id="email" placeholder="Enter your Email" autocomplete="off">
                        
                        <input class="passwordInput" type="password" name="password" id="password" placeholder="Enter your Password" autocomplete="off">

                        <!-- <button id="showPasswordBtn" class="showPWBtn">
                            <font-awesome-icon class="icon" icon="fa-solid fa-eye" style="color: #59595a;" />
                        </button> -->
                        
                        <!-- <font-awesome-icon class="icon" icon="fa-solid fa-eye-slash" style="color: #59595a;" /> -->
                    </div>

                    <a href="#password">Forgot password ?</a>

                    <div class="buttons">
                        <button type="submit">Login</button>

                        <router-link to="/signup" >Sign Up</router-link>
                        
                        <div class="moreOptions">
                            <div class="line"></div>
                            <p>Or Continue with</p>
                            <div class="line"></div>
                        </div>
                        
                        <div class="socialLogins">
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