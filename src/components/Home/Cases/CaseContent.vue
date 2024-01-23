<script setup>
    // CaseContent StyleSheet
    import '../../../assets/stylesheets/Home/Cases/CaseContent.scss';
    
    const props = defineProps({
        cconTitle: String,
        cconResume: String,
        cconStat: Number,
        cconStatName: String,
        cconStat2: Number,
        cconStatName2: String,
        cconStat3: Number,
        cconStatName3: String,
    });
</script>
<template>
    <div class="individualContent">
        <div class="indiHeadings">
            <h5>{{ cconTitle }}</h5>
            
            <p>
                {{ cconResume }}
            </p>
        </div>
        <div class="statistics">
            <div class="stat">
                <span>{{cconStat}}%</span>
                <p>{{cconStatName}}</p>
            </div>
            <div class="statLine"></div>
            <div class="stat">
                <span>{{cconStat2}}%</span>
                <p>{{cconStatName2}}</p>
            </div>
            <div class="statLine"></div>
            <div class="stat">
                <span>{{cconStat3}}%</span>
                <p>{{cconStatName3}}</p>
            </div>
        </div>
        <a href="#">Learn More</a>
    </div>
</template>