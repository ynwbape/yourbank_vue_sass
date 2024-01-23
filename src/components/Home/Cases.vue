<script setup>
    import SectionTitles from '../Standalone/SectionTitles.vue';
    import CaseContent from './Cases/CaseContent.vue';
    import CaseItem from "./Cases/CaseItem.vue";
    
    import { TEXTS } from '../../assets/scripts/texts';

    import { 
        caseContentStatArray, 
        caseItemArray 
    } from '../../assets/scripts/arrays';

    // Cases StyleSheet
    import '../../assets/stylesheets/Home/Cases.scss';
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