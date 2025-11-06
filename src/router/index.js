import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeViews.vue";
import Products from "../views/ProductsViews.vue";
import ArtikelViews from "../views/BlogViews.vue";
import KomunitasViews from "../views/CommunityViews.vue";
import TentangViews from "../views/AboutViews.vue";
import KontakViews from "../views/ContactViews.vue";
import Addtochart from "../views/ChartViews.vue";
import UserViews from "../views/UserViews.vue";
import AuthViews from "../views/AuthViews.vue";
import OrderViews from "../views/OrderViews.vue";
import FavoriteViews from "../views/FavoriteViews.vue";
import SettingsViews from "../views/SettingsViews.vue";


const routes = [
  { path: "/", component: Home },
  { path: "/produk", component: Products },
  { path: "/artikel", component: ArtikelViews },
  { path: "/komunitas", component: KomunitasViews },
  { path: "/tentang", component: TentangViews },
  { path: "/kontak", component: KontakViews },
  { path: "/addtochart", component: Addtochart},
  { path: "/userprofile", component: UserViews },
  { path: "/authview", component: AuthViews },
  { path: "/pesanan", component: OrderViews },
  { path: "/favorit", component: FavoriteViews },
  { path: "/pengaturan", component: SettingsViews },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;