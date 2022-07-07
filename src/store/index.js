import appAxios from "@/adapters/appAxios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    dataList: [],
  },
  getters: {
    getDataList: (state) => state.dataList,
  },
  mutations: {
    setDataList(state, list) {
      let fromLs = JSON.parse(window.localStorage.getItem("mockData")) ?? [];
      let fromDb = list;
      state.dataList = [...fromLs, ...fromDb];
    },
  },
  actions: {
    fetchList({ commit }) {
      appAxios
        .get("data")
        .then((response) => {
          commit("setDataList", response.data);
        })
        .catch((err) => console.log(err));
    },
  },
});

export default store;
