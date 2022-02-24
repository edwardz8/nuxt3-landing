<script>
import useItemState from "@/store/useItemState";
import useUserState from "@/store/useUserState";
import ItemsList from "../components/ItemsList";
import UserLogin from "../components/UserLogin";
import UserProfile from "../components/UserProfile";

export default {
  setup: () => {
    const { getNumberOfItems } = useItemState();
    const { state: userState, getIsLoggedIn } = useUserState();

    return {
      numberOfItems: getNumberOfItems(),
      isLoggedIn: getIsLoggedIn(),
      userState,
    };
  },
};
</script>

<template>
  <user-login v-if="!userState.isLoggedIn" />
  <user-profile v-else />
  <items-list />

  Number of items: {{ numberOfItems }}
</template>
