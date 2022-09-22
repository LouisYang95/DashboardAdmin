<template>

  <div>
    <header>
      <ul>
        <li>
          <router-link exact to="/">Home</router-link>
        </li>
        <li>
          <router-link exact to="/secondpage">Second</router-link>
        </li>
        <li>
          <router-link exact to="/create-products">CREATE</router-link>
        </li>
      </ul>
    </header>
    <router-view></router-view>

    <DashBoard />
    <AddCommand />
  </div>
</template>


<script>
import DashBoard from "./components/Dashboard.vue";
import AddCommand from "./components/AddCommand.vue";


export default {
  name: "App",
  components: { DashBoard, AddCommand },
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
