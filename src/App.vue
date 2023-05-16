<template>
  <site-header />
  <home-page />
</template>

<script>
import ActionButton from "./components/shared/ActionButton.vue";
import SiteHeader from "./components/SiteHeader.vue";
import HomePage from "./components/home/HomePage.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    HomePage,
    ActionButton,
  },
};
</script>

<style>
#app {
  width: 100vw;
  overflow: hidden;
}
</style>