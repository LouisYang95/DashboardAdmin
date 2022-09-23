<template>
  <div>
    <form @submit.prevent="this.mainStore.addProducts(element)">
      <div class="form-group">
        <label for="formGroupExampleInput">first name :</label>
        <br />
        <input type="text" class="form-control" id="nom" v-model="post.firstname" />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">last name :</label>
        <br />
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="post.lastname"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Email :</label>
        <br />
        <input
          type="text"
          class="form-control"
          id="prix"
          v-model="post.email"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Orders:</label>
        <br />
        <input
          type="text"
          class="form-control"
          id="quantite"
          v-model="post.orders"
        />
      </div>
      <button type="submit" class="btn btn-outline-primary">Add</button>
    </form>
  </div>
</template>

<script>
import { useProduct } from "@/store/index";
import { mapStores, mapState } from "pinia";
export default {
  name: "taskFormulaire",
  data() {
    return {
      element: "clients",
    };
  },
  computed: {
    //create a computed property that returns the id(given in the store) + Store -> there mainStore
    ...mapStores(useProduct),
    // create 2 computed named 'data' and 'post' containing the state : state.data and state.post in index.js store
    ...mapState(useProduct, ["data"]),
    ...mapState(useProduct, ["post"]),
    ...mapState(useProduct, ["id"]),
  },
};
</script>

<style scoped>
.form-group {
  margin: 1em;
}

.form-control {
  width: 20rem;
}

input {
  border: none;
  border-bottom: 1px solid black;
}
button {
  background-color: #555555;
  cursor: pointer;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(228, 225, 225);
}
</style>
