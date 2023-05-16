<template>
  <a>
    <span class="text-outer-wrapper">
      <span class="text-wrapper">
        <span class="text-inner">
          <span
            class="text-word"
            v-for="(word, i) in textWords"
            :key="word + i"
          >
            <span
              class="text-char"
              v-for="(char, j) in textWords[i]"
              :key="char + j + i"
              :style="{ '--char-delay': j * 0.05 + 's' }"
            >
              {{ char }}
            </span>
          </span>
        </span>
        <span class="text-inner">
          <span
            class="text-word"
            v-for="(word, i) in textWords"
            :key="word + i"
          >
            <span
              class="text-char"
              v-for="(char, j) in textWords[i]"
              :key="char + j + i"
              :style="{ '--char-delay': j * 0.05 + 's' }"
            >
              {{ char }}
            </span>
          </span>
        </span>
      </span>
    </span>
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
  computed: {
    textWords() {
      let words = this.text.split(" ");
      let chars = [];
      words.forEach((word) => {
        chars.push(word.split(""));
      });
      return chars;
    },
  },
};
</script>

<style scoped>
a {
  font-family: "Manrope", sans-serif;
  position: relative;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 2px;

  .text-outer-wrapper {
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    left: 0;
    right: 0;
    top: 0;

    .text-inner {
      overflow: hidden;
      .text-word {
        display: inline-block;
      }
      .text-char {
        display: inline-block;
        transition: transform 0.2s;

        transition-delay: var(--char-delay);
      }

      .text-word:not(:first-child) {
        margin-left: 3.5px;
      }
    }

    .text-inner:nth-child(1) {
      .text-char {
        transform: translateY(0%);
      }
    }

    .text-inner:nth-child(2) {
      position: absolute;

      .text-char {
        transform: translateY(100%);
      }
    }
  }
}

a:hover {
  .text-inner:nth-child(1) {
    .text-char {
      transform: translateY(-100%);
    }
  }

  .text-inner:nth-child(2) {
    .text-char {
      transform: translateY(0%);
    }
  }
}
</style>