<template>
<h1>DashBoard</h1>
    <br>
    <button><router-link to="/create-products">CREATE</router-link></button>
    <div class="user-container" v-for="product in products" :key="product.id" @dblclick="this.mainStore.deleteProduct(product.id)"> 
      <!-- there our function to delete product is activate on double click -->
      <h3> {{ product.id }} - {{ product.name }}</h3>
      <ul >
        <li>
           {{ product.descriptions }}
        </li>
        <li>
          {{ product.price }} euro - {{ product.stock }}
        </li>
      </ul>
    </div>
</template>

<script>
  // import our store 
  import { useStore } from '@/store/users';
  import { mapStores, mapState} from 'pinia';
  import {useProduct} from '@/store/index';

export default {
    name: 'UserDashboard',
    computed: {
      //create a computed property that returns the id given + store -> there productsStore
      ...mapStores(useStore),
      // create a computed named 'products' containing the state : state.products in users.js store
      ...mapState(useStore, ['products']),
      // create a computed property which returns the id given + store -> there mainStore
      ...mapStores(useProduct),
    },
beforeMount() { // beforeMount function permit the call before the component is mounted
    this.productsStore.getProducts(); // call the function getProducts in users.js store with the computed property store
  },
}
</script>

<style>

li {
  list-style: none;
  text-align: left;
  font-size: 20px;
}

ul {
  margin: 0;
  padding: 0;
}

.user-container {
  background-color: lightgrey;
  border-radius: 30px;
  width: 300px;
  padding: 100px;
  margin: 20px;
}

.user-container h3 {
  margin-top: -60px;
}

.product-container {
  background-color: lightgrey;
  border-radius: 30px;
  width: 300px;
  padding: 100px;
  margin: 20px;
}

</style>