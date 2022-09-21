<template>
  <div id="app">
    <form @submit.prevent="this.mainStore.AddProducts()">
      <input placeholder="name" v-model="post.name">
      <input placeholder="title" v-model="post.title">
      <br>
      <button type="submit">Create</button>
    </form>
    {{data}}
  </div>
</template>

<script>
import { useStore } from "@/store/index";
import { mapStores, mapState} from "pinia";

export default {
  name: "AddCommand",
  computed: {
    //create a computed property that returns the id(given in the store) + Store -> there mainStore
    ...mapStores(useStore),
    // create 2 computed named 'data' and 'post' containing the state : state.data and state.post in index.js store
    ...mapState(useStore, ["data"]),
    ...mapState(useStore, ["post"]),
  },
};
</script>

<style></style>
