<template>
  <header class="category-header">
    <h1 class="heading-1" ref="headingElement">Headphones</h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      lastScrollTop: 0,
    };
  },
  mounted() {
    const categoryElement = document.querySelector(".category-page");
    const documentElement = document.documentElement;

    window.addEventListener("scroll", (e) => {
      const scrollPos = documentElement.scrollTop;
      const mainHeaderHeight = Number(
        documentElement.style.getPropertyValue("--element-height").slice(0, -2)
      );
      if (scrollPos == 0 || scrollPos < this.lastScrollTop) {
        categoryElement.style.setProperty("--heading-element-height", "100px");
        categoryElement.style.setProperty("--heading-font-size", "40px");
      } else if (scrollPos > mainHeaderHeight / 2) {
        categoryElement.style.setProperty("--heading-element-height", "50px");
        categoryElement.style.setProperty("--heading-font-size", "15px");
      }
      this.lastScrollTop = scrollPos;
    });
  },
};
</script>

<style scoped>
.category-header {
  background: black;
  color: white;
  text-align: center;
  padding-top: var(--element-height);
  position: fixed;
  right: 0;
  left: 0;
  z-index: 5;
}

.heading-1 {
  transition: height 0.2s, font-size 0.1s;
  height: var(--heading-element-height);
  font-size: var(--heading-font-size);
  display: flex;
  top: 200px;
  align-items: center;
  justify-content: center;
  margin: 0;
}
</style>