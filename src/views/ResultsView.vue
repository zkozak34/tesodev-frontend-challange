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
      <div class="result-order-by" @click="orderSection.orderByShow = !orderSection.orderByShow">
        <a class="btn btn-secondary">
          <img src="@/assets/icons/sort.svg" alt="" />
          Order By
        </a>
      </div>
      <div class="result-list-container">
        <div class="result-list">
          <ResultListItemVue v-for="i in allData" :key="i" :resultItem="i" class="result-list__item" />
        </div>
        <ResultOrder v-if="orderSection.orderByShow" :orderType="orderBy" />
      </div>
      <div class="pagination">
        <a
          class="btn-pagination btn-pagination-light btn-pagination-pre-next fs-14 fw-700"
          :class="[this.pagination.activePage == 1 ? 'btn-pagination-disable' : '']"
          @click="changePage(this.pagination.activePage - 1)"
          >Previous</a
        >
        <a
          class="btn-pagination btn-pagination-light fs-14 fw-700"
          v-for="i in this.pagination.page"
          :class="[i == this.pagination.activePage ? 'btn-pagination-active' : '']"
          :key="i"
          @click="changePage(i)"
          >{{ i }}</a
        >
        <a
          class="btn-pagination btn-pagination-light btn-pagination-pre-next fs-14 fw-700"
          :class="[this.pagination.activePage == this.pagination.page ? 'btn-pagination-disable' : '']"
          @click="changePage(this.pagination.activePage + 1)"
          >Next</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { searchList } from "@/mixins/helperMixins";
import ResultListItemVue from "@/components/ResultList/ResultListItem.vue";
import ResultOrder from "@/components/ResultList/ResultOrder.vue";
export default {
  components: { ResultListItemVue, ResultOrder },
  data() {
    return {
      searchThing: "",
      allData: [],
      pagination: {
        page: 1,
        pageSize: 6,
        activePage: 1,
      },
      orderSection: {
        orderByShow: false,
        orderType: "name-as",
      },
    };
  },
  mounted() {
    this.searchThing = this.$route.params.keyword ?? "";
    this.getAllData();
  },
  methods: {
    async getAllData() {
      if (this.searchThing.length >= 2) {
        let response = [];
        switch (this.orderSection.orderType) {
          case "name-as":
            response = searchList(this.searchThing).sort((a, b) => {
              let x = a[0].toUpperCase();
              let y = b[0].toUpperCase();
              return x == y ? 0 : x > y ? 1 : -1;
            });
            break;
          case "name-des":
            response = searchList(this.searchThing).sort((a, b) => {
              let x = a[0].toUpperCase();
              let y = b[0].toUpperCase();
              return x == y ? 0 : x > y ? -1 : 1;
            });
            break;
          case "year-as":
            response = searchList(this.searchThing).sort((a, b) => {
              let x = a[3].split("/")[2];
              let y = b[3].split("/")[2];
              return x == y ? 0 : x > y ? 1 : -1;
            });
            break;
          case "year-des":
            response = searchList(this.searchThing).sort((a, b) => {
              let x = a[3].split("/")[2];
              let y = b[3].split("/")[2];
              return x == y ? 0 : x > y ? -1 : 1;
            });
            break;
          default:
            break;
        }
        this.pagination.page = Math.ceil(response.length / this.pagination.pageSize);
        this.allData = response.splice((this.pagination.activePage - 1) * this.pagination.pageSize, this.pagination.pageSize);
      }
    },
    async changePage(activePage) {
      if (activePage >= 1 && activePage <= this.pagination.page) {
        this.pagination.activePage = activePage;
        await this.getAllData();
      }
    },
    orderBy(orderType) {
      this.orderSection.orderType = orderType;
      this.getAllData();
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
