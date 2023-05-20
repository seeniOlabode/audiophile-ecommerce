<template>
  <main class="checkout-page">
    <div class="mock-header"></div>
    <div class="inner-container">
      <action-button class="back-button" text="Go back" variant="basic" />
      <div class="checkout-wrapper">
        <checkout-form />
        <checkout-summary />
      </div>
    </div>
  </main>
</template>

<script>
import ActionButton from "../shared/ActionButton.vue";
import CheckoutForm from "./CheckoutForm.vue";
import CheckoutSummary from "./CheckoutSummary.vue";

export default {
  components: {
    ActionButton,
    CheckoutForm,
    CheckoutSummary,
  },
};
</script>

<style scoped>
main.checkout-page {
  background-color: var(--gray-100);
}

.mock-header {
  height: var(--element-height);
  background: black;
  width: 100%;
  position: fixed;
  top: 0;
  transition: all 0.2s;
}

.inner-container {
  padding-top: calc(var(--element-height) + 16px);
}

.checkout-wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 100px;
}
</style>