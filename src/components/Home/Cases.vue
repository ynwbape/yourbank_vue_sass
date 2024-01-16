<script setup>
    import SectionTitles from '../Standalone/SectionTitles.vue';
    import CaseContent from './Cases/CaseContent.vue';

    import CaseItem from "./Cases/CaseItem.vue";
    
    import { TEXTS} from '../../assets/scripts/texts';

    import { 
        caseContentStatArray, 
        caseItemArray 
    } from '../../assets/scripts/arrays';
</script>
<template>
    <div class="casesContainer">
        <SectionTitles
            :green-title="TEXTS.Home.Cases.greenTitle"
            :title-description="TEXTS.Home.Cases.casesResume"
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
                    :ccon-resume="TEXTS.Home.Cases.individualResume"
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
                    :ccon-resume="TEXTS.Home.Cases.businessResume"
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