<template>
  <div v-if="event" v-cloak>
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchEvent", this.$route.params.id);
  },

  computed: {
    event() {
      return this.$store.state.event;
    },
  },
};
</script>
