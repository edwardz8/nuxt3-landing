<script setup lang="ts">
const modal = ref();
const openModal = () => {
  modal.value.open();
};
</script>

<template>
  <div>
    <button @click="openModal">Open</button>
    <Sidebar ref="modal" />
  </div>
</template>

<style>
.font, body {
  font-size: 4rem;
  font-family: "Press Start 2P";
}
</style>
