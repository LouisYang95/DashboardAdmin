<template>
  <div>
    <form @submit.prevent="this.mainStore.addProducts()">
      <div class="form-group">
        <label for="formGroupExampleInput">Nom :</label>
        <br />
        <input type="text" class="form-control" id="nom" v-model="post.name" />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Description :</label>
        <br />
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="post.description"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Prix :</label>
        <br />
        <input
          type="text"
          class="form-control"
          id="prix"
          v-model="post.price"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Quantité :</label>
        <br />
        <input
          type="text"
          class="form-control"
          id="quantite"
          v-model="post.stock"
        />
      </div>
      <button type="submit">Edit</button>
    </form>
  </div>
</template>

<script>
import { useProduct } from "@/store/index";
import { mapStores, mapState } from "pinia";
export default {
  name: "taskFormulaire",
  computed: {
    //create a computed property that returns the id(given in the store) + Store -> there mainStore
    ...mapStores(useProduct),
    // create 2 computed named 'data' and 'post' containing the state : state.data and state.post in index.js store
    ...mapState(useProduct, ["data"]),
    ...mapState(useProduct, ["post"]),
    ...mapState(useProduct, ["changed"]),
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
  height: 2rem;
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
  margin-left: 100px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
