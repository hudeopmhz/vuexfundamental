<template>
  <h1>Create an Event</h1>

  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <label for="">Select a Category:</label>
      <select name="" id="" v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >
          {{ option }}
        </option>
      </select>

      <h3>Name & describe your event</h3>

      <label for="">Title</label>
      <input v-model="event.title" type="text" placeholder="Title" />

      <label for="">Description</label>
      <input
        type="text"
        v-model="event.description"
        placeholder="Description"
      />

      <h3>Where is your event?</h3>
      <label for="">Location</label>
      <input type="text" v-model="event.location" placeholder="Location" />

      <h3>When is your event?</h3>
      <label for="">Date</label>
      <input type="text" v-model="event.date" placeholder="Date" />

      <label for="">Time</label>
      <input type="text" v-model="event.time" placeholder="Time" />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ],
      event: {
        id: "",
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        category: "",
        organizer: "",
      },
    };
  },
  methods: {
    onSubmit() {
      const event = {
        ...this.event,
        id: uuidv4(),
        organizer: this.$store.state.user,
      };
      this.$store.dispatch("createEvent", event).then(() => {
        this.$router.push({
          name: "EventDetails",
          params: { id: event.id },
        });
      });
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 5px;
}
input,
select {
  padding: 5px;
  margin-bottom: 10px;
}
</style>
