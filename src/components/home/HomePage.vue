<template>
  <main class="home-page">
    <home-hero />
    <home-showcase />
  </main>
</template>

<script>
import HomeHero from "./HomeHero.vue";
import HomeShowcase from "./HomeShowcase.vue";

export default {
  components: {
    HomeHero,
    HomeShowcase,
  },
};
</script>

<style scoped>
main.home-page {
}
</style>