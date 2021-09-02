import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import GStore from "./store/flash";
import store from "./store/index";
import "nprogress/nprogress.css";

createApp(App).use(router).provide("GStore", GStore).use(store).mount("#app");
