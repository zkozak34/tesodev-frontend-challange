<template>
  <main class="container">
    <section class="top-bar">
      <button class="btn btn-primary fs-18 fw-700">Add new record</button>
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
          <input type="text" placeholder="18th Street" class="fs-16 fw-400" />
        </div>
        <button class="btn btn-primary">Search</button>
      </div>
      <div class="search-container__result_wrap">
        <div class="result-list">
          <div class="result-list__item">
            <img src="@/assets/icons/location.svg" alt="" />
            <div class="result-list__item_content">
              <p class="fs-16 fw-400">18th Street Brewery</p>
              <p class="fs-14 fw-400">Oakley Avenue, Hammond, IN</p>
            </div>
          </div>
          <div class="result-list__item">
            <img src="@/assets/icons/location.svg" alt="" />
            <div class="result-list__item_content">
              <p class="fs-16 fw-400">18th Street Brewery</p>
              <p class="fs-14 fw-400">Oakley Avenue, Hammond, IN</p>
            </div>
          </div>
          <div class="result-list__item">
            <img src="@/assets/icons/location.svg" alt="" />
            <div class="result-list__item_content">
              <p class="fs-16 fw-400">18th Street Brewery</p>
              <p class="fs-14 fw-400">Oakley Avenue, Hammond, IN</p>
            </div>
          </div>
        </div>
        <a href="#" class="fs-16 fw-700">Show more...</a>
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
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
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
      .result-list__item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 20px 28px;

        &_content {
          width: 100%;
          p:last-child {
            color: #72777a;
          }
        }
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
</style>
