<template>


  <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <router-link exact to="/"><strong>Home</strong></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link exact to="/secondpage"><strong>Second</strong></router-link>
            </li>
            <li class="nav-item">
              <router-link exact to="/products"><strong>Create Products</strong></router-link>
            </li>
            
            </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            </form>
        </div>
    </nav>
    <div>
      <router-view></router-view>
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


  router-view {
    text-decoration: none;
  }
  
  a {
    margin-left: 50px;
    text-decoration: none;
    color: #2c3e50;
    font-size: 18px;
  }

  input {
    margin-left: 50px;
  }
    
  button {
    margin-left: 50px;
  }

  body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
</style>
