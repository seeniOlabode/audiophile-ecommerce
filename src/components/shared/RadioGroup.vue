<template>
  <div class="radio-group-container">
    <label for="" class="field-label"> {{ title }} </label>
    <label
      v-for="(sin, i) in singles"
      :key="sin + i + dataName"
      :for="(sin + i).replace(/ /g, '')"
      class="radio-group-member"
      :class="{ checked: sin == selected }"
    >
      <span class="radio-span">
        <input
          :id="(sin + i).replace(/ /g, '')"
          type="radio"
          class="member-radio"
          v-model="paymentMethod"
          :value="sin"
          @click="selected = sin"
        />
      </span>
      <label
        :for="(sin + i).replace(/ /g, '')"
        class="radio-group-member-label"
        >{{ sin }}</label
      >
    </label>
  </div>
</template>

<script>
export default {
  props: {
    singles: {
      type: Array,
      required: true,
      default: ["e-Money", "Cash", "Bank Transfer"],
    },
    title: {
      type: String,
      required: true,
      default: "List",
    },
  },
  data() {
    return {
      paymentMethod: "",
      selected: "",
    };
  },
  computed: {},
};
</script>

<style scoped>
@define-mixin input-box {
  border: solid 1px #cfcfcf;
  border-radius: 8px;
  width: 309px;
  padding: 18px 24px;
  font-size: 14px;
  font-weight: 500;
}

.field-label {
  font-weight: 700;
  font-size: 12px;
  display: inline-block;
  text-transform: capitalize;
}

.radio-group-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.radio-group-member {
  @mixin input-box;
  display: flex;
  align-items: center;
  cursor: pointer;

  * {
    cursor: pointer;
  }

  .radio-span {
    display: inline-block;
    position: relative;
    border-radius: 100%;
    border: solid 1px #cfcfcf;
    aspect-ratio: 1/1;
    .member-radio {
      opacity: 0;
    }

    &::before {
      position: absolute;
      left: 5px;
      bottom: 5px;
      right: 5px;
      top: 5px;
      content: " ";
      background-color: var(--brown-200);
      border-radius: 100%;
      aspect-ratio: 1/1;
      transform: scale(0);
      transition: transform 0.2s;
    }
  }

  &.checked {
    border-color: var(--brown-200);
    outline: none;

    .radio-span {
      &::before {
        transform: scale(1);
      }
    }
  }

  &:hover {
    border-color: var(--brown-200);
  }

  .radio-group-member-label {
    margin-left: 16px;
    font-weight: 700;
  }
}
</style>