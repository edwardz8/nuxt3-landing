<script>
import useUserState from "@/store/useUserState";

export default {
  name: "UserProfile",
  setup: () => {
    const { getFullName, updateIsLoggedIn } = useUserState();

    return {
      fullName: getFullName(),
      updateIsLoggedIn,
    };
  },
};
</script>

<template>
  <div>
    <h4>User: {{ fullName }}</h4>
    <button @click="updateIsLoggedIn(false)">Logout</button>
  </div>
</template>
