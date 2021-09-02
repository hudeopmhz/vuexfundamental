<template>
  <h1>Edit Events Page</h1>
  <p>{{ event }}</p>
</template>

<script>
export default {
  computed: {
    event() {
      return this.$store.state.event;
    },
  },
};
</script>
