<template>
  <div class="category-product">
    <div class="product-image-container"></div>
    <div class="copy">
      <p class="overline">New product</p>
      <h4 class="heading-4">
        XX99 Mark II <br />
        Headphones
      </h4>
      <p class="body">
        The new XX99 Mark II headphones is the pinnacle of pristine audio. It
        redefines your premium headphone experience by reproducing the balanced
        depth and precision of studio-quality sound.
      </p>
      <action-button class="copy-button" text="see product" />
    </div>
  </div>
</template>

<script>
import ActionButton from "../shared/ActionButton.vue";

export default {
  components: {
    ActionButton,
  },
};
</script>

<style scoped>
.category-product {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  > * {
    flex-basis: 40%;
    flex-grow: 1;
  }

  &:nth-child(even) .copy {
    order: -1;
  }
}
.product-image-container {
  width: 100%;
  overflow: hiden;
  background-image: url("../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg");
  background-size: cover;
  background-position: 50% 30%;
  border-radius: 8px;
  height: 560px;
}

.product-image {
  width: 100%;
}

.copy .heading-4 {
  margin-bottom: 15px;
}

.copy {
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 50px;
}

.copy .body {
  opacity: 0.5;
  max-width: 500px;
}

.overline {
  margin-bottom: 0;
  font-size: 12px;
}

.copy-button {
  /* margin-top: 24px; */
}

@custom-media --mobile (max-width: 600px);
@custom-media --mobile-tablet (max-width: 768px);
@custom-media --tablet-pc (max-width: 1024px);
@custom-media --pc (max-width: 1300px);

@media (--tablet-pc) {
  .copy .heading-4 {
    margin-bottom: 24px;
  }
  .product-image-container {
    background-image: url("../../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg");
    display: block;
    height: 352px;
  }

  .category-product {
    display: block;
  }

  .copy {
    margin-top: 32px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
}

@media (--mobile) {
  .product-image-container {
    background-image: url("../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg");
  }

  .overline {
    margin-bottom: 24px;
  }

  .copy-button {
    margin-top: 24px;
  }
}
</style>