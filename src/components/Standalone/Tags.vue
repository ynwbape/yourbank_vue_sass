<script setup>
    // Tags StyleSheet
    import '../../assets/stylesheets/Standalone/Tags.scss';

    const props = defineProps({
        type: String,
        value: String,
    });
</script>

<template>
    <p class="tags">
        {{ type }}: {{ value }}
    </p>
</template>