<template>
  <div class="event-register">
    <h1>Register for an Event</h1>
    <button @click="register">Register Me</button>
  </div>
</template>

<script>
export default {
  props: ["event"],
  inject: ["GStore"],
  methods: {
    register() {
      // asume successful API Call
      //then we redirect
      (this.GStore.flashMessage =
        "You are successfully registered for " + this.event.title),
        setTimeout(() => {
          this.GStore.flashMessage = "";
        }, 2000);
      this.$router.push({
        name: "EventDetails",
      });
    },
  },
};
</script>
