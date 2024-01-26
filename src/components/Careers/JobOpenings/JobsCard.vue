<script setup>
    import Tags from '../../Standalone/Tags.vue';
    import Qualification from './JobsCard/Qualification.vue';

    import '../../../assets/stylesheets/Careers/JobOpenings/JobsCard.scss';

    const props = defineProps({
        jobName: String,
        jobTagType: String,
        jobTagValue: String,
        jobTagType2: String,
        jobTagValue2: String,
        jobResume: String,
        qualification: Array,
    });
</script>

<template>
    <div class="jobsCardContainer">
        <div class="jcTexts">
            <div class="jcJobName">
                <h5>{{ jobName }}</h5>

                <div class="jcTags">
                    <Tags 
                        :type="props.jobTagType"
                        :value="props.jobTagValue"
                    />
                    <Tags 
                        :type="props.jobTagType2"
                        :value="props.jobTagValue2"
                    />
                </div>
            </div>

            <div class="jcJobResume">
                <h5>About This Job</h5>

                <p>
                    {{ jobResume }}
                </p>
            </div>

            <div class="jcRequireQualiContainer">
                <h5>Requirements & Qualifications</h5>

                <div class="jcQualifications">
                    <Qualification 
                        v-for="qualification in props.qualification"
                        :requirement="qualification"
                    />
                </div>
            </div>
        </div>

        <button>Apply Now</button>
    </div>
</template>