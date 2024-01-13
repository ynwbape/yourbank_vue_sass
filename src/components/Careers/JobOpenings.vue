<script setup>
    import SectionTitles from '../Standalone/SectionTitles.vue';
    import JobsCard from './JobOpenings/JobsCard.vue';

    import {
        joDescription,
        rmResume,
        raResume,
        itssResume
    } from '../../assets/scripts/texts';
    
    import {
        relationManager,
        riskAnalyst,
        itSecuritySpecialist
    } from '../../assets/scripts/arrays';

      
</script>

<template>
    <div class="joContainer">
        <SectionTitles 
            green-title="Job Openings"
            :title-description="joDescription"
        />
        
        <div class="joCardContainer">
            <JobsCard 
                job-name="Relationship Manager"
                :job-resume="rmResume"
                job-tag-type="Location"
                job-tag-value="India"
                job-tag-type2="Department"
                job-tag-value2="Retail Banking"
                :qualification="relationManager"
            />
            <JobsCard 
                job-name="Risk Analyst"
                :job-resume="raResume"
                job-tag-type="Location"
                job-tag-value="India"
                job-tag-type2="Department"
                job-tag-value2="Risk Management"
                :qualification="riskAnalyst"
            />
        </div>

        <div class="joCardContainer">
            <JobsCard 
                job-name="IT Security Specialist"
                :job-resume="itssResume"
                job-tag-type="Location"
                job-tag-value="India"
                job-tag-type2="Department"
                job-tag-value2="Informarion Technology"
                :qualification="itSecuritySpecialist"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../assets/stylesheets/variables';

    .joContainer {
        display: flex;
        width: 159.6rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 8rem;
        
        .joCardContainer {
            display: flex;
            align-items: flex-start;
            gap: 3rem;
            align-self: stretch;
        }
    }
</style>