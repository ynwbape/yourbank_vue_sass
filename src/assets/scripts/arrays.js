import { IMAGES } from "./images";

// For FAQ.vue
export let faqArray = [
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
    
];

// For Standalone Components
export let cardArray = [
    {
        id: 0,
        img: IMAGES.Standalone.cardArrayImages.addThingIcon,
        service: "Secure Online Banking Platform",
        synopsis: "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.",
    },
    {
        id: 1,
        img: IMAGES.Standalone.cardArrayImages.pilesIcon,
        service: "Multi-Factor Authentication",
        synopsis: "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.",
    },
    {
        id: 2,
        img: IMAGES.Standalone.cardArrayImages.starsIcon,
        service: "Fraud Monitoring",
        synopsis: "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.",
    },
    {
        id: 3,
        img: IMAGES.Standalone.cardArrayImages.mobileBankIcon,
        service: "Secure Mobile Banking",
        synopsis: "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.",
    },
];

// For Products.vue
export let products = [
    {
        id: 0,
        name: "Checking Accounts",
        resume: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
        url: IMAGES.Home.ProductsImages.briefcaseIcon,
        alt: "Green briefcase icon",
    },
    {
        id: 1,
        name: "Savings Accounts",
        resume: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
        url: IMAGES.Home.ProductsImages.savingsIcon,
        alt: "Green briefcase icon",
    },
    {
        id: 2,
        name: "Loans and Mortgages",
        resume: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
        url: IMAGES.Home.ProductsImages.moneyIcon,
        alt: "Green briefcase icon",
    },
];

// For Testimonials.vue 
export let testimonials = [
    {
        id: 0,
        testimonial: `YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.`,
        author: "Sara T",
    },
    {
        id: 1,
        testimonial: `I recently started my own business, and
        YourBank has been instrumental in helping 
        me set up my business accounts and secure
        the financing I needed. Their expert guidance
        and tailored solutions have been invaluable.`,
        author: "John D",
    },
    {
        id: 2,
        testimonial: `I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.`,
        author: "Emily G",
    },
];

// For Cases.vue
export let caseContentStatArray = {
    individual: [
        {
            id: 0,
            number: 78,
            statName: "Secure Retirement Planning", 
        },
        {
            id: 1,
            number: 63,
            statName: "Manageable Debt Consolidation", 
        },
        {
            id: 2,
            number: 91,
            statName: "Reducing financial burdens", 
        },
    ],
    business: [
        {
            id: 0,
            number: 65,
            statName: "Cash Flow Management", 
        },
        {
            id: 1,
            number: 70,
            statName: "Drive Business Expansion", 
        },
        {
            id: 3,
            number: 45,
            statName: "Streamline payroll processing", 
        },
    ]
};

export let caseItemArray = [
    {
        name: "Managing Personal Finances",
        img: IMAGES.Home.casesImages.mpfIcon,
    },
    {
        name: "Saving for the Future",
        img: IMAGES.Home.casesImages.sftfIcon,
    },
    {   
        name: "Homeownership",
        img: IMAGES.Home.casesImages.hosIcon,
    },
    {
        name: "Education Funding",
        img: IMAGES.Home.casesImages.efundingIcon,
    },
    {
        name: "Startups and Entrepreneurs",
        img: IMAGES.Home.casesImages.saeIcon,
    },
    {
        name: "Cash Flow Management",
        img: IMAGES.Home.casesImages.cfmIcon,
    },
    {
        name: "Business Expansion",
        img: IMAGES.Home.casesImages.bexIcon,
    },
    {
        name: "Payment Solutions",
        img: IMAGES.Home.casesImages.psolIcon,
    },
];

// For Features.vue
export let featureCardArray = [
    {
        feature: "24/7 Account Access",
        featureResume: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
    },
    {
        feature: "Mobile Banking App",
        featureResume: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
    },
    {
        feature: "Secure Transactions",
        featureResume: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
    },
    {
        feature: "Bill Pay and Transfers",
        featureResume: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
    },
];  

// Careers.vue
export let benefitsArray = [
    {
        id: 0,
        img: IMAGES.Careers.careersImages.marketChartIcon,
        benefice: "Competitive Compensation",
        synopsis: "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
    },
    {
        id: 1,
        img: IMAGES.Careers.careersImages.lampIcon,
        benefice: "Health and Wellness",
        synopsis: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
    },
    {
        id: 2,
        img: IMAGES.Careers.careersImages.workBagIcon,
        benefice: "Retirement Planning",
        synopsis: "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.",
    },
    {
        id: 3,
        img: IMAGES.Careers.careersImages.folderIcon,
        benefice: "Work-Life Balance",
        synopsis: "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.",
    },
];

// Values.vue 
export let valuesDescriptionArray = [
    "We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.", 
    "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.", 
    "We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.",
    "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking."
];

// JobOpenings.vue
export let relationManager = [
    "Bachelor's degree in Business, Finance, or a related field",
    "Minimum of 3 years of experience in sales or relationship management in the banking industry",
    "Proven track record of meeting and exceeding sales targets",
    "Excellent interpersonal and negotiation skills",
    "Strong knowledge of banking products and services", 
];


export let riskAnalyst = [
    "Bachelor's degree in Finance, Economics, or a related field",
    "Minimum of 2 years of experience in risk management or a similar role",
    "Proficiency in risk analysis tools and techniques",
    "Strong analytical and problem-solving skills",
    "Knowledge of regulatory requirements and industry best practices",
];

export let itSecuritySpecialist = [
    "Bachelor's degree in Computer Science, Information Security, or a related field",
    "Minimum of 5 years of experience in IT security or a similar role",
    "In-depth knowledge of network security protocols and technologies",
    "Familiarity with regulatory frameworks such as PCI DSS and GDPR",
    "Professional certifications such as CISSP or CISM are preferred",
]; 

// PressReleases.vue 
export let pressCardArray = [
    {
        title: "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction",
        description: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.",
        imgURL: IMAGES.About.aboutImages.pressReleases.prCardImg,
        imgAlt: "Expert & client holding hands after a succeed debate",
    },
    {
        title: "YourBank Expands Branch Network with Opening of New Location in Chennai",
        description: "YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.",
        imgURL: IMAGES.About.aboutImages.pressReleases.prCardImg2,
        imgAlt: "Image of office buildings",
    },
    {
        title: "YourBank Partners with Local Nonprofit to Support Financial Education Initiatives",
        description: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
        imgURL: IMAGES.About.aboutImages.pressReleases.prCardImg3,
        imgAlt: "Workers writing some important things in their diaries",
    },
    {
        title: "YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility",
        description: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
        imgURL: IMAGES.About.aboutImages.pressReleases.prCardImg4,
        imgAlt: "Man with a board with the recycle signs represented by the earth",
    },
];

// let example = {
//     array: [
//         {},
//         {},
//         {},
//     ],
// }