<script setup>
    import { TEXTS } from '../../assets/scripts/texts';

    // CTA StyleSheet 
    import '../../assets/stylesheets/Standalone/CTA.scss';
</script>
<template>
    <section class="CTA">
        <div class="ctaTitles">
            <h2>
                {{ TEXTS.Standalone.CTA.title }}
                <strong>
                    {{ TEXTS.Standalone.CTA.greenTitle }}
                </strong>
            </h2>

            <p>
                {{ TEXTS.Standalone.CTA.paragraph }}
            </p>
        </div>

        <a href="#openaccount" target="_blank">Open Account</a>
    </section>
</template>