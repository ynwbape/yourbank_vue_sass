<script setup>
    // Vue State
    import { ref } from 'vue';

    // Title + image component
    import TitleImageSection from '../components/Standalone/TitleImageSection.vue';

    // Title + cards component
    import TitleCardsSection from '../components/Standalone/TitleCardsSection.vue';

    // Frequently Asked Quesiton component
    import FAQ from '../components/Standalone/FAQ.vue';

    // Image background for TitleImageSection component
    import tisTopPriorityImage from '../assets/img/Security/toppriorityimage.png';
    
    // for TitleImageSection description's attribute
    const tisTitle = "Your Security is Our";
    const tisGreenBoldTtitle = "Top Priority";
    
    const tisDescription = "At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.";

    // description value for 'alt' attribute in img tag in TitleImageSection component
    const tisImgDescription = "Someone holding a phone with a shield on the background of the phone";

    // arrays of questions for FAQ Component
    let faqArray = ref([
        {
            id: 0,
            question: "How do I open an account with YourBank?",
            answer: 'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
        },
        {
            id: 1,
            question: "What documents do I need to provide to apply for a loan?",
            answer: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
        },
        {
            id: 2,
            question: "How can I access my accounts online?",
            answer: 'Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven\'t registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.',
        },
        {
            id: 3,
            question: "Are my transactions and personal information secure?",
            answer: 'At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.',
        },
        
    ]);
    
    // images for TitleCardsSection component
    import pyImg from '../assets/img/Security/protectyouimage.png';
    import addThingIcon from '../assets/img/Security/icons/addThingIcon.svg';
    import pilesIcon from '../assets/img/Security/icons/pilesicon.svg';
    import starsIcon from '../assets/img/Security/icons/starsicon.svg';
    import mobileBankIcon from '../assets/img/Security/icons/mobilebankicon.svg';
    
    //values of TitleCardsSection attributes
    const pyDescription = "At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times" 

    // arrays of cards for TitleCardsSection component
    let cardArray = ref([
        {
            id: 0,
            img: addThingIcon,
            service: "Secure Online Banking Platform",
            synopsis: "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.",
        },
        {
            id: 1,
            img: pilesIcon,
            service: "Multi-Factor Authentication",
            synopsis: "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.",
        },
        {
            id: 2,
            img: starsIcon,
            service: "Fraud Monitoring",
            synopsis: "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.",
        },
        {
            id: 3,
            img: mobileBankIcon,
            service: "Secure Mobile Banking",
            synopsis: "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.",
        },
    ]);
</script>

t<template>
    <main>
        <!-- <Toppriority /> -->
        <TitleImageSection 
            :title="tisTitle"
            :green-bold-title="tisGreenBoldTtitle"
            :description="tisDescription"
            :image="tisTopPriorityImage"
            :image-description="tisImgDescription"
        />

        <TitleCardsSection 
            title="How We"
            green-bold-title="Protect You"
            :description="pyDescription"
            :img="pyImg"

            :card-id="cardArray[0].id"
            :card-icon="cardArray[0].img"
            :card-title="cardArray[0].service"
            :card-description="cardArray[0].synopsis"
            
            :card-id2="cardArray[1].id"
            :card-icon2="cardArray[1].img"
            :card-title2="cardArray[1].service"
            :card-description2="cardArray[1].synopsis"
            
            :card-id3="cardArray[2].id"
            :card-icon3="cardArray[2].img"
            :card-title3="cardArray[2].service"
            :card-description3="cardArray[2].synopsis"
            
            :card-id4="cardArray[3].id"
            :card-icon4="cardArray[3].img"
            :card-title4="cardArray[3].service"
            :card-description4="cardArray[3].synopsis"
        />


        <FAQ 
            :faq_id="faqArray[0].id"
            :faq_question="faqArray[0].question"
            :faq_answer="faqArray[0].answer"

            :faq_id2="faqArray[1].id"
            :faq_question2="faqArray[1].question"
            :faq_answer2="faqArray[1].answer"

            :faq_id3="faqArray[2].id"
            :faq_question3="faqArray[2].question"
            :faq_answer3="faqArray[2].answer"

            :faq_id4="faqArray[3].id"
            :faq_question4="faqArray[3].question"
            :faq_answer4="faqArray[3].answer"
        />
    </main>
</template>

<style lang="scss" scoped>
    @use '../assets/stylesheets/variables';

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15rem;
        overflow: hidden;
    }
</style>