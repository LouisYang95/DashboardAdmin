<template>
<h1>DashBoard</h1>
    <br>
    <button><router-link to="/create-products">CREATE</router-link></button>
    <div class="user-container" v-for="product in products" :key="product.id">
      <h3> {{ product.id }} - {{ product.name }}</h3>
      <ul>
        <li>
           {{ product.descriptions }}
        </li>
        <li>
          {{ product.price }} - {{ product.stock }}
        </li>
      </ul>
    </div>
</template>

<script>
  import { useStore } from '@/store/users';
  import { mapStores, mapState} from 'pinia';

export default {
    name: 'UserDashboard',
    computed: {
      ...mapStores(useStore),
      ...mapState(useStore, ['products']),
    },
beforeMount() {
    this.productsStore.getProducts();
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