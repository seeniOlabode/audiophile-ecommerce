<template>
  <button :class="variant">
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

    <span class="icon">
      <img
        class="misc-arrow-fill-up"
        src="../../assets/shared/desktop/icon-arrow-right.svg"
        alt=""
      />
      <span class="icon-wrapper">
        <img
          class="misc-arrow"
          src="../../assets/shared/desktop/icon-arrow-right.svg"
          alt=""
        />
        <img
          class="misc-arrow"
          src="../../assets/shared/desktop/icon-arrow-right.svg"
          alt=""
        />
      </span>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      required: true,
      default: "primary",
    },
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
@define-mixin outlinedButton {
  padding: 15px 20px;
  transition: border-radius 10s;
  min-width: 160px;
  border-radius: 0px;
  will-change: auto;

  &:hover {
    border-radius: 1000px;
  }

  .icon {
    display: none;
  }
}

button {
  font-family: "Manrope", sans-serif;
  position: relative;
  padding: 0;
  border: none;
  text-transform: uppercase;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;

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

button.primary {
  background-color: var(--brown-200);
  color: white;

  @mixin outlinedButton;
}

button.secondary {
  border: solid 1px;
  @mixin outlinedButton;
}

button.misc {
  color: rgba(0, 0, 0, 0.5);
  .icon {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin-left: 10px;

    .misc-arrow-fill-up {
      opacity: 0;
    }
    .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      transform: translateX(-50%);
      transition: transform 0.3s;
    }
  }
}

button:hover {
  /* background: var(--brown-100); */
  &.secondary {
    background: black;
    color: white;
  }

  &.misc {
    color: var(--brown-200);

    .icon {
      .icon-wrapper {
        transform: translateX(0%);
      }
    }
  }
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