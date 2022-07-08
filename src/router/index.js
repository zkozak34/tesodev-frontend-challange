import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView"),
  },
  {
    path: "/results",
    name: "results",
    component: () => import("@/views/ResultsView"),
  },
  {
    path: "/results/:keyword",
    name: "results-with-params",
    component: () => import("@/views/ResultsView"),
    props: true,
  },
  {
    path: "/add",
    name: "add-data",
    component: () => import("@/views/AddData"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});
export default router;
