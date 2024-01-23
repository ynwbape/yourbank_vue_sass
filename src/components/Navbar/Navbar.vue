<script setup>
    import Logo from '../Standalone/Logo.vue';
    
    // Navbar StyleSheet
    import '../../assets/stylesheets/Navbar/Navbar.scss';
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