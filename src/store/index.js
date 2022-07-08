import appAxios from "@/adapters/appAxios";
import { createStore } from "vuex";
import Record from "@/models/Record";
import { getLocalStorage, setLocalStorage } from "@/mixins/helperMixins";

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
      state.fromLs = JSON.parse(getLocalStorage("mockData"));
    },
    insertList(state, data) {
      state.fromLs.push(new Record(data.fullName, data.company, data.email, data.date, data.country, data.city));
      setLocalStorage("mockData", JSON.stringify(state.fromLs));
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
