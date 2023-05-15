<template>
  <div class="theme-test">
    <action-button text="shop" variant="secondary" />
  </div>
</template>

<script>
import ActionButton from "./components/shared/ActionButton.vue";

export default {
  name: "App",
  components: {
    ActionButton,
  },
};
</script>

<style>
.theme-test {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>