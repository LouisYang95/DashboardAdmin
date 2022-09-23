<template>
   <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link exact to="/" class="nav-link link-dark" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
          <strong class="text">Home</strong>
        </router-link>
      </li >
      <li class="nav-item">
        <router-link exact to="/products/add" class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
          <strong class="text">Add Products</strong>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link exact to="/commands" class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          <strong class="text">Commands Board</strong>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link exact to="/clients" class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          <strong class="text">Customers Board</strong>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link exact to="/categories" class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
          <strong class="text">Categories</strong>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link exact to="/" class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
          <strong class="text"> Panier </strong>
        </router-link>
        
      </li>
    </ul>
    <hr>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
  components: {
  },
};
</script>
<style scoped>
    .text{
        color: rgb(195, 46, 46);
    }
    .nav-link.link-dark:hover{
        background-color: #478fd7;
    }
div{
    margin: 0;
}
</style>
