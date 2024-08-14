import { createRouter, createWebHistory } from "vue-router";
import indexPage from "../components/indexPage.vue";
const routes = [
  {
    path: "/sunyad/",
    component:indexPage ,
    name: "indexPage",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
