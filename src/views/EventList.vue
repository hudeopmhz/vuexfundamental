<template>
  <div>
    <h1>Events for Good</h1>
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
      <div class="pagination">
        <!-- <router-link
          :to="{ name: 'EventList', query: { page: page - 1 } }"
          v-if="page != 1"
        >
          Prev
        </router-link> -->
        <!-- <router-link
          :to="{ name: 'EventList', query: { page: page + 1 } }"
          v-if="hasNextPage"
          >Next</router-link
        > -->
        <!-- <router-link :to="{ name: 'EventList', query: { page: page + 1 } }"
          >Next</router-link
        > -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
// import EventService from "@/services/EventService.js";

export default {
  name: "Home",
  props: ["page"],
  components: {
    EventCard,
  },
  data() {
    return {
      eventCount: 0,
      // perPage: 5,
    };
  },
  created() {
    this.$store.dispatch("fetchEvents");
  },

  // beforeRouteEnter(routeTo, routeFrom, next) {
  //   EventService.getEvents(5, parseInt(routeTo.query.page || 1))
  //     .then((response) => {
  //       next((comp) => {
  //         comp.events = response.data;
  //         comp.eventCount = response.headers["x-total-count"];
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       if (error.response && error.response.status == 404) {
  //         next({
  //           name: "404Resource",
  //           params: { resource: "event" },
  //         });
  //       } else {
  //         next({ name: "NetworkError" });
  //       }
  //     });
  // },

  // beforeRouteUpdate(routeTo) {
  //   return EventService.getEvents(99, parseInt(routeTo.query.page || 1))
  //     .then((response) => {
  //       this.events = response.data;
  //       this.eventCount = response.headers["x-total-count"];
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       if (error.response && error.response.status == 404) {
  //         return {
  //           name: "404Resource",
  //           params: { resource: "event" },
  //         };
  //       } else {
  //         return { name: "NetworkError" };
  //       }
  //     });
  // },

  computed: {
    events() {
      return this.$store.state.events;
    },

    // hasNextPage() {
    //   var totalPages = Math.ceil(this.eventCount / this.perPage);
    //   return this.page < totalPages;
    // },
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
