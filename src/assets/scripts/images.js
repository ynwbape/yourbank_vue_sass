//Images for Home's components
//HeroSection.vue part
import checkIcon from '../img/Home/icons/check.webp';
import plusIcon from '../img/Home/icons/plusicon.svg';
import dollarIcon from '../img/Home/icons/dollar.svg';
import euroIcon from '../img/Home/icons/euro.svg';
import bitcoinIcon from '../img/Home/icons/bitcoin.svg';
import ethIcon from '../img/Home/icons/eth.svg';
import indiaFlag from "../img/flags/in-flag.webp";
import usFlag from "../img/flags/us-flag.webp";
import arrows from '../img/Home/arrows.webp';
import transacIcon from '../img/Home/icons/transactionicon.svg';

// Products.vue 
import briefcaseIcon from '../img/Home/icons/greenbriefcase.fill.svg';
import savingsIcon from '../img/Home/icons/savingsicon.svg';
import moneyIcon from '../img/Home/icons/moneyicon.svg';

// Testimonials.vue
import leftArrowIcon from '../img/Login/icons/arrows/leftArrow.svg';
import rightArrowIcon from '../img/Login/icons/arrows/rightArrow.svg';
import quoteIcon from '../img/Login/icons/quoteicon.svg';

// Cases.vue
import mpfIcon from '../img/Home/icons/CaseItem/mpf.svg';
import sftfIcon from '../img/Home/icons/CaseItem/sftf.svg';
import hosIcon from '../img/Home/icons/CaseItem/hos.svg';
import efundingIcon from '../img/Home/icons/CaseItem/efunding.svg';
import saeIcon from '../img/Home/icons/CaseItem/sae.svg';
import cfmIcon from '../img/Home/icons/CaseItem/cfm.svg';
import bexIcon from '../img/Home/icons/CaseItem/bex.svg';
import psolIcon from '../img/Home/icons/CaseItem/psol.svg';

// Features.vue 
import arrowTopDiagonalIcon from '../img/Home/icons/arrowtopdiagonal.svg';

// Security's components
import tisTopPriorityImage from '../img/Security/toppriorityimage.webp';
import pyImg from '../img/Security/protectyouimage.webp';

// For cardArray's array of images 
// icons for the cards in "How we protect you" component
import addThingIcon from '../img/Security/icons/addThingIcon.svg';
import pilesIcon from '../img/Security/icons/pilesicon.svg';
import starsIcon from '../img/Security/icons/starsicon.svg';
import mobileBankIcon from '../img/Security/icons/mobilebankicon.svg';

// Careers.vue & sub components
import ybcImg from '../img/Careers/careerimgbg.webp';
    
// icons for Our Benefits section
import marketChartIcon from '../img/Careers/icons/marketcharticon.svg';
import lampIcon from '../img/Careers/icons/lampicon.svg';
import workBagIcon from '../img/Careers/icons/workbagicon.svg';
import folderIcon from '../img/Careers/icons/foldericon.svg';

// About.vue 
import abeImg from '../img/About/aboutbankexcellence.webp';

// MissionVision.vue
import mvAbstractDesign from "../img/About/mvAbstractDesign.svg";
import missionImg from "../img/About/missionimage.webp";
import visionImg from "../img/About/visionimage.webp";

// PressReleases.vue
import prCardImg from "../img/About/PressCard/prcard.webp";
import prCardImg2 from "../img/About/PressCard/prcard2.webp";
import prCardImg3 from "../img/About/PressCard/prcard3.webp";
import prCardImg4 from "../img/About/PressCard/prcard4.webp";

// Standalone/TitleImageSection.vue 
import svgBG from '../img/Security/svgBG.webp'
import tagsBriefcase from '../img/Careers/icons/briefcase.fill.svg';

// Sign Up & Login vues
import signUpLoginDesign from '../img/Login/Login_Abstract_Design.webp';
import greenGoogle from '../img/Login/icons/green_google.svg';
import greenFacebook from '../img/Login/icons/green_facebook.svg';
import greenApple from '../img/Login/icons/green_apple.svg';

// Navbar.vue
import shape from '../img/logo/yb_shape.svg';
import yourbank from '../img/logo/YourBanK.svg';
// Navbar button mobile
import collapse from '../img/Navbar/collapse.svg';

// Footer.vue 
import mailIcon from '../img/Footer/mailicon.svg'; 
import phoneIcon from '../img/Footer/phoneicon.svg';
import placeIcon from '../img/Footer/placeicon.svg';

// socials
import facebook from '../img/Footer/facebookicon.svg';
import twitter from '../img/Footer/twittericon.svg';
import linkedin from '../img/Footer/linkedinicon.svg';


export let IMAGES = {
    Navbar: {
        Logo: {
            shape,
            yourbank,
        },
        Button: {
            collapse,
        },
    },
    Footer: {
        mailIcon,
        phoneIcon,
        placeIcon,
        facebook,
        twitter,
        linkedin
    },
    Home: {
        HeroSectionImages: {
            checkIcon,
            plusIcon,
            dollarIcon,
            euroIcon,
            bitcoinIcon,
            ethIcon,
            indiaFlag,
            usFlag,
            arrows,
            transacIcon,
        },
        ProductsImages: {
            briefcaseIcon,
            savingsIcon,
            moneyIcon,
        },
        testimonialsImages: {
            leftArrowIcon,
            rightArrowIcon,
            quoteIcon,
        },
        casesImages: {
            mpfIcon,
            sftfIcon,
            hosIcon,
            efundingIcon,
            saeIcon,
            cfmIcon,
            bexIcon,
            psolIcon,
        },
        FeaturesImages: {
            arrowTopDiagonalIcon,
        },
    },
    Careers: {
        careersImages: {
            ybcImg,
            marketChartIcon,
            lampIcon,
            workBagIcon,
            folderIcon 
        }
    },
    About: {
        aboutImages: {
            abeImg,
            missionVision: {
                mvAbstractDesign,
                missionImg,
                visionImg
            },
            pressReleases: {
                prCardImg, 
                prCardImg2,
                prCardImg3,
                prCardImg4,
            }
        }
    },
    Security: {
        SecurityImages: {
            tisTopPriorityImage,
            pyImg,
        },
    },
    SignUpLogin: {
        signUpLoginDesign,
        greenGoogle,
        greenFacebook,
        greenApple,
    },
    Standalone: {
        cardArrayImages: {
            addThingIcon,
            pilesIcon,
            starsIcon,
            mobileBankIcon,
        },
        TitleImageSection: {
            svgBG,
        },
        Tags: {
            tagsBriefcase,
        }
    }
}