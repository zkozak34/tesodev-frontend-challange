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
  <footer class="footer">
    <img src="@/assets/images/footer.png" alt="" />
    <div class="contact">
      <div class="address">
        <span class="fs-16 fw-700">İletişim</span>
        <p class="fs-18 fw-400">
          Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
        </p>
      </div>
      <p class="fs-16 fw-700">Email: bilgi@tesodev.com</p>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2797470199484!2d28.888754051262442!3d41.01913527919811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1657172268022!5m2!1str!2str"
      height="220"
      style="border: 0"
      allowfullscreen="false"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </footer>
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
.footer {
  background-color: rgba($color: $footer-color, $alpha: 0.72);
  width: 100%;
  padding: 50px 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  gap: 30px;

  img {
    width: 20%;
    height: 20%;
  }

  .contact {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
  }

  iframe {
    width: 30%;
  }
}
</style>
