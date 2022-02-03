<script setup lang="ts">
import { useBankAccountStore } from "../stores/bank";

const store = useBankAccountStore();

store.$onAction(({ name, store, after }) => {
  after((result) => {
    if (result && name === "charge") {
      store.processTransaction(result);
    }
  });
});
</script>

<template>
  <div>
    <h3>Balance: {{ store.runningBalance }}</h3>
    <h3>Pending: {{ store.pendingAmount }}</h3>

    <button @click="store.charge(5)">Buy $5</button>

    <div>
      <h3>Pending</h3>
      <ul>
        <li v-for="item in store.pendingTransactions" :key="item.id">
          ${{ item.amount }}
        </li>
      </ul>
    </div>
  </div>
</template>
