<template>
  <form class="checkout-form">
    <h4 class="heading-4">Checkout</h4>
    <div class="form-categories">
      <fieldset
        class="checkout-fieldset"
        v-for="category in formData"
        :key="category.name"
      >
        <h6 class="sub-title">{{ category.name }}</h6>
        <div class="fields">
          <div
            v-for="field in category.categoryData"
            :key="category.name + field.title"
            class="field"
          >
            <radio-group
              v-if="field.options"
              :singles="field.options"
              :title="field.title"
            />
            <text-field
              v-else
              :title="field.title"
              :placeholder="field.placeholder"
            />
          </div>
        </div>
      </fieldset>
    </div>
  </form>
</template>

<script>
import RadioGroup from "../shared/RadioGroup.vue";
import TextField from "../shared/TextField.vue";

export default {
  data() {
    return {
      formData: [
        {
          name: "Billing Details",
          categoryData: [
            {
              title: "Name",
              value: "",
              placeholder: "Alexei Ward",
              type: "text",
            },
            {
              title: "Email Address",
              value: "",
              placeholder: "alexei@gmail.com",
              type: "email",
            },
            {
              title: "Phone Number",
              value: "",
              placeholder: "234 706 133 1069",
              type: "number",
            },
          ],
        },
        {
          name: "Shipping Info",
          categoryData: [
            {
              title: "Your Address",
              value: "",
              placeholder: "1137 Williams Avenue",
              type: "text",
            },
            {
              title: "Zip Code",
              value: "",
              placeholder: "1001",
              type: "email",
            },
            {
              title: "City",
              value: "",
              placeholder: "New York",
              type: "number",
            },
            {
              title: "Country",
              value: "",
              placeholder: "United States",
              type: "number",
            },
          ],
        },

        {
          name: "Payment Details",
          categoryData: [
            {
              title: "Payment Method",
              options: ["e-Money", "Cash on Delivery"],
              value: "",
            },
            {
              title: "e-Money Number",
              value: "",
              placeholder: "238521993",
              type: "text",
            },
            {
              title: "e-Money Pin",
              value: "",
              placeholder: "6891",
              type: "text",
            },
          ],
        },
      ],
    };
  },
  components: {
    TextField,
    RadioGroup,
  },
};
</script>

<style scoped>
.checkout-form {
  background: white;
  margin-top: 24px;
  padding: 24px;
  border-radius: 8px;
}

.checkout-fieldset {
  border: none;

  &:not(:first-child) {
    margin-top: 32px;
  }
}

.fields {
  margin-top: 41px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>