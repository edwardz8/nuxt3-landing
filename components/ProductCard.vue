<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useCartStore } from "../store/cart";

interface Product {
  imageSrc: string;
  imageAlt: string;
  href: string;
  name: string;
  color: string;
  currency: string;
  price: string;
  id: number;
}

const props = defineProps<{
  product: Product;
}>();

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

onMounted(() => {
  cartStore.loadCartInstance();
});

function addToCart() {
  cartStore.addToCart({ id: props.product.id, qty: 1 });
  console.log("cart", cart.value);
}
</script>

<template>
  <div class="grid">
  <div class="card">
    <div>
      <img class="image" :src="props.product.imageSrc" :alt="props.product.imageAlt" />
    </div>

    <div>
      <div>
        <h4>
          <a :href="props.product.href"><span />{{ product.name }}</a>
        </h4>
      </div>
      <p class="mt-1 text-sm text-gray-500">
        {{ props.product.color }}
      </p>
      <p class="text-sm font-medium text-gray-900">
        {{ props.product.currency }}{{ props.product.price }}
      </p>
      <button @click="addToCart">Add to Cart</button>
    </div>
    </div>
  </div>
</template>

<style>
.grid {
  display: flex;
}
.card {
  margin: 2rem;
}
.image {
  max-width: 200px;
}
</style>
