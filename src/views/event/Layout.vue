<template>
  <div id="nav">
    <router-link :to="{ name: 'EventDetails' }">Event Details</router-link> |
    <router-link :to="{ name: 'EventRegister' }">Register</router-link> |
    <router-link :to="{ name: 'EventEdit' }">Edit </router-link> |
    <router-link :to="{ name: 'EventNew' }">Create New </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  inject: ["GStore", "store"],
};
</script>
