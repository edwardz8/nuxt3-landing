<script>
import useUserState from "@/store/useUserState";
import useItemState from "@/store/useItemState";

export default {
  setup: () => {
    const { addItem, removeItem, getNumberOfItems, getItems } = useItemState();

    const { getIsLoggedIn } = useUserState();

    const onAddItem = () => {
      addItem({
        id: getNumberOfItems().value + 1,
        title: `Item ${getNumberOfItems().value + 1}`,
        requiresLogin: false,
      });
    };

    return {
      items: getItems(),
      onAddItem,
      isLoggedIn: getIsLoggedIn(),
      removeItem,
    };
  },
};
</script>

<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.title }}
        <span v-if="item.requiresLogin">(login required)</span>
        <button @click="removeMovie(movie.id)">x</button>
      </li>
    </ul>
    <button @click="onAddItem()">Add Item</button>
  </div>
</template>
