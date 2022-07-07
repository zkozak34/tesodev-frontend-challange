<template>
  <div class="input-wrap" :class="[this.inputError != '' ? 'error' : '']">
    <label id="inputName" class="fs-18 fw-700">{{ inputLabel }}</label>
    <input :type="inputType" :placeholder="inputPlaceholder" class="fs-18 fw-700" v-model="inputValue" />
    <label id="errorMessage" class="ft-1">{{ inputError }}</label>
  </div>
</template>

<script>
export default {
  props: ["inputLabel", "inputType", "inputPlaceholder", "inputName", "inputError"],
  data() {
    return {
      errorMessage: "",
      inputValue: "",
    };
  },
  watch: {
    inputValue(newValue, oldValue) {
      if (newValue != oldValue) {
        this.errorMessage = "";
        this.$emit("inputValue", { inputName: this.inputName, inputValue: newValue });
      }
    },
    inputError(newValue, oldValue) {
      if (newValue != oldValue) this.errorMessage = newValue;
    },
  },
};
</script>

<style lang="scss">
.input-wrap {
  display: flex;
  flex-direction: column;
  text-align: start;
  margin: 40px 0;

  #inputName {
    color: $label-color;
    margin: 7px;
  }

  input {
    height: 46px;
    border-radius: 8px;
    border: 2px solid $border-color;
    padding: 10px 17px;

    &:focus {
      outline: none;
      background-color: rgba($label-color, 0.08);
      border-color: rgba($border-color, 0.6);
    }
    &::placeholder {
      opacity: 0.5;
    }
  }

  #errorMessage {
    display: none;
  }
}

.error {
  #inputName {
    color: $error-color;
  }

  input {
    border-color: $error-color;

    &::placeholder {
      color: $error-color;
    }
  }

  #errorMessage {
    display: inline-block;
    color: $error-color;
    margin: 10px 0 0 7px;
  }
}
</style>
