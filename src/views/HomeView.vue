<template>
  <main class="container">
    <section class="top-bar">
      <router-link to="/add" class="btn btn-primary fs-18 fw-700">Add new record</router-link>
    </section>
    <section class="logo-wrap">
      <img src="@/assets/images/logo.png" alt="" />
      <span class="fs-14 fw-700">Search app</span>
    </section>
    <section class="search-container">
      <h1 class="fs-32 fw-700">Find in records</h1>
      <div class="search-container__search_wrap">
        <div class="search-input">
          <img src="@/assets/icons/search.svg" alt="" />
          <input type="text" placeholder="Hyacinth Vincent" class="fs-16 fw-400" v-model="searchThing" />
        </div>
        <router-link to="/results" class="btn btn-primary">Search</router-link>
      </div>
      <div class="search-container__result_wrap" v-if="searchResults.length > 0">
        <div class="result-list">
          <ResultListItemVue v-for="i in searchResults" :key="i" :resultItem="i" class="result-list__item" />
        </div>
        <router-link :to="{ name: 'results-with-params', params: { keyword: searchThing } }" class="fs-16 fw-700">Show more...</router-link>
      </div>
    </section>
    <section class="news-container">
      <h1 class="fs-32 fw-700">Top News</h1>
      <div class="news-container__news_wrap">
        <a href="#"><img src="@/assets/icons/left-arrow.svg" alt="" /></a>
        <div class="news-list">
          <div class="news-list__item">
            <img src="@/assets/images/news.png" alt="" />
            <p class="news-title fs-16 fw-700">A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</p>
            <p class="news-information fs-12 fw-400">1h ago &bull; by Troy Corlson</p>
          </div>
          <div class="news-list__item">
            <img src="@/assets/images/news.png" alt="" />
            <p class="news-title fs-16 fw-700">A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</p>
            <p class="news-information fs-12 fw-400">1h ago &bull; by Troy Corlson</p>
          </div>
          <div class="news-list__item">
            <img src="@/assets/images/news.png" alt="" />
            <p class="news-title fs-16 fw-700">A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</p>
            <p class="news-information fs-12 fw-400">1h ago &bull; by Troy Corlson</p>
          </div>
        </div>
        <a href="#"><img src="@/assets/icons/right-arrow.svg" alt="" /></a>
      </div>
    </section>
  </main>
</template>

<script>
import ResultListItemVue from "@/components/ResultList/ResultListItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "HomeView",
  components: { ResultListItemVue },
  data() {
    return {
      searchThing: "",
      searchResults: [],
    };
  },
  mounted() {
    this.$store.dispatch("fetchList");
  },
  computed: {
    ...mapGetters({
      allData: "getDataList",
    }),
  },
  watch: {
    searchThing() {
      if (this.searchThing != "" && this.searchThing.trim().length >= 2) {
        this.searchResults = this.allData.filter((c) => c[0].toLowerCase().includes(this.searchThing.toLowerCase())).slice(0, 3);
      } else {
        this.searchResults = [];
      }
    },
  },
};
</script>

<style scoped lang="scss">
.top-bar {
  margin-top: 64px;
  display: flex;
  justify-content: right;
}
.logo-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  margin: 70px auto 0 auto;
  span {
    margin-left: auto;
    margin-top: 10px;
  }
}
.search-container {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  &__search_wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    .search-input {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 15px;
      border: 2px solid $input-border-color;
      border-radius: 8px;
      width: 100%;
      img {
        width: 18px;
        height: 18px;
      }

      input {
        border: none;
        width: 100%;

        &:focus {
          outline: none;
        }
      }
    }
  }

  &__result_wrap {
    width: 85%;
    border: 1px solid $border-color;
    border-radius: 24px;
    padding: 16px 12px;

    .result-list {
      &__item {
        background: #fff;
        padding: 14px;
        border-radius: 8px;
      }
    }

    a {
      display: block;
      text-align: center;
    }
  }
}
.news-container {
  margin-top: 90px;
  margin-bottom: 50px;
  &__news_wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    a {
      background-color: #eeeeee;
      padding: 12px;
      width: 48px;
      height: 48px;
      border-radius: 100%;
      text-align: center;

      &:first-child {
        margin-left: -65px;
      }

      &:last-child {
        margin-right: -65px;
      }

      img {
        width: 24px;
        height: 24px;
      }
    }

    .news-list {
      display: flex;
      gap: 20px;
      &__item {
        width: 33%;
        display: flex;
        flex-direction: column;
        gap: 8px;

        .news-information {
          color: #6c7072;
        }
      }
    }
  }
}
</style>
