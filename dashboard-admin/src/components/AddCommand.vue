<template>
  <div id="app">
    <!-- a brut version of the forms to try our add function -->
    <form @submit="this.mainStore.addProducts()">
      <input placeholder="name" v-model="post.name"> <!-- v-model here is used to take the value of the input-->
      <input placeholder="price" v-model="post.price">
      <br>
      <button type="submit">Create</button>
    </form>
    {{data}}<!-- to see the result of the function -->
    <br>
    {{changed}}
    <br>
    {{id}}
  </div>
</template>

<script>
  // we have to import our store 
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
    ...mapState(useProduct, ["changed"]),
    ...mapState(useProduct, ['id'])

  },
};
</script>

<style></style>
