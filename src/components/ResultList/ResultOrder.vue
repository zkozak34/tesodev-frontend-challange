<template>
  <ul id="order-by">
    <li><a href="#" class="fs-14 fw-700">Name ascending</a></li>
    <li><a href="#" class="fs-14 fw-700">Name descending</a></li>
    <li><a href="#" class="fs-14 fw-700">Year ascending</a></li>
    <li class="selected"><a href="#" class="fs-14 fw-700">Year descending</a></li>
  </ul>
</template>

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
