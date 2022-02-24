<script setup lang="ts">
import { useCartStore } from "../store/cart";
import { storeToRefs } from "pinia";
import { DisplayCart } from "../types/interfaces";

defineProps({
    title: String,
    message: String 
})

const isOpen = ref(false);
const open = () => (isOpen.value = true);

// defineEmit('close', )
// defineExpose({ open });

const cartStore = useCartStore();
const { cart, displayCart } = storeToRefs(cartStore);

onMounted(() => {
  cartStore.loadCartInstance();
  cartStore.displayCartLoad();
});

const total = computed(() => {
  let sum = (displayCart.value as DisplayCart[]).reduce(
    (initialSum: number, item: DisplayCart) => {
      if (item.inStock) initialSum = initialSum + item.price * item.qty;
      return initialSum;
    },
    0
  );
  return sum;
});

function removeItem(id: number) {
  cartStore.removeFromCart(id);
}
</script>

<template>
  <div class="root">
    <button @click="isOpen">Open Modal</button>
    <teleport to="body">
      <div class="modal" v-if="open">
        <p>Cart</p>
        <div v-for="(item, index) in displayCart" :key="index">
          <div v-if="item.inStock">
            <div>
              <img class="image" :src="item.imageSrc" />
            </div>
            <div>{{ item.name }}</div>
            <div>{{ item.currency }} {{ item.price }}</div>
            <div>{{ item.qty }}</div>
            <div>{{ item.color }}</div>
          </div>
          <div v-else>{{ `Item ${item.name} is not in stock` }}</div>

          <button @click="removeItem(item.id)">Remove</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<style>
.root {
  position: relative;
}

.modal {
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: left;
  align-items: left;
}

.modal > div {
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
}
</style>
