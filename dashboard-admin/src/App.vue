<template>
  <div>
    <header>
      <ul>
        <li><router-link to ="/">Home</router-link></li>
        <li><router-link to="/secondpage">Second</router-link></li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
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
</style>
