<template>

  <div class="home">
    <header>
      <ul>
        <li>
          <router-link exact to="/" class="link">Home</router-link>
        </li>
        <li>
          <router-link exact to="/secondpage" class="link">Second</router-link>
        </li>
        <li>
          <router-link exact to="/products" class="link">CREATE</router-link>
        </li>
      </ul>
    </header>
    <router-view>
    </router-view>
  </div>
</template>


<script>


export default {
    name: "App",
    components: {
    },
}
</script>

<style scoped>
.home {
  text-align: center;
}
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

  .link{
    text-decoration: none;
    color: black;
  }
  .link:hover{
    color: rgb(229, 146, 146);
  }
</style>
