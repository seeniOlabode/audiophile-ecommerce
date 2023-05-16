<template>
  <section class="home-showcase">
    <div class="inner-container">
      <general-products-showcase />
      <large-product-showcase />
    </div>
  </section>
</template>

<script>
import GeneralProductsShowcase from "../shared/GeneralProductsShowcase.vue";
import LargeProductShowcase from "./LargeProductShowcase.vue";

export default {
  components: {
    GeneralProductsShowcase,
    LargeProductShowcase,
  },
};
</script>

<style scoped>
.home-showcase {
  padding: 200px 0px 200px 0px;
}
</style>