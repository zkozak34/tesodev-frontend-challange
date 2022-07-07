import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/results/",
    name: "results",
    component: () => import("@/views/ResultsView"),
  },
  {
    path: "/results/:keyword",
    name: "results-with-params",
    component: () => import("@/views/ResultsView"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
