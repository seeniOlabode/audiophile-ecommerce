<template>
  <site-header />
  <home-page />
  <site-footer />
</template>

<script>
import ActionButton from "./components/shared/ActionButton.vue";
import SiteHeader from "./components/SiteHeader.vue";
import HomePage from "./components/home/HomePage.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    HomePage,
    ActionButton,
    SiteFooter,
  },
};
</script>

<style>
#app {
  width: 100vw;
  overflow: hidden;
}
</style>