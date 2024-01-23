<script setup>
  import Navbar from "./components/Navbar.vue";
  import Footer from './components/Footer.vue';

  const locationURL = "https://www.google.com/maps/place/%C3%89tats-Unis/@44.2423649,-119.8093025,3z/data=!3m1!4b1!4m6!3m5!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d37.09024!4d-95.712891!16zL20vMDljN3cw?entry=ttu";
</script>

<template>
  <Navbar />
  <router-view></router-view>
  <Footer 
    mail="hello@skillbirdge.com" 
    showPhone="+91 91813 23 2309" 
    :phone="9191813232309" 
    location="Somewhere in the World" 
    :address="locationURL" 
  />
</template>
