<template>
  <div v-show="cartOpen" class="cart-background"></div>
  <aside class="cart" :class="{ open: cartOpen }">
    <div class="cart-inner-wrapper">
      <div class="cart-inner">
        <div class="row">
          <h6 class="heading-6">Cart (3)</h6>
          <action-button
            class="remove-button"
            variant="basic"
            text="remove all"
          />
        </div>
        <div class="cart-products">
          <div
            class="cart-product"
            v-for="cartProduct in cartProducts"
            :key="cartProduct + 'cart'"
          >
            <div class="product-img">
              <img
                src="../../assets/cart/image-xx99-mark-one-headphones.jpg"
                alt=""
              />
            </div>
            <div class="product-details">
              <h6 class="heading-6">XX99 MK II</h6>
              <p class="price">$ 2,999</p>
            </div>
            <quantity-component />
          </div>
        </div>
        <div class="row total-row">
          <h6 class="heading-6 total">Total</h6>
          <p class="total-amount">$ 5,396</p>
        </div>
        <action-button class="cart-checkout-button" text="checkout" />
      </div>
    </div>
  </aside>
</template>

<script>
import ActionButton from "./ActionButton.vue";
import QuantityComponent from "./QuantityComponent.vue";

export default {
  props: ["top", "cartOpen"],
  components: {
    ActionButton,
    QuantityComponent,
  },
  data() {
    return {
      cartProducts: [1, 2, 3],
    };
  },
};
</script>

<style scoped>
.cart-inner-wrapper {
  transform: translateY(100%);
  transition: transform 0.5s;
  height: 100%;
}
.cart {
  position: fixed;
  top: var(--element-height);
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5000;
  overflow: hidden;
  transform: translateY(-100%);
  overflow: hidden;
  transition: transform 0.5s;
  z-index: -1;
}

.cart-background {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: var(--element-height);
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
}

.cart-inner {
  background: white;
  padding: 32px 28px;
  color: black;
}

.heading-6 {
  margin: 0;
}

.total {
  opacity: 0.5;
  font-weight: 500;
  font-size: 15px;
}

p.total-amount {
  margin: 0;
  font-weight: 700;
  font-size: 18px;
}

.total-row {
  margin-top: 32px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.remove-button {
}

.cart-products {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 36.5px;
}

.cart-product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.product-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  margin-right: auto;
}

.product-details .heading-6 {
  font-size: 15px;
  margin: 0;
}

.product-details .price {
  font-size: 14px;
  font-weight: 700;
  opacity: 0.5;
  margin: 0;
}

.product-img {
  border-radius: 8px;
  overflow: hidden;
  width: 64px;
  aspect-ratio: 1/1;
}

.product-img img {
  object-fit: contain;
  width: 100%;
}

.cart-checkout-button {
  width: 100%;
  margin-top: 40px;
  /* I'm resetting this because it has been stamped in teha ction button component */
  max-width: none !important;
}

.cart.open {
  display: block;
  transform: translateY(0%);

  .cart-inner-wrapper {
    transform: translateY(0%);
  }

  .cart-background {
    transform: translate(0%);
  }
}
</style>