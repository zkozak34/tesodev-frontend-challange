<template>
  <div class="result-view">
    <div class="container-fluid">
      <div class="top-bar">
        <router-link to="/"><img src="@/assets/images/logo.png" alt="logo" /></router-link>
        <div class="input-group">
          <input type="text" class="fs-18 fw-700" placeholder="Hyacinth Vincent" v-model="searchThing" />
          <button class="btn btn-primary fs-18 fw-700">Search</button>
        </div>
        <router-link to="/add" class="btn btn-primary fs-18 fw-700">Add new record</router-link>
      </div>
    </div>
    <div class="container" v-if="searchResult.length > 0">
      <div class="result-order-by" @click="orderByShow = !orderByShow">
        <a class="btn btn-secondary">
          <img src="@/assets/icons/sort.svg" alt="" />
          Order By
        </a>
      </div>
      <div class="result-list-container">
        <div class="result-list">
          <ResultListItemVue v-for="i in searchResult" :key="i" :resultItem="i" class="result-list__item" />
        </div>
        <ResultOrder v-if="orderByShow" :orderType="orderBy" />
      </div>
      <div class="pagination">
        <a
          class="btn-pagination btn-pagination-light btn-pagination-pre-next fs-14 fw-700"
          :class="[this.activePage == 1 ? 'btn-pagination-disable' : '']"
          @click="changePage(this.activePage - 1)"
          >Previous</a
        >
        <a
          class="btn-pagination btn-pagination-light fs-14 fw-700"
          v-for="i in this.page"
          :class="[i == this.activePage ? 'btn-pagination-active' : '']"
          :key="i"
          @click="activePage = i"
          >{{ i }}</a
        >
        <a
          class="btn-pagination btn-pagination-light btn-pagination-pre-next fs-14 fw-700"
          :class="[this.activePage == this.page ? 'btn-pagination-disable' : '']"
          @click="changePage(this.activePage + 1)"
          >Next</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import ResultListItemVue from "@/components/ResultList/ResultListItem.vue";
import ResultOrder from "@/components/ResultList/ResultOrder.vue";
import { mapGetters } from "vuex";
export default {
  components: { ResultListItemVue, ResultOrder },
  data() {
    return {
      searchThing: "",
      searchResult: [],
      page: 1,
      pageSize: 6,
      activePage: 1,
      orderByShow: false,
      orderType: "name-as",
    };
  },
  mounted() {
    this.searchThing = this.$route.params.keyword ?? "";
    this.$store.dispatch("fetchList");
  },
  computed: {
    ...mapGetters({
      allData: "getDataList",
    }),
  },
  methods: {
    filterData(keyword) {
      return this.allData.filter((c) => c.fullName.toLowerCase().includes(keyword.toLowerCase()));
    },
    sliceList(dataList) {
      let startItemIndex = (this.activePage - 1) * this.pageSize;
      return dataList.slice(startItemIndex, startItemIndex + this.pageSize);
    },
    orderBy(orderType) {
      this.orderType = orderType;
    },
    changePage(activePage) {
      if (activePage >= 1 && activePage <= this.page) {
        this.activePage = activePage;
      }
    },
  },
  watch: {
    searchThing() {
      if (this.searchThing.length >= 2) {
        let filterData = this.filterData(this.searchThing);
        this.page = Math.ceil(filterData.length / this.pageSize);
        this.searchResult = this.sliceList(filterData);
      } else {
        this.searchResult = [];
        this.activePage = 1;
      }
    },
    activePage() {
      this.searchResult = this.sliceList(this.filterData(this.searchThing));
    },
    orderType() {
      switch (this.orderType) {
        case "name-as":
          this.searchResult = this.filterData(this.searchThing).sort((a, b) => {
            let x = a.fullName.toUpperCase();
            let y = b.fullName.toUpperCase();
            return x == y ? 0 : x > y ? 1 : -1;
          });
          break;
        case "name-des":
          this.searchResult = this.filterData(this.searchThing).sort((a, b) => {
            let x = a.fullName.toUpperCase();
            let y = b.fullName.toUpperCase();
            return x == y ? 0 : x > y ? -1 : 1;
          });
          break;
        case "year-as":
          this.searchResult = this.filterData(this.searchThing).sort((a, b) => {
            let x = a.date.split("/")[2];
            let y = b.date.split("/")[2];
            return x == y ? 0 : x > y ? 1 : -1;
          });
          break;
        case "year-des":
          this.searchResult = this.filterData(this.searchThing).sort((a, b) => {
            let x = a.date.split("/")[2];
            let y = b.date.split("/")[2];
            return x == y ? 0 : x > y ? -1 : 1;
          });
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.result-view {
  height: 100vh;
  background: #fcfcfc;
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
  justify-content: right;
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
.result-list-container {
  display: flex;
  gap: 20px;
  .result-list {
    width: 80%;

    &__item {
      background: #fff;
      padding: 19px 27px;
      border-radius: 8px;
      margin: 10px 0;
      &:hover {
        background-color: rgba(#4f75c2, $alpha: 0.21);
      }
    }
  }
}
.pagination {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
