<template>
  <div id="app">
    <form @submit="this.mainStore.addProducts()">
      <input placeholder="name" v-model="post.name">
      <input placeholder="title" v-model="post.price">
      <br>
      <button type="submit">Create</button>
    </form>
    {{data}}
  </div>
</template>

<script>
import { useProduct } from "@/store/index";
import { mapStores, mapState} from "pinia";

export default {
  name: "AddCommand",
  computed: {
    //create a computed property that returns the id(given in the store) + Store -> there mainStore
    ...mapStores(useProduct),
    // create 2 computed named 'data' and 'post' containing the state : state.data and state.post in index.js store
    ...mapState(useProduct, ["data"]),
    ...mapState(useProduct, ["post"]),
  },
};
</script>

<style></style>
