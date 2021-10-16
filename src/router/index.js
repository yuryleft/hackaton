import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import World from "../views/world.vue";
import Prevent from "../views/prevent.vue";
import Vaccine from "../views/vaccine.vue";
import News from "../views/news.vue";

const routes = [
  {
    path: "/",
    name: "about",
    component: About,
  },
  {
    path: "/world",
    name: "world",
    component: World,
  },
  {
    path: "/prevent",
    name: "prevent",
    component: Prevent,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
  {
    path: "/vaccine",
    name: "vaccine",
    component: Vaccine,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
