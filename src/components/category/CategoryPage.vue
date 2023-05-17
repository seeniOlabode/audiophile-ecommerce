<template>
  <main class="category-page">
    <category-header />
    <section class="category-products inner-container">
      <category-product />
      <category-product />
      <category-product />
    </section>
    <general-products-showcase class="inner-container general-showcase" />
    <small-details-copy class="small-details" />
  </main>
</template>

<script>
import CategoryHeader from "./CategoryHeader.vue";
import CategoryProduct from "./CategoryProduct.vue";
import GeneralProductsShowcase from "../shared/GeneralProductsShowcase.vue";
import SmallDetailsCopy from "../shared/SmallDetailsCopy.vue";

export default {
  components: {
    CategoryHeader,
    CategoryProduct,
    GeneralProductsShowcase,
    SmallDetailsCopy,
  },
};
</script>

<style scoped>
main.category-page {
  --heading-element-height: 100px;
  --heading-font-size: 40px;

  padding-bottom: calc(var(--heading-element-height) + 100px + 120px);
}

.category-products {
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding-top: calc(var(--heading-element-height) + 100px + 120px);
}

.general-showcase {
  margin-top: 172px;
}

.small-details {
  margin-top: 120px;
}
</style>