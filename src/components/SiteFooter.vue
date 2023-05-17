<template>
  <footer>
    <div class="inner-container">
      <div class="orange-line"></div>
      <div class="logo-nav">
        <img src="../assets/shared/desktop/logo.svg" alt="" />
        <nav class="footer-nav">
          <site-link text="home" />
          <site-link text="headphones" />
          <site-link text="speakers" />
          <site-link text="earphones" />
        </nav>
      </div>

      <p class="body footer-copy">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div class="rights-contact">
        <p class="body footer-copyrights">
          Copyright 2021. All Rights Reserved
        </p>

        <div class="contact-links">
          <a class="footer-contact-link" href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
            >
              <path
                d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
              ></path>
            </svg>
          </a>

          <a class="footer-contact-link" href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
            >
              <path
                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
              ></path>
            </svg>
          </a>

          <a class="footer-contact-link" href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
            >
              <path
                d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"
              ></path>
              <circle cx="11.994" cy="11.979" r="3.003"></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SiteLink from "./shared/SiteLink.vue";

export default {
  components: {
    SiteLink,
  },
};
</script>

<style scoped>
@custom-media --mobile (max-width: 600px);
@custom-media --mobile-tablet (max-width: 768px);
@custom-media --tablet-pc (max-width: 1024px);
@custom-media --pc (max-width: 1300px);

footer {
  background: var(--dark-200);
  color: white;
  position: relative;
  /* &::before {
    content: " ";
    height: 4px;
    width: 110px;
    background-color: var(--brown-200);
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    display: block;
  } */
}

.orange-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  display: flex;

  &::before {
    content: " ";
    height: 4px;
    width: 110px;
    background-color: var(--brown-200);
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}

.inner-container {
  padding-top: 52px;
  padding-bottom: 52px;
}

.logo-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-nav {
  display: flex;
  gap: 16px;
  margin-top: 0;
}

.footer-copy {
  margin-top: 0;
  opacity: 0.5;
}

.rights-contact {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
}

.footer-copyrights {
  opacity: 0.5;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.contact-links .footer-contact-link {
  transition: transform 0.2s;
}

.contact-links .footer-contact-link:hover {
  transform: rotate(-30deg);
}

.logo-nav {
  display: block;
}
.footer-nav {
  margin-top: 32px;
}
.inner-container {
  text-align: left;
  position: relative;
}
.footer-copy {
  margin-top: 32px;
}

@media (--pc) {
  .footer-nav {
  }
}

@media (--tablet-pc) {
}
@media (--mobile-tablet) {
  footer {
  }

  .footer-nav {
    align-items: center;
    flex-direction: row;
    margin-top: 48px;
  }

  .footer-copy {
    margin-top: 48px;
  }
  .orange-line {
    justify-content: start;
  }
}

@media (--mobile) {
  .rights-contact {
    display: block;
  }

  .inner-container {
    text-align: center;
  }

  .footer-nav {
    flex-direction: column;
    margin-top: 48px;
  }

  .orange-line {
    justify-content: center;
  }
}
</style>