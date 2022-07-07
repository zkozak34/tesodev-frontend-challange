<template>
  <ul id="order-by">
    <li @click="selectedOrderType = 'name-as'" :class="[selectedOrderType == 'name-as' ? 'selected' : '']">
      <a href="#" class="fs-14 fw-700">Name ascending</a>
    </li>
    <li @click="selectedOrderType = 'name-des'" :class="[selectedOrderType == 'name-des' ? 'selected' : '']">
      <a href="#" class="fs-14 fw-700">Name descending</a>
    </li>
    <li @click="selectedOrderType = 'year-as'" :class="[selectedOrderType == 'year-as' ? 'selected' : '']">
      <a href="#" class="fs-14 fw-700">Year ascending</a>
    </li>
    <li @click="selectedOrderType = 'year-des'" :class="[selectedOrderType == 'year-des' ? 'selected' : '']">
      <a href="#" class="fs-14 fw-700">Year descending</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["orderType"],
  data() {
    return {
      selectedOrderType: "name-as",
    };
  },
  // methods: {
  //   changeOrderType(orderType) {
  //     this.selectedOrderType = orderType;
  //     this.orderType(orderType);
  //   },
  // },
  watch: {
    selectedOrderType() {
      this.orderType(this.selectedOrderType);
    },
  },
};
</script>

<style lang="scss">
#order-by {
  background: #ffffff;
  border: 1px solid #8f8f8f;
  box-shadow: 4px 6px 12px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  height: fit-content;
  width: 18%;
  padding: 10px 8px;

  li {
    padding: 5px 9px;
  }

  .selected {
    background: #b3b3b3;
    border-radius: 8px;

    a {
      color: #fff;
    }
  }
}
</style>
