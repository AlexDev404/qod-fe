import NotFoundPage from "@/pages/404.svelte";
import HomePage from "@/pages/home.svelte";
import SettingsPage from "@/pages/settings.svelte";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/settings",
    component: SettingsPage,
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
