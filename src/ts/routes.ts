import NotFoundPage from "@/pages/404.svelte";
import HomePage from "@/pages/home.svelte";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
