<template>
  <section class="general-product-showcase">
    <div class="product" v-for="prod in products" :key="prod + 'prd'">
      <div class="product-thumbnail">
        <img
          class="product-thumbnail-img"
          src="../../assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt=""
        />
      </div>

      <h6 class="heading-6">Speakers</h6>
      <action-button text="Shop" variant="misc" />
    </div>
  </section>
</template>

<script>
import ActionButton from "./ActionButton.vue";

export default {
  components: {
    ActionButton,
  },
  data() {
    return {
      products: [1, 2, 3],
    };
  },
};
</script>

<style scoped>
.general-product-showcase {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 68px;
}

.product {
  text-align: center;
  background: var(--gray-200);
  flex-basis: 30%;
  border-radius: 8px;
  padding: 30px;
  padding-top: 116px;
  position: relative;
  > button {
    width: 100%;
  }
  display: flex;
  flex-direction: column;

  align-items: center;
  .product-thumbnail {
    max-width: 170px;
    overflow: hidden;
    position: absolute;
    top: -50px;

    .product-thumbnail-img {
      object-fit: contain;
      width: 100%;
    }
  }

  > h6 {
    text-align: center;
  }
}

@custom-media --small-viewport (max-width: 768px);
@custom-media --xs-small-viewport (max-width: 600px);
@custom-media --medium-viewport (max-width: 1024px);
@custom-media --large-viewport (max-width: 1300px);

@media (--medium-viewport) {
  .general-product-showcase {
  }
  .product {
    flex-basis: 30%;
  }
}

@media (--small-viewport) {
  .general-product-showcase {
  }

  .product {
    flex-basis: 30%;
  }
}

@media (--xs-small-viewport) {
  .product {
    flex-basis: 100%;
  }
}
</style>