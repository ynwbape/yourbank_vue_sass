<script setup>
  import Navbar from "./components/Navbar.vue";
  import Footer from './components/Footer.vue';

  import { TEXTS } from "./assets/scripts/texts";
</script>

<template>
    <!-- Header -->
    <Navbar />
    <!-- Content -->
    <router-view></router-view>
    <!-- Contacts & infos -->
    <Footer 
        :mail="TEXTS.Footer.mail" 
        :showPhone="TEXTS.Footer.phoneText" 
        :phone="TEXTS.Footer.phoneNumber" 
        :location="TEXTS.Footer.location" 
        :address="TEXTS.Footer.address" 
    />
</template>
