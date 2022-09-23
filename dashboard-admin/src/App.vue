<template>
  
  <!-- <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </form> -->
      <h1 class="title">Admin Dashboard</h1>
  <div class="body">
    <Navbar />
    <router-view></router-view>
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: "App",
  components: { Navbar },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

router-view {
  text-decoration: none;
}

body {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.body{
  display: flex;
  flex-direction: row;
  margin: 0;
}
.title{
  background-color: rgb(216, 76, 76);;
}
</style>
