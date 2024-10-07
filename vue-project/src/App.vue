<template>
  <div>
    <h1>bt6</h1>
    <Bt6></Bt6>
    <router-view />
    <h1>bt7</h1>
    <Bt7></Bt7>
    <h1>bt8</h1>
    <ListUser></ListUser>
    <h1>bt10</h1>
    <!-- <ListEmployee></ListEmployee> -->
  </div>
</template>

<script setup>
  import ListEmployee from "./components/components/bt10/ListEmployee.vue";
import Bt6 from "./components/components/Bt6.vue"
  import Bt7 from "./components/components/Bt7.vue"
import ListUser from "./components/components/bt9/ListUser.vue";
</script>

<style></style>
