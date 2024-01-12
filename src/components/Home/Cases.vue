<script setup>
    import { ref } from "vue";
    import SectionTitles from '../Standalone/SectionTitles.vue';
    import CaseCard from './Cases/CaseCard.vue';
    import CaseContent from './Cases/CaseContent.vue';

    import abDesign from '../../assets/img/Home/abstract_design.svg';
    import CaseItem from "./Cases/CaseItem.vue";
    
    const casesResume = "At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions";

    const individualResume = 'For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers';
    
    const businessResume = ' For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them';

    let caseContentStatArray = ref({
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
    });

    import mpf from '../../assets/img/Home/icons/CaseItem/mpf.svg';
    import sftf from '../../assets/img/Home/icons/CaseItem/sftf.svg';
    import hos from '../../assets/img/Home/icons/CaseItem/hos.svg';
    import efunding from '../../assets/img/Home/icons/CaseItem/efunding.svg';
    import sae from '../../assets/img/Home/icons/CaseItem/sae.svg';
    import cfm from '../../assets/img/Home/icons/CaseItem/cfm.svg';
    import bex from '../../assets/img/Home/icons/CaseItem/bex.svg';
    import psol from '../../assets/img/Home/icons/CaseItem/psol.svg';

    let caseItemArray = ref([
        {
            name: "Managing Personal Finances",
            img: mpf,
        },
        {
            name: "Saving for the Future",
            img: sftf,
        },
        {   
            name: "Homeownership",
            img: hos,
        },
        {
            name: "Education Funding",
            img: efunding,
        },
        {
            name: "Startups and Entrepreneurs",
            img: sae,
        },
        {
            name: "Cash Flow Management",
            img: cfm,
        },
        {
            name: "Business Expansion",
            img: bex,
        },
        {
            name: "Payment Solutions",
            img: psol,
        },

    ])
</script>
<template>
    <div class="casesContainer">
        <SectionTitles
            green-title="Use Cases"
            :title-description="casesResume"
        />

        <div class="casesContent">
            <div class="indiBusiContainer">
                <div class="indiBusiItems">
                    <div class="casesSubItems">
                        <CaseItem 
                            :case-item-name="caseItemArray[0].name"
                            :case-img-url="caseItemArray[0].img"
                        />
                        <CaseItem 
                            :case-item-name="caseItemArray[1].name"
                            :case-img-url="caseItemArray[1].img"
                        />
                    </div>
                    <div class="casesSubItems">
                        <CaseItem 
                            :case-item-name="caseItemArray[2].name"
                            :case-img-url="caseItemArray[2].img"
                        />
                        <CaseItem 
                            :case-item-name="caseItemArray[3].name"
                            :case-img-url="caseItemArray[3].img"
                        />
                    </div>
                </div>
                <CaseContent
                    ccon-title="For Individual"
                    :ccon-resume="individualResume"
                    :ccon-stat="caseContentStatArray.individual[0].number"
                    :ccon-stat-name="caseContentStatArray.individual[0].statName"
                    :ccon-stat2="caseContentStatArray.individual[1].number"
                    :ccon-stat-name2="caseContentStatArray.individual[1].statName"
                    :ccon-stat3="caseContentStatArray.individual[2].number"
                    :ccon-stat-name3="caseContentStatArray.individual[2].statName"
                />

            </div>
            <div class="indiBusiContainer">
                <CaseContent
                    ccon-title="For Business"
                    :ccon-resume="businessResume"
                    :ccon-stat="caseContentStatArray.business[0].number"
                    :ccon-stat-name="caseContentStatArray.business[0].statName"
                    :ccon-stat2="caseContentStatArray.business[1].number"
                    :ccon-stat-name2="caseContentStatArray.business[1].statName"
                    :ccon-stat3="caseContentStatArray.business[2].number"
                    :ccon-stat-name3="caseContentStatArray.business[2].statName"
                />
                <div class="indiBusiItems">
                    <div class="casesSubItems">
                        <CaseItem 
                            :case-item-name="caseItemArray[4].name"
                            :case-img-url="caseItemArray[4].img"
                        />
                        <CaseItem 
                            :case-item-name="caseItemArray[5].name"
                            :case-img-url="caseItemArray[5].img"
                        />
                    </div>
                    <div class="casesSubItems">
                        <CaseItem 
                            :case-item-name="caseItemArray[6].name"
                            :case-img-url="caseItemArray[6].img"
                        />
                        <CaseItem 
                            :case-item-name="caseItemArray[7].name"
                            :case-img-url="caseItemArray[7].img"
                        />
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    .casesContainer {
        display: flex;
        width: 159.6rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 8rem;

        .casesContent {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 6rem;
            align-self: stretch;

            .indiBusiContainer {
                display: flex;
                align-items: center;
                gap: 10rem;
                align-self: stretch;

                .indiBusiItems {
                    display: flex;
                    padding: 5rem;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 2rem;
                    flex: 1 0 0;
                    border-radius: 2rem;
                    background-color: variables.$grey_11;
                    position: relative;
                    background-image: url('../../assets/img/Home/abstract_design.svg');
                    background-repeat: no-repeat;

                    &:last-child {
                        background-image: url('../../assets/img/Home/abstract_design_reversed.svg');
                        background-position: top right; 
                    }
                    
                    .casesSubItems {
                        display: flex;
                        align-items: flex-start;
                        gap: 2rem;
                        align-self: stretch;

                        
                    }
                }
            }
        }
    }
</style>