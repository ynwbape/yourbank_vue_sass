<script setup>
    import Logo from './Standalone/Logo.vue';
    
    import { IMAGES } from '../assets/scripts/images';
    
    // Navbar StyleSheet
    import '../assets/stylesheets/Navbar.scss';
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
        
            <!-- Mobile Responsive -->
            <button>
                <img fetchpriority="high" class="collapseImg" :src="IMAGES.Navbar.Button.collapse" alt="Button icon">
            </button>
        </nav>
    </header>
</template>