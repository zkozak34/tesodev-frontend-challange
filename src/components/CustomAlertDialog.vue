<template>
  <div class="alert alert-dialog" v-if="dialog">
    <span class="alert-close-btn"><img src="@/assets/icons/close.svg" alt="" /></span>
    <h3 class="alert-title fs-14 fw-700">{{ dialogTitle }}</h3>
    <p class="alert-content fs-13 fw-400" v-for="(i, index) in dialogMessage" :key="index">{{ i }}</p>
    <span class="alert-type fs-16 fw-500" @click="dialog = false">{{ dialogType }} </span>
  </div>
</template>

<script>
export default {
  props: ["dialogTitle", "dialogMessage", "dialogType"],
  data() {
    return {
      dialog: false,
    };
  },
  watch: {
    dialogMessage(newValue, oldValue) {
      if (newValue != oldValue && newValue.length > 0) {
        this.dialog = true;
      } else {
        this.dialog = false;
      }
    },
  },
};
</script>

<style lang="scss">
.alert {
  position: relative;
  &-dialog {
    background: #c4c4c4c4;
    width: 25%;
    padding: 10px 18px;
    border-radius: 8px;
    margin-left: auto;
    position: relative;

    .alert-close-btn {
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }

    .alert-title {
      margin-top: 20px;
    }

    .alert-content {
      max-width: 80%;
      width: 70%;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .alert-type {
      position: absolute;
      right: 15%;
      top: 30%;
      background: #ff4e78;
      padding: 8px 16px;
      color: #fff;
      border-radius: 48px;
      cursor: pointer;
    }
  }

  .disable {
    display: none;
  }
}
</style>
