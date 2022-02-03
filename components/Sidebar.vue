<script setup lang="ts">
const props = defineProps({ 'toogle', 'cart', 'inventory', 'remove' });

const isContentShown = ref(false);
const open = () => (isContentShown.value = true);
</script>

<template></template>
