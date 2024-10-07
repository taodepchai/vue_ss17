<template>
  <div>
    <div v-for="user in users" :key="user.id" class="user-card">
      <p>Id: {{ user.id }}</p>
      <p>UserName: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Address: {{ user.address }}</p>
      <router-link :to="{ name: 'UserDetail', params: { id: user.id } }">
        <button>Xem chi tiết</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const users = ref([
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
  { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },
]);
</script>

<style scoped>
.user-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 200px;
}
</style>
