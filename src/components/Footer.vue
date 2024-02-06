<script setup>
    import Logo from './Standalone/Logo.vue';

    import { IMAGES } from '../assets/scripts/images';

    // Footer StyleSheet
    import '../assets/stylesheets/Footer.scss'; 

    const props = defineProps({
        mail: String,
        showPhone: String,
        phone: Number,
        location: String,
        address: String,
    })
</script>

<script>
    
</script>

<template>
    <footer>
        <div class="footerNav">
            <Logo />

            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/careers">Careers</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/security">Security</router-link>
            </nav>
        </div>

        <div class="footerLine"></div>
        
        <ul class="contacts">
            <li>
                <a :href="'mailto:' + (props.mail)" target="_blank">
                    <img 
                        width="24" 
                        height="24" 
                        fetchpriority="low" 
                        :src="IMAGES.Footer.mailIcon"
                        alt="Mail icon"
                    >
                    {{ mail }}
                </a>
            </li>
            <li>
                <a :href="'tel:' + (props.phone)" target="_blank">
                    <img 
                        width="24" 
                        height="24" 
                        fetchpriority="low" 
                        :src="IMAGES.Footer.phoneIcon"
                        alt="Phone icon"
                    >
                    {{ showPhone }}
                </a>
            </li>
            <li>
                <a :href="address" target="_blank">
                    <img 
                        width="24" 
                        height="24" 
                        fetchpriority="low" 
                        :src="IMAGES.Footer.placeIcon"
                        alt="Place icon Mark"
                    >
                    {{ location }}
                </a>
            </li>
        </ul>
        
        <div class="footerLine"></div>
        
        <div class="copyrights">
            <div class="socials">
                <a href="https://fr-fr.facebook.com/" target="_blank">
                    <img 
                        width="24" 
                        height="24" 
                        fetchpriority="low" 
                        :src="IMAGES.Footer.facebook"
                        alt="Facebook icon"
                    >
                </a>
                <a href="https://twitter.com/" target="_blank">
                    <img 
                        width="24" 
                        height="24" 
                        fetchpriority="low" 
                        :src="IMAGES.Footer.twitter"
                        alt="Twitter icon"
                    >
                </a>
                <a href="https://fr.linkedin.com/in/pierre-nangi-362938221" target="_blank">
                    <img 
                        width="24" 
                        height="24" 
                        fetchpriority="low" 
                        :src="IMAGES.Footer.linkedin"
                        alt="Linkedin icon"
                    >
                </a>
            </div>
            <p class="copyright">
                YourBank All Rights Reserved
            </p>
            <p class="policy">
                <a href="#privacy">Privacy Policy</a> | <a href="#service">Terms of Service</a>
            </p>
        </div>
    </footer>
</template>