<template>
  <div class="result-view">
    <div class="container-fluid">
      <div class="top-bar">
        <router-link to="/"><img src="@/assets/images/logo.png" alt="logo" /></router-link>
        <div class="input-group">
          <input type="text" class="fs-18 fw-700" placeholder="Hyacinth Vincent" v-model="searchThing" />
          <button class="btn btn-primary fs-18 fw-700">Search</button>
        </div>
        <button class="btn btn-primary fs-18 fw-700">Add new record</button>
      </div>
    </div>
    <div class="container" v-if="allData.length > 0">
      <div class="result-order-by" @click="orderByShow = !orderByShow">
        <a class="btn btn-secondary">
          <img src="@/assets/icons/sort.svg" alt="" />
          Order By
        </a>
      </div>
      <div class="result-list">
        <div class="result-list-wrap">
          <ResultListItemVue v-for="i in allData" :key="i" :resultItem="i" class="result-list-wrap__item" />
        </div>
        <ResultOrder v-if="orderByShow" />
      </div>
    </div>
  </div>
</template>

<script>
import { getList } from "@/mixins/helperMixins";
import ResultListItemVue from "@/components/ResultList/ResultListItem.vue";
import ResultOrder from "@/components/ResultList/ResultOrder.vue";
export default {
  components: { ResultListItemVue, ResultOrder },
  data() {
    return {
      searchThing: "",
      allData: [],
      orderByShow: false,
    };
  },
  mounted() {
    this.searchThing = this.$route.params.keyword ?? "";
    this.getAllData();
  },
  methods: {
    async getAllData() {
      if (this.searchThing.length >= 2) {
        let response = await getList();
        this.allData = response.dataList.filter((c) => c[0].toLowerCase().includes(this.searchThing.toLowerCase()));
      }
    },
  },
  watch: {
    searchThing() {
      if (this.searchThing != "" && this.searchThing.length >= 2) {
        this.getAllData();
      } else {
        this.allData = [];
      }
    },
  },
};
</script>

<style scoped lang="scss">
.result-view {
  background: #fcfcfc;
  height: 100vh;
}
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 27px 37px 0 37px;

  img {
    height: 63px;
  }

  .input-group {
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
    input {
      width: 100%;
      border-radius: 8px;
      padding: 14px 20px;
      color: #484848;
    }
  }

  .button {
    flex-basis: 25%;
  }
}
.result-order-by {
  margin: 50px 0 10px auto;
  display: flex;
  justify-content: end;
  a {
    display: flex;
    align-items: center;
    width: fit-content;
    gap: 10px;
    img {
      width: 24px;
      height: 24px;
    }
  }
}
.result-list {
  display: flex;
  gap: 20px;
  .result-list-wrap {
    width: 80%;

    &__item {
      background: #fff;
      padding: 19px 27px;
      border-radius: 8px;
    }
  }
}
</style>
