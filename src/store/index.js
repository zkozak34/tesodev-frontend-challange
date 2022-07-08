import appAxios from "@/adapters/appAxios";
import { createStore } from "vuex";
import Record from "@/models/Record";

const store = createStore({
  state: {
    fromLs: [],
    fromDb: [],
  },
  getters: {
    getDataList: (state) => [...state.fromLs, ...state.fromDb],
  },
  mutations: {
    initialDataList(state, list) {
      state.fromDb = [];
      list.forEach((item) => state.fromDb.push(new Record(item[0], item[1], item[2], item[3], item[4], item[5])));
      let tmpLs = JSON.parse(window.localStorage.getItem("mockData")) ?? [];
      if (tmpLs.length > 0) {
        tmpLs.forEach((item) => state.fromLs.push(new Record(item.fullName, item.company, item.email, item.date, item.country, item.city)));
      }
    },
    insertList(state, data) {
      state.fromLs.push(new Record(data.fullName, data.company, data.email, data.date, data.country, data.city));
      window.localStorage.setItem(
        "mockData",
        state.fromLs.map((item) => JSON.stringify(Object.values(item)))
      );
    },
  },
  actions: {
    fetchList({ commit }) {
      appAxios
        .get("data")
        .then((response) => {
          commit("initialDataList", response.data);
        })
        .catch((err) => console.log(err));
    },
    insertList({ commit }, data) {
      commit("insertList", data);
    },
  },
});

export default store;
