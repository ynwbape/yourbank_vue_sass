<script setup>
    // Vue State
    import { ref } from 'vue';
    
    //Start Your Career Component 
    import CTA from '../components/Standalone/CTA.vue';
    
    // Our Values section component 
    import Values from '../components/Careers/Values.vue';
    
    // Our Benefits section (TitleCardsSection component)
    import OurBenefits from '../components/Careers/OurBenefits.vue';
    
    // Job openings section
    import JobOpenings from '../components/Careers/JobOpenings.vue';
    
    // Frequently Asked Quesiton component
    import FAQ from '../components/Standalone/FAQ.vue';
    
    // Title + image component
    import TitleImageSection from '../components/Standalone/TitleImageSection.vue';
    // Image background for TitleImageSection component
    import ybcImg from '../assets/img/Careers/careerimgbg.png';
    
    // icons for Our Benefits section
    import marketChartIcon from '../assets/img/Careers/icons/marketcharticon.svg';
    import lampIcon from '../assets/img/Careers/icons/lampicon.svg';
    import workBagIcon from '../assets/img/Careers/icons/workbagicon.svg';
    import folderIcon from '../assets/img/Careers/icons/foldericon.svg';
    
    // TitleImageSection headings
    const ybcTitle = "Welcome to";
    const ybcGreenBoldTtitle = "YourBank";
    const ybcEndTitle = "Careers";
    
    // for TitleImageSection description's attribute
    const ybcDescription = "Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.";
    
    // description value for 'alt' attribute in img tag in TitleImageSection component
    const ybcImgDesc = "An expert conversating with a client";
    
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
    
    
    // values for Our Benefits section
    const obDescription = "At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth."
    
    // arrays of cards for TitleCardsSection component
    let cardArray = ref([
        {
            id: 0,
            img: marketChartIcon,
            benefice: "Competitive Compensation",
            synopsis: "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
        },
        {
            id: 1,
            img: lampIcon,
            benefice: "Health and Wellness",
            synopsis: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
        },
        {
            id: 2,
            img: workBagIcon,
            benefice: "Retirement Planning",
            synopsis: "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.",
        },
        {
            id: 3,
            img: folderIcon,
            benefice: "Work-Life Balance",
            synopsis: "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.",
        },
    ]);

    // console.log(ourBenefits);
</script>

<template>
    <main> 
        <!-- Welcome to YourBank Section -->
        <TitleImageSection 
            :title="ybcTitle"
            :green-bold-title="ybcGreenBoldTtitle"
            :end-title="ybcEndTitle"
            :description="ybcDescription"
            :image="ybcImg"
            :image-description="ybcImgDesc"
        />

        <!-- Our Values Section -->
        <Values />

        <!-- Our Benefits section -->
        <OurBenefits 
            :card-id="cardArray[0].id"
            :card-icon="cardArray[0].img"
            :card-title="cardArray[0].benefice"
            :card-description="cardArray[0].synopsis"
            
            :card-id2="cardArray[1].id"
            :card-icon2="cardArray[1].img"
            :card-title2="cardArray[1].benefice"
            :card-description2="cardArray[1].synopsis"
            
            :card-id3="cardArray[2].id"
            :card-icon3="cardArray[2].img"
            :card-title3="cardArray[2].benefice"
            :card-description3="cardArray[2].synopsis"
            
            :card-id4="cardArray[3].id"
            :card-icon4="cardArray[3].img"
            :card-title4="cardArray[3].benefice"
            :card-description4="cardArray[3].synopsis"
        />

        <!-- Job Openings Section -->
        <JobOpenings />
        
        <!-- Frequently Asked Question -->
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

        <!-- Start your career section -->
        <CTA />
    </main>    
</template>

<style lang="scss">
    @use '../assets/stylesheets/variables';
</style>