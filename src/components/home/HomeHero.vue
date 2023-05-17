<template>
  <section class="home-hero">
    <div class="inner-container">
      <p class="overline">New Product</p>
      <h1 class="heading-1">
        XX99 Mark II<br />
        HeadphoneS
      </h1>
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
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  color: rgb(255, 255, 255);
  background: url(../../assets/home/desktop/image-hero.jpg);
  background-size: cover;
  background-position: 50%;
}

.inner-container {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  justify-content: start;
  text-align: left;
  align-items: start;
}

.heading-1 {
}

.body {
  opacity: 0.75;
  font-size: 15px;
  line-height: 25px;
  max-width: 400px;
}
.overline {
  color: rgba(255, 255, 255, 0.1);
  margin-bottom: 16px;
}

.hero-button {
  margin-top: 4px;
}

@custom-media --small-viewport (max-width: 768px);
@custom-media --xs-small-viewport (max-width: 600px);
@custom-media --medium-viewport (max-width: 1024px);
@custom-media --large-viewport (max-width: 1300px);

@media (--large-viewport) {
  .home-hero {
    background: url(../../assets/home/tablet/image-header.jpg);
    background-position: 50% 50%;
    background-size: cover;
  }

  .inner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }

  .body {
    max-width: 400px;
  }
}

@media (--medium-viewport) {
  .home-hero {
    background: url(../../assets/home/tablet/image-header.jpg);
    background-position: 50% 50%;
    background-size: cover;
  }

  .heading-1 {
    max-width: 600px;
  }
}

@media (--small-viewport) {
  .home-hero {
    background: url(../../assets/home/mobile/image-header.jpg);
    background-position: 50% 50%;
    background-size: cover;
  }
}
</style>