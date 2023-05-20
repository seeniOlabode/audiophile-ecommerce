<template>
  <main class="product-detail-page">
    <div class="product-detail-mock-header"></div>
    <div class="wrapper">
      <product-detail />
      <general-products-showcase class="inner-container general" />
      <small-details-copy class="small-detail" />
    </div>
  </main>
</template>

<script>
import ProductDetail from "./ProductDetail.vue";
import GeneralProductsShowcase from "../shared/GeneralProductsShowcase.vue";
import SmallDetailsCopy from "../shared/SmallDetailsCopy.vue";

export default {
  components: {
    ProductDetail,
    GeneralProductsShowcase,
    SmallDetailsCopy,
  },
  mounted() {},
};
</script>

<style scoped>
.product-detail-page {
  padding-bottom: 200px;
}
.product-detail-mock-header {
  height: var(--element-height);
  background: black;
  width: 100%;
  position: fixed;
  top: 0;
  transition: all 0.2s;
}

.wrapper {
  padding-top: var(--element-height);
}

.general {
  margin-top: 172px;
}

.small-detail {
  margin-top: 120px;
}
</style>