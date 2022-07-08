<template>
  <div class="result-list__item">
    <img src="@/assets/icons/location.svg" alt="" />
    <div class="result-list__item_content-right">
      <p class="fs-16 fw-400">{{ resultItem.country }}</p>
      <p class="fs-14 fw-400">{{ resultItem.city }}</p>
    </div>
    <div class="result-list__item_content-left">
      <p class="fs-16 fw-400">{{ resultItem.fullName }}</p>
      <p class="fs-14 fw-400">{{ resultItem.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["resultItem"],
};
</script>

<style lang="scss">
.result-list__item {
  display: flex;
  align-items: center;
  gap: 12px;

  &_content-right {
    width: 75%;
    p:last-child {
      color: #72777a;
      margin-top: 4px;
    }
  }
  &_content-left {
    width: 25%;
    text-align: end;
    p:first-child {
      color: #72777a;
      margin-bottom: 4px;
    }
  }
}
</style>
