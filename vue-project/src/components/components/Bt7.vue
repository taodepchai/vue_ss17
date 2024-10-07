<template>
  <div>
    <router-link to="/" exact-active-class="active-link">Home</router-link>
    <router-link to="/contact" exact-active-class="active-link">contact</router-link>
  </div>
  
  
</template>

<script>

</script>

<style>
.active-link {
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
}
</style>
