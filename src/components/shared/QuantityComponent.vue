<template>
  <div class="quantity-container">
    <button class="quantity-button" :disabled="count == 0" @click="decrement">
      -
    </button>
    <span class="quantity">{{ count }}</span>
    <button class="quantity-button" :disabled="count == 30" @click="increment">
      +
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count = this.count >= 30 ? this.count : this.count + 1;
    },
    decrement() {
      this.count = this.count <= 0 ? this.count : this.count - 1;
    },
  },
};
</script>

<style scoped>
.quantity-container {
  background: var(--gray-200);
  width: 120px;
  height: 48px;
  display: flex;
  align-items: center;
  > button {
    background: none;
    border: none;
    color: rgba(0, 0, 0, 0.25);

    &:not(button[disabled]) {
      cursor: pointer;
    }
  }

  > span {
    display: inline-block;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  * {
    flex-basis: 100%;
    height: 100%;
  }

  > button:hover:not(button[disabled]) {
    color: var(--brown-200);
  }
}
</style>