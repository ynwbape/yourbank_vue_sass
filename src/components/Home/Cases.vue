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
    <section class="casesContainer">
        <SectionTitles
            :green-title="TEXTS.Home.Cases.greenTitle"
            :title-description="TEXTS.Home.Cases.casesResume"
        />
        <div class="casesContent">
            <article class="indiBusiContainer">
                <div class="indiBusiItems">
                    <div class="casesSubItems">
                        <CaseItem 
                            :case-item-name="caseItemArray[0].name"
                            :case-img-url="caseItemArray[0].img"
                            case-img-alt="Bag of money on hand icon"
                            />
                        <CaseItem 
                            :case-item-name="caseItemArray[1].name"
                            :case-img-url="caseItemArray[1].img"
                            case-img-alt="Dollar sign between hands"
                        />
                    </div>
                    <div class="casesSubItems">
                        <CaseItem 
                            :case-item-name="caseItemArray[2].name"
                            :case-img-url="caseItemArray[2].img"
                            case-img-alt="Bank icon"
                        />
                        <CaseItem 
                            :case-item-name="caseItemArray[3].name"
                            :case-img-url="caseItemArray[3].img"
                            case-img-alt="opened book icon"
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
            </article>
            <article class="indiBusiContainer">
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
                            case-img-alt="Buildings icon"
                        />
                        <CaseItem 
                            :case-item-name="caseItemArray[5].name"
                            :case-img-url="caseItemArray[5].img"
                            case-img-alt="Money machine icon"
                        />
                    </div>
                    <div class="casesSubItems">
                        <CaseItem 
                            :case-item-name="caseItemArray[6].name"
                            :case-img-url="caseItemArray[6].img"
                            case-img-alt="Graph board icon"
                        />
                        <CaseItem 
                            :case-item-name="caseItemArray[7].name"
                            :case-img-url="caseItemArray[7].img"
                            case-img-alt="Dollar coin icon"
                        />
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>