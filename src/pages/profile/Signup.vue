<script setup>
    import Testimonials from '../../components/Standalone/Testimonials.vue';

    import { IMAGES } from '../../assets/scripts/images';

    import '../../assets/stylesheets/profile/Signup.scss';
</script>

<script>
    
</script>
<template>
    <main>
        <div class="signupContainer">
            <div class="signup">
                <img class="signupAbstractdesign" :src="IMAGES.SignUpLogin.signUpLoginDesign" alt="abstract design">

                <div class="signupHeadings">
                    <h1>Sign Up</h1>
    
                    <p>Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>
                </div>

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