<template>

  <div>
    <header>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/secondpage">Second</router-link>
        </li>
      </ul>
    </header>
    <router-view></router-view>

    <DashBoard />

  </div>
</template>


<script>
import DashBoard from "./components/Dashboard.vue";

export default {
  name: "App",
  components: { DashBoard }
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
</style>
