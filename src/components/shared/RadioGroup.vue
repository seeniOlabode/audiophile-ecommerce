<template>
  <div class="radio-group-container">
    <label
      v-for="(sin, i) in singles"
      :key="sin.name + i + dataName"
      :for="sin.name + i"
      class="radio-group-member"
    >
      <span class="radio-span">
        <input
          :id="sin.name + i"
          type="radio"
          class="member-radio"
          v-model="paymentMethod"
          :value="sin.name"
        />
      </span>
      <label :for="sin.name + i" class="radio-group-member-label">{{
        sin.name
      }}</label>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentMethod: "",
      singles: [
        {
          name: "e-Money",
        },
        {
          name: "Cash",
        },
        {
          name: "Bank Transfer",
        },
      ],
    };
  },
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

  &:has(.member-radio:checked) {
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