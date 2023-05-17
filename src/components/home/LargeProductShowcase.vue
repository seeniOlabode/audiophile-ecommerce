<template>
  <section class="large-product-showcase">
    <div class="zx9">
      <!-- <div class="background">
        <div class="background-inner"></div>
        <div class="background-inner"></div>
        <div class="background-inner"></div>
      </div> -->
      <div class="content">
        <div class="zx9-img">
          <img src="../../assets/home/mobile/image-speaker-zx9.png" alt="" />
        </div>
        <div class="copy">
          <h1 class="heading-1">
            ZX9 <br />
            Speaker
          </h1>
          <p class="body">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <action-button
            class="zx9-button"
            variant="secondary"
            text="see product"
          />
        </div>
      </div>
    </div>
    <div class="zx7">
      <div class="copy">
        <h4 class="heading-4">ZX7 Speaker</h4>
        <action-button variant="secondary" text="see product" />
      </div>
    </div>
    <div class="yx1">
      <div class="yx1-img"></div>
      <div class="copy">
        <h4 class="heading-4">YX1 EARPHONES</h4>
        <action-button
          class="yx1-button"
          variant="secondary"
          text="see product"
        />
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
.large-product-showcase {
  margin-top: 96px;
  display: grid;
  grid-template-columns: 1;
  row-gap: 24px;
}

.zx9 {
  width: 100%;
  background: var(--brown-200);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background-image: url(../../assets/home/desktop/pattern-circles.svg);
  background-position: 50% -50%;
  background-size: cover;
  background-repeat: no-repeat;

  .content {
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: white;
  }

  .background {
    position: absolute;
    right: 50%;
    top: 200px;
    width: 10px;
    z-index: 0;
  }

  .background-inner {
    width: 2000px;
    height: 2000px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    right: 0;
    border: solid 2px white;
    transform: translate(50%, -50%);

    /* animation: backgroundAnimation 4s infinite; */

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.35s;
    }
  }

  .zx9-img {
    width: 50%;
    overflow: hidden;
    position: relative;
    top: 75px;
    > img {
      width: 100%;
      object-fit: cover;
    }
  }

  .copy {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .heading-1 {
    text-align: inherit;
    line-height: 50px;
  }

  .body {
    text-align: inherit;
    max-width: 80%;
  }

  .zx9-button {
    background: black;
    color: white;
  }

  @keyframes backgroundAnimation {
    0% {
      transform: translate(50%, -50%) scale(0);
    }
    100% {
      transform: translate(50%, -50%) scale(1);
    }
  }
}

.zx7 {
  background-image: url(../../assets/home/desktop/image-speaker-zx7.jpg);
  height: 320px;
  border-radius: 8px;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 95px;
}

.yx1 {
  display: flex;
  flex-direction: row;
  row-gap: 24px;
  justify-content: space-between;
  gap: 30px;

  .yx1-img {
    background-image: url(../../assets/home/desktop/image-earphones-yx1.jpg);
    border-radius: 8px;
    background-size: cover;
    background-position: 50%;
    flex-basis: 45%;
    flex-grow: 1;
    height: 320px;
  }

  .copy {
    background: var(--gray-200);
    border-radius: 8px;
    padding: 42px;
    flex-basis: 45%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 320px;
  }

  .yx1-button {
    margin-top: 32px;
  }
}

@custom-media --xs-small-viewport (max-width: 600px);
@custom-media --small-viewport (max-width: 768px);
@custom-media --medium-viewport (max-width: 1024px);
@custom-media --large-viewport (max-width: 1300px);

.large-product-showcase {
  .zx9 {
    .content {
      justify-content: space-around;
    }
    .zx9-img {
      flex-basis: 40%;
      max-width: 400px;
    }
    .copy {
      flex-basis: 45%;
      text-align: left;
      align-items: start;
    }

    .heading-1 {
    }
  }
}

@media (--small-viewport) {
  .large-product-showcase {
    .zx9 {
      padding: 55px 0;
      .copy {
        flex-basis: 100%;
        text-align: center;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }

      .body {
        max-width: 300px;
        margin-top: 24px;
      }

      .zx9-button {
        margin-top: 40px;
      }

      .zx9-img {
        max-width: 172px;
        position: static;
      }
    }

    .zx7 {
      background-image: url(../../assets/home/tablet/image-speaker-zx7.jpg);
      height: 320px;
      border-radius: 8px;
      background-size: cover;
      display: flex;
      align-items: center;
      padding: 62px;
    }

    .yx1 {
      .yx1-img {
        background-image: url(../../assets/home/tablet/image-earphones-yx1.jpg);
      }
    }
  }
}

@media (--xs-small-viewport) {
  .large-product-showcase {
    .zx9 {
      .copy {
      }

      .body {
        max-width: 80%;
        margin-top: 0;
      }

      .zx9-button {
        margin-top: 0;
      }
    }

    .zx7 {
      background-image: url(../../assets/home/mobile/image-speaker-zx7.jpg);
      height: 320px;
      border-radius: 8px;
      background-size: cover;
      display: flex;
      align-items: center;
      padding: 24px;
    }

    .yx1 {
      flex-direction: column;

      .yx1-img {
        flex-basis: unset;
        background-image: url(../../assets/home/mobile/image-earphones-yx1.jpg);
      }

      .copy {
        flex-basis: unset;
        padding: 24px;
      }
    }
  }
}
</style>