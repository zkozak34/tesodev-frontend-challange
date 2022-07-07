import { createApp } from "vue";
import appAxios from "./adapters/appAxios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.config.globalProperties.$appAxios = appAxios;
app.use(router);
app.use(store);
app.mount("#app");
