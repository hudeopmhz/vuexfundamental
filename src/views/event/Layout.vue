<template>
  <div id="nav">
    <router-link :to="{ name: 'EventDetails' }">Event Details</router-link> |
    <router-link :to="{ name: 'EventRegister' }">Register</router-link> |
    <router-link :to="{ name: 'EventEdit' }">Edit </router-link>

    <router-view :event="GStore.event" />
  </div>
</template>

<script>
export default {
  inject: ["GStore"],
};
</script>
