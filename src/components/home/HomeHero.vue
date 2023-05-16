<template>
  <section class="home-hero">
    <div class="inner-container">
      <p class="overline">New Product</p>
      <h1 class="heading-1">XX99 Mark II HeadphoneS</h1>
      <p class="body">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <action-button class="hero-button" text="see products" />
    </div>
  </section>
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
.home-hero {
  background: url(../../assets/home/mobile/image-header.jpg) no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  color: rgb(255, 255, 255);
}

.inner-container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

.heading-1 {
}

.body {
  opacity: 0.75;
  font-size: 15px;
  line-height: 25px;
  width: 90%;
}
.overline {
  color: rgba(255, 255, 255, 0.1);
  margin-bottom: 16px;
}

.hero-button {
  margin-top: 4px;
}
</style>