import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import Dashboard from "@/components/Dashboard.vue";
import Product from "@/components/Product.vue";
import Customer from "@/components/Customer.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/products",
      name: "Products",
      component: Product,
    },
    {
      path: "/customers",
      name: "Customers",
      component: Customer,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "Login") {
    next();
  }

  const user = localStorage.getItem("@DeliveryAdmin:user");

  if (!user) {
    next("/login");
  } else {
    next();
  }
});

export default router;
