import appAxios from "@/adapters/appAxios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    fromLs: [],
    fromDb: [],
  },
  getters: {
    getDataList: (state) => [...state.fromLs, ...state.fromDb],
  },
  mutations: {
    setDataList(state, list) {
      state.fromLs = JSON.parse(window.localStorage.getItem("mockData")) ?? [];
      state.fromDb = list;
    },
    insertList(state, list) {
      state.fromLs.push(Object.values(list));
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
    insertList({ commit, state }, data) {
      commit("insertList", data);
      window.localStorage.setItem("mockData", JSON.stringify(state.fromLs));
    },
  },
});

export default store;
