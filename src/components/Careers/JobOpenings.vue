<script setup>
    import SectionTitles from '../Standalone/SectionTitles.vue';
    import JobsCard from './JobOpenings/JobsCard.vue';

    import { TEXTS } from '../../assets/scripts/texts';
    
    import {
        relationManager,
        riskAnalyst,
        itSecuritySpecialist
    } from '../../assets/scripts/arrays';

    // JobOpenings StyleSheet
    import '../../assets/stylesheets/Careers/JobOpenings.scss';
</script>

<template>
    <section class="joContainer">
        <SectionTitles 
            green-title="Job Openings"
            :title-description="TEXTS.Careers.JobOpenings.joDescription"
        />
        
        <article class="joCardContainer">
            <JobsCard 
                job-name="Relationship Manager"
                :job-resume="TEXTS.Careers.JobOpenings.rmResume"
                job-tag-type="Location"
                job-tag-value="India"
                job-tag-type2="Department"
                job-tag-value2="Retail Banking"
                :qualification="relationManager"
            />
            <JobsCard 
                job-name="Risk Analyst"
                :job-resume="TEXTS.Careers.JobOpenings.raResume"
                job-tag-type="Location"
                job-tag-value="India"
                job-tag-type2="Department"
                job-tag-value2="Risk Management"
                :qualification="riskAnalyst"
            />
        </article>

        <article class="joCardContainer">
            <JobsCard 
                job-name="IT Security Specialist"
                :job-resume="TEXTS.Careers.JobOpenings.itssResume"
                job-tag-type="Location"
                job-tag-value="India"
                job-tag-type2="Department"
                job-tag-value2="Informarion Technology"
                :qualification="itSecuritySpecialist"
            />
        </article>
    </section>
</template>