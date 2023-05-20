<template>
  <section class="product-detail">
    <div class="inner-container">
      <action-button class="back-button" variant="basic" text="go back" />
      <div class="product-details">
        <div class="product-img"></div>
        <div class="details-copy">
          <h4 class="heading-4">
            XX95 <br />
            HeadPhones
          </h4>
          <p class="body">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>

          <span class="price">$ 899</span>
          <div class="add-to-cart">
            <quantity-component /> <action-button text="add to cart" />
          </div>
        </div>
      </div>

      <div class="product-further-details">
        <div class="features">
          <h5 class="heading-5">Features</h5>
          <p class="body description">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat. The advanced Active Noise Cancellation
            with built-in equalizer allow you to experience your audio world on
            your terms. It lets you enjoy your audio in peace, but quickly
            interact with your surroundings when you need to. Combined with
            Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the
            XX99 Mark II headphones gives you superior sound, cutting-edge
            technology, and a modern design aesthetic.
          </p>
        </div>
        <div class="in-box">
          <h5 class="heading-5">IN the box</h5>
          <ul class="box-items">
            <li
              v-for="item in inBox"
              :key="item.name + 'inbox'"
              class="box-item"
              :data-quantity="item.quantity + 'x'"
            >
              <p class="body">{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="product-detail-gallery">
        <div class="gallery-img"></div>
        <div class="gallery-img"></div>
        <div class="gallery-img"></div>
      </div>
    </div>

    <product-recommendation />
  </section>
</template>

<script>
import ActionButton from "../shared/ActionButton.vue";
import QuantityComponent from "../shared/QuantityComponent.vue";
import ProductRecommendation from "./ProductRecommendation.vue";

export default {
  components: {
    ActionButton,
    QuantityComponent,
    ProductRecommendation,
  },
  data() {
    return {
      inBox: [
        {
          name: "Headphone Unit",
          quantity: 1,
        },
        {
          name: "Replacement Earcups",
          quantity: 2,
        },
        {
          name: "User Manual",
          quantity: 1,
        },
        {
          name: "3.5mm 5m Audio Cable",
          quantity: 1,
        },
      ],
    };
  },
};
</script>

<style scoped>
.product-detail {
  padding-top: 75px;
}
.product-details {
  margin-top: 56px;
  .details-copy {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .price {
    font-size: 18px;
    letter-spacing: 1.2px;
    font-weight: 700;
  }

  .add-to-cart {
    display: flex;
    gap: 16px;
    margin-top: 31px;
  }
}

.product-further-details {
  margin-top: 88px;

  display: flex;
  flex-wrap: no-wrap;
  width: 100%;
  gap: 50px;
  justify-content: space-between;

  .features {
    flex-basis: 55%;
    flex-grow: 1;
  }
  > * {
    flex-grow: 1;
    flex-basis: 40%;
  }

  .in-box {
    margin: 0;
  }

  .body.description {
    opacity: 0.5;
  }

  .in-box {
    /* margin-top: 120px; */
    .heading-5 {
      margin: 0 !important;
    }
  }

  .box-items {
    list-style: none;
    padding: 0;

    .box-item {
      display: grid;
      grid-template-columns: 15px 1fr;
      align-items: center;
      gap: 24px;
      margin: 0;
      &::before {
        content: attr(data-quantity);
        color: var(--brown-200);
        font-size: 15px;
        font-weight: 700;
      }

      .body {
        display: inline;
        margin: 0;
        opacity: 0.5;
        font-size: 15px;
      }
    }
  }
}

.product-detail-gallery {
  display: grid;
  grid-template-rows: repeat(4, 174px);
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 121px;

  .gallery-img {
    border-radius: 8px;
    background-size: cover;
  }
}

.gallery-img:nth-child(1) {
  background-image: url(../../assets/product-xx59-headphones/mobile/image-gallery-1.jpg);
}

.gallery-img:nth-child(2) {
  background-image: url(../../assets/product-xx59-headphones/mobile/image-gallery-2.jpg);
}

.gallery-img:nth-child(3) {
  background-image: url(../../assets/product-xx59-headphones/mobile/image-gallery-3.jpg);
  grid-row-start: span 2;
}

:global(.back-button) {
  opacity: 0.5;
}

.product-img {
  aspect-ratio: 1/1;
  background: url(../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg);
  background-size: cover;
  background-position: 50%;
  height: 540px;

  border-radius: 8px;
}

.product-details {
  display: flex;
  gap: 150px;

  > * {
    flex-basis: 40%;
    flex-grow: 1;
  }
}

.product-detail-gallery {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 174px);
}

.gallery-img:nth-child(2) {
  grid-column-start: 1;
}

.gallery-img:nth-child(3) {
  grid-row-start: 1;
  grid-row-end: span 2;
  grid-column-start: 2;
}

@custom-media --mobile (max-width: 600px);
@custom-media --mobile-tablet (max-width: 768px);
@custom-media --tablet-pc (max-width: 1024px);
@custom-media --pc (max-width: 1300px);

@media (--tablet-pc) {
  .product-img {
    height: 480px;
    aspect-ratio: unset;
    background-image: url(../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg);
    background-size: cover;
  }

  .product-detail {
    padding-top: 33px;
  }

  .product-details {
    margin-top: 24px;
    gap: 50px;
  }

  .in-box {
    display: flex;
    /* justify-content: space-between; */
    flex-direction: column;
    margin-top: 88px;
    align-items: start;
  }
}

@media (--mobile-tablet) {
  .product-further-details {
    flex-wrap: wrap;
    gap: 0;

    > * {
      flex-basis: 100%;
    }

    .features {
      flex-basis: 100%;
    }

    .in-box {
      flex-direction: row;
      gap: 150px;
    }
  }
}

@media (--mobile) {
  .product-details {
    display: block;
  }

  .product-img {
    aspect-ratio: 1/1;
    height: unset;
    background: url(../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg);
    background-size: cover;
  }

  .product-detail {
    padding-top: 16px;

    .details-copy {
      margin-top: 40px;
      display: block;
    }
  }

  .in-box {
    display: block;
  }

  .product-detail-gallery {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 174px);
    .gallery-img:nth-child(3) {
      grid-row-start: span 2;
      grid-column-start: unset;
    }
  }
}
</style>