<template>
  <h1>DashBoard</h1>
  <br />
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody
      v-for="product in products"
      :key="product.id"
      @dblclick="this.mainStore.deleteProduct(product.id)"
    >
      <!-- there our function to delete product is activate on double click -->
      <tr>
        <th scope="row">
          {{ product.id }}
        </th>
        <td>{{ product.name }}</td>
        <td>
          {{ product.descriptions }}
        </td>
        <td>{{ product.price }} euro - {{ product.stock }}</td>
        <button @click="this.mainStore.selectProduct(product.id)">ME</button>
      </tr>
    </tbody>
  </table>
  <button type="submit" @click="this.mainStore.editProduct(id)">Edit</button>
</template>

<script>
// import our store
import { useStore } from "@/store/users";
import { mapStores, mapState } from "pinia";
import { useProduct } from "@/store/index";

export default {
  name: "UserDashboard",
  computed: {
    //create a computed property that returns the id given + store -> there productsStore
    ...mapStores(useStore),
    // create a computed named 'products' containing the state : state.products in users.js store
    ...mapState(useStore, ["products"]),
    // create a computed property which returns the id given + store -> there mainStore
    ...mapStores(useProduct),
    ...mapState(useProduct, ["changed"]),
    ...mapState(useProduct, ["id"]),
  },
  beforeMount() {
    // beforeMount function permit the call before the component is mounted
    this.productsStore.getProducts(); // call the function getProducts in users.js store with the computed property store
  },
};
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi+Ink&display=swap');

li {
  list-style: none;
  text-align: left;
  font-size: 20px;
}

ul {
  margin: 0;
  padding: 0;
}

.table.table-striped{
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
.product-container {
  background-color: lightgrey;
  border-radius: 30px;
  width: 300px;
  padding: 100px;
  margin: 20px;
}

h1 {
  font-family: 'Reem Kufi Ink', sans-serif;

}
</style>
