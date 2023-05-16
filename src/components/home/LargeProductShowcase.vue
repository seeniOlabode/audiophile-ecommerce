<template>
  <section class="large-product-showcase">
    <div class="zx9">
      <div class="focal-point">
        <img
          class="focal-point-img"
          src="../../assets/home/desktop/image-speaker-zx9.png"
          alt=""
        />
      </div>
      <div class="copy">
        <h1 class="heading-1">ZX9 SPEAKER</h1>
        <p class="body">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <action-button variant="secondary" text="see product" />
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
};
</script>

<style scoped>
@define-mixin showcaseBox {
  border-radius: 8px;
}
.large-product-showcase {
  margin-top: 168px;
  display: grid;
  grid-template-rows: 560px 320px 320px;

  .zx9 {
    background-color: var(--brown-200);
    background-image: url(../../assets/home/desktop/pattern-circles.svg);
    background-repeat: no-repeat;
    color: white;

    @mixin showcaseBox;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr;

    .focal-point {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: end;
      overflow: hidden;

      .focal-point-img {
        width: 100%;
        object-fit: contain;
        max-width: 420px;
        position: relative;
        left: 80px;
        top: 15px;
      }
    }

    .copy {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      padding-right: 95px;

      > button {
        background: black;
        color: white;
      }
    }
  }
}
</style>