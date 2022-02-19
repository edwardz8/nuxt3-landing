<script setup lang="ts">
import products from "../products.json";
const modal = ref();
const openModal = () => {
  modal.value.open();
};
</script>

<template>
  <div>
    <div>
      <router-link to="/cart"><button>Cart</button></router-link>
    </div>
    <div>
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
    <button @click="openModal">Open</button>
    <!-- <Sidebar ref="modal" /> -->
  </div>
</template>