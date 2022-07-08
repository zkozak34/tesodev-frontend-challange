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
        <CustomInput
          inputLabel="Name Surname"
          inputType="text"
          inputPlaceholder="Enter name and surname"
          inputName="fullName"
          @inputValue="getValue"
          :inputError="inputs.fullName.error"
        />
        <CustomInput
          inputLabel="Country"
          inputType="text"
          inputPlaceholder="Enter a country"
          inputName="country"
          @inputValue="getValue"
          :inputError="inputs.country.error"
        />
        <CustomInput
          inputLabel="City"
          inputType="text"
          inputPlaceholder="Enter a city"
          inputName="city"
          @inputValue="getValue"
          :inputError="inputs.city.error"
        />
        <CustomInput
          inputLabel="Email"
          inputType="email"
          inputPlaceholder="Enter a e-mail (abc@xyz.com)"
          inputName="email"
          @inputValue="getValue"
          :inputError="inputs.email.error"
        />
      </div>
      <div class="form-button">
        <button class="btn btn-primary" @click="saveChanges">Add</button>
      </div>
    </div>
    <div class="alert">
      <CustomAlertDialog dialogTitle="Error while adding link element" :dialogMessage="errors" dialogType="Error" />
    </div>
  </div>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";
import CustomAlertDialog from "@/components/CustomAlertDialog.vue";
export default {
  components: { CustomInput, CustomAlertDialog },
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
      errors: [],
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
      let validation = this.validateForm();
      if (validation.errors == 0) {
        this.$store.dispatch("insertList", validation.data);
        Object.keys(validation.data).forEach((key) => {
          if (Object.keys(this.inputs).includes(key)) {
            this.inputs[key].value = "";
            this.inputs[key].error = "";
            this.errors = [];
          }
        });
      } else {
        this.errors = [];
        Object.keys(validation.data).forEach((key) => {
          if (Object.keys(this.inputs).includes(key)) {
            this.errors.push(Object.values(this.inputs[key])[1]);
          }
        });
      }
    },
    validateForm() {
      const letters = /^[a-zA-Z\s]*$/;
      const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let date = new Date();
      let today = `${date.getDay().toString().padStart(2, "0")}/${date.getMonth().toString().padStart(2, "0")}/${date.getFullYear()}`;
      let inputValues = {
        fullName: this.inputs.fullName.value.trim(),
        company: this.inputs.country.value.trim(),
        email: this.inputs.email.value.trim(),
        date: today,
        country: this.inputs.country.value.trim(),
        city: this.inputs.city.value.trim(),
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

      let errors = 4;
      for (let key in this.inputs) {
        this.inputs[key].error == "" ? errors-- : "";
      }
      return { errors: errors, data: inputValues };
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
.alert {
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 55%;
}
</style>
