import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
import Speakers from "@/pages/Speakers.vue";
import Login from "@/pages/Login.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
     {
      path: "/palestrantes",
      name: "Palestrantes",
      component: Speakers,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "Login") {
    next();
  }

  const user = localStorage.getItem("@Event:user");

  if (!user) {
    next("/login");
  } else {
    next();
  }
});

export default router;
