<template>
  <div class="field-container errr">
    <div class="top-row">
      <label for="" class="field-label"> {{ title }} </label>
      <span class="error-text">
        <span class="wrapper"> Wrong format </span>
      </span>
    </div>
    <input type="text" class="field-input" placeholder="Insert your name" />
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: ["title"],
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

  &:focus {
    border-color: var(--brown-200);
    outline: none;
  }
}
.field-container {
  .top-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 9px;
  }
  .field-label {
    font-weight: 700;
    font-size: 12px;
    display: inline-block;
    text-transform: capitalize;
  }

  .field-input {
    @mixin input-box;
    caret-color: var(--brown-200);
  }

  .error-text {
    font-size: 12px;
    font-weight: 700;
    overflow: hidden;
    color: var(--error);

    .wrapper {
      display: inline-block;
      transform: translateY(100%);
      transition: transform 0.2s;
    }
  }

  &.error {
    color: var(--error);
    .field-input {
      border-color: var(--error);
      caret-color: var(--error) !important;
    }

    .error-text {
      font-size: 12px;
      font-weight: 700;
      display: inline-block;

      .wrapper {
        transform: translateY(0%);
      }
    }
  }
}
</style>