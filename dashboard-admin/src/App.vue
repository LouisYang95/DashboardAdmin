<template>
  <div id="app" >
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
  </div>
</template>


<script>

export default {
  name: 'App',
  data(){
    return{
      products: [],
    };
  },
  async created() {
    try {
      const res = await fetch('http://localhost:3000/products');
      const data = await res.json();
      this.products = data;
      console.log('Connect');
      console.log(this.products)

    }catch(e) {
      console.error(e);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
