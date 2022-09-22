<template>

  <div>
    <header>
      <ul>
        <li>
          <router-link exact to="/">Product Board</router-link>
        </li>
        <li>
          <router-link exact to="/commands">Commands Board</router-link>
        </li>
        <li>
          <router-link exact to="/products/add">Add a Product</router-link>
        </li>
        <li>
          <router-link exact to="/clients">Client Board</router-link>
        </li>
        <li>
          <router-link exact to="/categories">Categories</router-link>
        </li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>


<script>

export default {
  name: "App",
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
}
</style>
