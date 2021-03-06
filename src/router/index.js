import { createRouter, createWebHistory } from "vue-router";
// import store from "@/store";
import EventList from "../views/EventList.vue";
import EventLayout from "../views/event/Layout.vue";
import EventDetails from "../views/event/Details.vue";
import EventRegister from "../views/event/Register.vue";
import EventEdit from "../views/event/Edit.vue";
import EventNew from "../views/event/New.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import NetworkError from "../views/NetworkError.vue";
import NProgress from "nprogress";
// import EventService from "@/services/EventService.js";
import GStore from "@/store/flash.js";
// import store from "@/store";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
    }),
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/events/:id",
    name: "EventLayout",
    component: EventLayout,
    props: true,
    // beforeEnter: (to) => {
    // this.$store.dispatch("fetchEvent", to.params.id);
    // this.$store.dispatch("createEvent", event);
    // EventService.getEvent(to.params.id)
    //   .then((response) => {
    //     store.event = response.data;
    //   })
    //   .catch((error) => {
    //     if (error.response && error.response.status == 404) {
    //       return {
    //         name: "404Resource",
    //         params: { resource: "event" },
    //       };
    //     } else {
    //       return { name: "NetworkError" };
    //     }
    //   });
    // },

    children: [
      {
        path: "",
        name: "EventDetails",
        component: EventDetails,
      },
      {
        path: "register",
        name: "EventRegister",
        component: EventRegister,
      },
      {
        path: "edit",
        name: "EventEdit",
        component: EventEdit,
        meta: { isAuth: false },
      },
      {
        path: "new",
        name: "EventNew",
        component: EventNew,
      },
    ],
  },
  {
    path: "/event/:afterEvent(.*)",
    redirect: (to) => {
      return { path: "/events/" + to.params.afterEvent };
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFound,
    props: true,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetworkError,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from) => {
  NProgress.start();
  if (to.meta.isAuth) {
    GStore.flashMessage = "Sorry, You are not authorized to view this page";

    setTimeout(() => {
      GStore.flashMessage = "";
    }, 2000);

    if (from.href) {
      return false;
    } else {
      return { path: "/" };
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
