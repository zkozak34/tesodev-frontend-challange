<template>
  <div id="add-view">
    <div class="container-fluid">
      <div class="top-bar">
        <router-link to="/"><img src="@/assets/images/logo.png" alt="logo" /></router-link>
        <div class="top-bar__go-back">
          <router-link to="/results">
            <img src="@/assets/icons/go-back.svg" alt="" />
            <p class="fs-24 fw-700">Return to List Page</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="form-container">
      <div class="input-container">
        <CustomInputVue
          inputLabel="Name Surname"
          inputType="text"
          inputPlaceholder="Enter name and surname"
          @inputValue="getValue"
          inputName="fullName"
          :inputError="inputs.fullName.error"
        />
        <CustomInputVue
          inputLabel="Country"
          inputType="text"
          inputPlaceholder="Enter a country"
          @inputValue="getValue"
          inputName="country"
          :inputError="inputs.country.error"
        />
        <CustomInputVue
          inputLabel="City"
          inputType="text"
          inputPlaceholder="Enter a city"
          @inputValue="getValue"
          inputName="city"
          :inputError="inputs.city.error"
        />
        <CustomInputVue
          inputLabel="Email"
          inputType="email"
          inputPlaceholder="Enter a e-mail (abc@xyz.com)"
          @inputValue="getValue"
          inputName="email"
          :inputError="inputs.email.error"
        />
      </div>
      <div class="form-button">
        <button class="btn btn-primary" @click="saveChanges">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInputVue from "@/components/CustomInput.vue";
import { addNew } from "@/mixins/helperMixins";
export default {
  components: { CustomInputVue },
  data() {
    return {
      inputs: {
        fullName: {
          value: "",
          error: "",
        },
        country: {
          value: "",
          error: "",
        },
        city: {
          value: "",
          error: "",
        },
        email: {
          value: "",
          error: "",
        },
      },
      formValid: false,
    };
  },
  methods: {
    getValue(value) {
      switch (value.inputName) {
        case "fullName":
          this.inputs.fullName.value = value.inputValue;
          break;
        case "country":
          this.inputs.country.value = value.inputValue;
          break;
        case "city":
          this.inputs.city.value = value.inputValue;
          break;
        case "email":
          this.inputs.email.value = value.inputValue;
          break;
        default:
          break;
      }
    },
    saveChanges() {
      const letters = /^[A-Za-z]+$/;
      const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let inputValues = {
        fullName: this.inputs.fullName.value,
        country: this.inputs.country.value,
        city: this.inputs.city.value,
        email: this.inputs.email.value,
      };
      if (!inputValues.fullName.match(letters)) {
        this.inputs.fullName.error = "Name and surname should contain only letters.";
      } else if (inputValues.fullName.length < 2 || inputValues.fullName.length > 60) {
        this.inputs.fullName.error = "Name and surname should contain at least 2 letters and at most 60 letters.";
      } else {
        this.inputs.fullName.error = "";
      }
      if (!inputValues.country.match(letters)) {
        this.inputs.country.error = "Country should contain only letters.";
      } else if (inputValues.country.length < 2 || inputValues.country.length > 40) {
        this.inputs.country.error = "Country should contain at least 2 letters and at most 60 letters.";
      } else {
        this.inputs.country.error = "";
      }
      if (!inputValues.city.match(letters)) {
        this.inputs.city.error = "City should contain only letters.";
      } else if (inputValues.city.length < 2 || inputValues.city.length > 40) {
        this.inputs.city.error = "City should contain at least 2 letters and at most 60 letters.";
      } else {
        this.inputs.city.error = "";
      }
      if (!inputValues.email.match(email)) {
        this.inputs.email.error = "A valid e-mail address was not entered.";
      } else {
        this.inputs.email.error = "";
      }
      this.errorCheck();
      if (this.formValid) {
        addNew(inputValues);
      }
    },
    errorCheck() {
      if (this.inputs.fullName.error == "" && this.inputs.country.error == "" && this.inputs.city.error == "" && this.inputs.email.error == "") {
        this.formValid = true;
      }
    },
  },
};
</script>

<style lang="scss">
#add-view {
  background-color: #fcfcfc;
  height: 100vh;
  padding-top: 30px;
}

.top-bar {
  margin-left: 40px;
  display: flex;
  align-items: center;
  gap: 39px;

  &__go-back {
    a {
      display: flex;
      align-items: center;
      gap: 12px;
      img {
        width: 26px;
        height: 26px;
      }
    }
  }
}

.form-container {
  max-width: 50%;
  margin-left: 10%;
}

.input-container {
  margin: 35px 0;
}
.form-button {
  display: flex;
  justify-content: right;
}
</style>
