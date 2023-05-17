<template>
  <section class="small-details inner-container">
    <div class="focal"></div>
    <div class="copy">
      <h4 class="heading-4">
        Bringing you the <span class="orange">best</span> audio gear
      </h4>
      <p class="body">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@custom-media --mobile (max-width: 768px);
@custom-media --mobile-tablet (max-width: 600px);
@custom-media --tablet-pc (max-width: 1024px);
@custom-media --pc (max-width: 1300px);

.inner-container {
  display: flex;
  gap: 125px;
  > * {
    flex-basis: 45%;
    flex-grow: 1;
  }

  .copy {
    text-align: left;
  }

  .focal {
    order: 1;
  }
}

.focal {
  background-image: url(../../assets/shared/desktop/image-best-gear.jpg);
  background-size: cover;
  height: 588px;
  width: 100%;
  border-radius: 8px;
}

.copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.copy .heading-4 {
  color: black;
  text-align: inherit;
}

.copy .body {
  text-align: inherit;
  opacity: 0.5;
}

.orange {
  color: var(--brown-200);
}
@media (--pc) {
}

@media (--tablet-pc) {
  .inner-container {
    display: block;
  }
  .focal {
    background-image: url(../../assets/shared/tablet/image-best-gear.jpg);
    background-position: 50%;
    height: 300px;
  }
  .copy {
    margin-top: 40px;
    text-align: center;
    display: block;
  }
}

@media (--mobile) {
  .focal {
    background-image: url(../../assets/shared/mobile/image-best-gear.jpg);
    background-size: cover;
    background-position: 50% 20%;
  }
}
</style>