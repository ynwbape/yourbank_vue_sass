<script setup>
    import Logo from '../Navbar/Logo/Logo.vue';

    import mailIcon from '../../assets/img/icons/Footer/mailicon.svg' 
    import phoneIcon from '../../assets/img/icons/Footer/phoneicon.Svg'
    import placeIcon from '../../assets/img/icons/Footer/placeicon.svg'
    
    // socials
    import facebook from '../../assets/img/icons/Footer/facebookicon.svg'
    import twitter from '../../assets/img/icons/Footer/twittericon.svg'
    import linkedin from '../../assets/img/icons/Footer/linkedinicon.svg'

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
        <div class="footerContainer">
            <Logo />

            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/careers">Careers</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/security">Security</router-link>
            </nav>

            <div class="contacts">
                <a :href="'mailto:' + (props.mail)" target="_blank">
                    <img :src="mailIcon" alt="Mail icon">
                    {{ mail }}
                </a>
                <a :href="'tel:' + (props.phone)" target="_blank">
                    <img :src="phoneIcon" alt="Phone icon">
                    {{ showPhone }}
                </a>
                <a :href="address" target="_blank">
                    <img :src="placeIcon" alt="Place icon Mark">
                    {{ location }}
                </a>
            </div>

            <div class="copyrights">
                <div class="socials">
                    <a href="https://fr-fr.facebook.com/" target="_blank">
                        <img :src="facebook" alt="Facebook icon">
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                        <img :src="twitter" alt="Twitter icon">
                    </a>
                    <a href="https://fr.linkedin.com/in/pierre-nangi-362938221" target="_blank">
                        <img :src="linkedin" alt="Linkedin icon">
                    </a>
                </div>
                <p class="copyright">
                    YourBank All Rights Reserved
                </p>
                <p class="policy">
                    <a href="#privacy">Privacy Policy</a> | <a href="#service">Terms of Service</a>
                </p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    footer {
        display: flex;
        padding: 10rem 16.2rem 5rem 16.2rem;
        flex-direction: column;
        align-items: center;
        gap: 5rem;

        .footerContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5rem;
            align-self: stretch;

            nav {
                display: flex;
                align-items: center;
                gap: 2.6rem;

                a {
                    color: variables.$white_shades_90;
                    font-size: 1.8rem;
                    font-weight: 400;
                    line-height: 150%;
                    margin-bottom: 5rem;
                }
            }

            .contacts {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 2rem;
                align-self: stretch;
                margin-bottom: 5rem;

                a {
                    display: flex;
                    align-items: center;
                    gap: .6rem;
                    color: variables.$white_shades_90;
                    font-size: 1.8rem;
                    font-weight: 400;
                    line-height: 150%;
                    
                    img {
                        width: 2.4rem;
                        height: 2.4rem;
                    }
                }
            }

            .copyrights {
                display: flex;
                padding: 1.6rem 3rem 1.6rem 1.6rem;
                justify-content: space-between;
                align-items: center;
                align-self: stretch;

                border-radius: 10rem;
                border: .1rem solid variables.$grey_15;
                background-color: variables.$grey_15;

                .socials {
                    display: flex;
                    align-items: flex-start;
                    gap: 1.4rem;
                    
                    a {
                        display: flex;
                        padding: 1.4rem;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1rem;
                        border-radius: 10rem;
                        background: variables.$green_60;
                        img {
                            width: 2.4rem;
                            height: 2.4rem;       
                        }
                    }
                }

                .copyright {
                    color: variables.$grey_shades_70;
                    font-size: 1.8rem;
                    font-weight: 300;
                    line-height: 150%;  
                }

                .policy {
                    color: variables.$grey_shades_70;
                    font-size: 1.8rem;
                    font-weight: 300;
                    line-height: 150%;

                    a {
                        color: variables.$grey_shades_70;
                    }
                }
            }
        }
    }
</style>