<template>
  <header ref="siteHeader">
    <div class="inner-header inner-container">
      <img src="../assets/shared/desktop/logo.svg" alt="" class="logo" />
      <button class="mobile-menu-button" @click="menuOpen = !menuOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          id="custom-burger"
        >
          <rect
            class="custom-burger-stick"
            width="24"
            height="3"
            style="fill: rgb(255, 255, 255)"
          />
          <rect
            class="custom-burger-stick"
            width="24"
            height="3"
            y="9"
            style="fill: rgb(255, 255, 255)"
          />
          <rect
            class="custom-burger-stick"
            width="24"
            height="3"
            y="18"
            style="fill: rgb(255, 255, 255)"
          />
        </svg>
      </button>
      <nav class="site-main-nav" :class="{ open: menuOpen }">
        <div class="menu-wrapper-1">
          <div class="menu-wrapper-2">
            <site-link
              class="close-button"
              text="close"
              @click="menuOpen = false"
            />
            <site-link class="site-link" text="home" />
            <site-link class="site-link" text="headphones" />
            <site-link class="site-link" text="speakers" />
            <site-link class="site-link" text="earphones" />
          </div>
        </div>
      </nav>
      <button class="cart-button" @click="cartOpen = !cartOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
          id="cart-svg"
        >
          <path
            d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"
          ></path>
        </svg>
      </button>
      <site-cart :cartOpen="cartOpen" />
    </div>
  </header>
</template>

<script>
import SiteLink from "./shared/SiteLink.vue";
import SiteCart from "./shared/SiteCart.vue";

export default {
  components: {
    SiteLink,
    SiteCart,
  },
  data() {
    return {
      menuOpen: false,
      lastScrollTop: 0,
      cartOpen: false,
    };
  },
  mounted() {
    const headerElement = this.$refs.siteHeader;
    const headerInnerElement = headerElement.querySelector(".inner-header");
    const headerRect = headerInnerElement.getBoundingClientRect();
    const documentElement = document.documentElement;
    window.addEventListener("scroll", (e) => {
      const scrollPos = documentElement.scrollTop;
      const headerHeight = headerRect.height;
      if (scrollPos == 0) {
        headerInnerElement.style.setProperty("--element-height", "94px");
        headerElement.style.setProperty("--element-background", "none");
      } else if (scrollPos < this.lastScrollTop) {
        headerInnerElement.style.setProperty("--element-height", "94px");
      } else if (scrollPos > headerHeight) {
        headerInnerElement.style.setProperty("--element-height", "50px");
        headerElement.style.setProperty("--element-background", "black");
      }
      this.lastScrollTop = scrollPos;
    });
  },
};
</script>

<style scoped>
#custom-burger {
  .custom-burger-stick {
    transition: transform 0.2s;
  }
  .custom-burger-stick:nth-child(2) {
    transform: translate(-30%);
  }

  .custom-burger-stick:nth-child(3) {
    transform: translate(-60%);
  }
}

.mobile-menu-button:hover {
  #custom-burger {
    .custom-burger-stick {
      transform: translate(0);
    }
  }
}

.cart-button {
  #cart-svg {
    transition: transform 0.2s;
    transform-origin: 0% 30%;
  }
}

.cart-button:hover {
  #cart-svg {
    transform: rotate(10deg);
  }
}
@custom-media --small-viewport (max-width: 768px);
@custom-media --xs-small-viewport (max-width: 600px);

header {
  /* background: #000000; */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
  background: var(--element-background);
  color: white;
}

.inner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  --element-height: 94px;
  --element-background: none;
  height: var(--element-height);
  transition: height 0.5s;
  background: var(--element-background);
}

.mobile-menu-button {
  background: none;
  outline: none;
  border: none;
  display: none;
}

.site-main-nav {
  .menu-wrapper-1 {
    height: 100%;
  }
  .menu-wrapper-2 {
    display: flex;
    gap: 34px;
    height: 100%;
  }

  .close-button {
    display: none;
  }
}
.cart-button {
  background: none;
  outline: none;
  border: none;
}

/*  */

@media (--xs-small-viewport) {
  header {
    > div.inner-header {
      justify-content: space-between;

      .cart-button {
        margin-left: initial;
      }
    }
  }
}

@media (--small-viewport) {
  header {
    .inner-header {
      justify-content: start;
      gap: 42px;
      padding: 0 24px;

      .cart-button {
        margin-left: auto;
      }
    }
  }
  header {
    .inner-header {
      .logo {
        width: 132px;
      }
    }
  }

  button.mobile-menu-button {
    display: inline-block;
    order: -1;
  }
  nav.site-main-nav {
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    flex-direction: column;
    z-index: 10;
    transform: translate(-100%);
    transition: transform 0.5s, opacity 0.5s;
    opacity: 0;

    .menu-wrapper-1 {
      overflow: hidden;
      background: black;
    }

    .menu-wrapper-2 {
      justify-content: center;
      flex-direction: column;
      transform: translateX(100%);
      transition: transform 0.5s;
    }

    .site-link {
      letter-spacing: 10px;
      font-size: 15px;
    }

    &.open {
      transform: translateX(0);
      opacity: 1;

      .close-button {
        display: inline-block;
        position: absolute;
        top: 50px;
        left: 50px;
      }

      .menu-wrapper-2 {
        transform: translateX(0);
      }
    }
  }
  /* 
  @keyframes wrapperOneSlideIn {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes wrapperTwoSlideIn {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  } */
}
</style>
