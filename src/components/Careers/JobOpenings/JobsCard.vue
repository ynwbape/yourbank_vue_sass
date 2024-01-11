<script setup>
    import Tags from '../../Standalone/Tags.vue';
    import Qualification from './JobsCard/Qualification.vue';

    const props = defineProps({
        jobName: String,
        jobTagType: String,
        jobTagValue: String,
        jobTagType2: String,
        jobTagValue2: String,
        jobResume: String,
        qualification: Array,
    })
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
<style lang="scss" scoped>
    @use '../../../assets/stylesheets/variables';

    .jobsCardContainer {
        width: 78.3rem;
        display: flex;
        padding: 5rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 5rem;
        border-radius: 1.6rem;
        border: .1rem solid variables.$grey_15;
        background-color: variables.$grey_11;
        .jcTexts {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 5rem;
            align-self: stretch;

            h5 {
                align-self: stretch;
                font-size: 3rem;
                font-style: normal;
                font-weight: 600;
                line-height: 150%; /* 45px */
            }

            p {
                color: variables.$grey_70;
                font-size: 1.8rem;
                font-style: normal;
                font-weight: 300;
                line-height: 150%; /* 27px */
            }

            .jcJobName {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 1.4rem;
                align-self: stretch;

                .jcTags {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                }

            }
            .jcJobResume {
                h5 {
                    font-size: 2.4rem;
                }
            }

            .jcJobResume, .jcRequireQualiContainer {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 2rem;
                align-self: stretch;
            }

            .jcRequireQualiContainer > .jcQualifications {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 2rem;
                align-self: stretch;
            }
        }

        button {
            display: flex;
            padding: 1.6rem 3rem;
            align-items: center;
            gap: 1rem;
            border: unset;
            border-radius: 8.2rem;
            background-color: variables.$green_60;
            color: variables.$grey_11;
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 27px */
            cursor: pointer;
        }
    }
</style>