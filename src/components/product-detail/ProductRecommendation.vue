<template>
  <section class="product-recommendation">
    <div class="inner-container">
      <h5 class="heading-5">You may also like</h5>
      <div class="recommendations">
        <div
          class="recommendation"
          v-for="rec in recommended"
          :key="rec + 'ahh'"
        >
          <div class="recommendation-img">
            <img
              src="../../assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt=""
            />
          </div>
          <div class="copy">
            <h5 class="heading-5">zx5 speaker</h5>
            <action-button text="see product" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ActionButton from "../shared/ActionButton.vue";

export default {
  components: {
    ActionButton,
  },
  data() {
    return {
      recommended: [1, 2, 5],
    };
  },
};
</script>

<style scoped>
@custom-media --mobile (max-width: 600px);
@custom-media --mobile-tablet (max-width: 768px);
@custom-media --tablet-pc (max-width: 1024px);
@custom-media --pc (max-width: 1300px);

.product-recommendation {
  text-align: center;
  margin-top: 120px;
}

.inner-container {
  .recommendations {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-top: 56px;
  }
}

.recommendation .copy {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
}

.recommendation-img {
  height: 318px;
  background: var(--gray-100);
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    /* height: 70%; */
    object-fit: contain;
    width: 80%;
    position: relative;
    top: 20px;
  }
}

@media (--mobile-tablet) {
  .inner-container {
    .recommendations {
      gap: 11px;
    }
  }

  .recommendation-img {
    > img {
      width: 100%;
    }
  }
}

@media (--mobile) {
  .product-recommendation {
    .inner-container {
      .recommendations {
        flex-direction: column;
        gap: 56px;
      }
    }
  }

  .recommendation-img {
    height: 120px;

    > img {
      height: 80%;
      width: unset;
      top: 10px;
    }
  }
}
</style>