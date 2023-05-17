<template>
  <main class="home-page">
    <home-hero />
    <home-showcase />
    <small-details-copy />
  </main>
</template>

<script>
import HomeHero from "./HomeHero.vue";
import HomeShowcase from "./HomeShowcase.vue";
import SmallDetailsCopy from "../shared/SmallDetailsCopy.vue";

export default {
  components: {
    HomeHero,
    HomeShowcase,
    SmallDetailsCopy,
  },
};
</script>

<style scoped>
@custom-media --mobile (max-width: 768px);
@custom-media --mobile-tablet (max-width: 600px);
@custom-media --tablet-pc (max-width: 1024px);
@custom-media --pc (max-width: 1300px);

main.home-page {
  scroll-snap-type: y proximity;
  padding-bottom: 200px;
}

main.home-page section {
  scroll-snap-align: start;
}

@media (--tablet-pc) {
  main.home-page {
    padding-bottom: 120px;
  }
}
</style>