<template>
  <div>
    <h1>Danh sách nhân viên</h1>
    <div v-for="employee in employees" :key="employee.id" class="employee-card">
      <p>Id: {{ employee.id }}</p>
      <p>Tên: {{ employee.name }}</p>
      <p>Vị trí: {{ employee.position }}</p>
      <router-link :to="`/employees/${employee.id}`">Xem chi tiết</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const employees = ref([
  { id: 1, name: "Nguyễn Văn A", position: "Lập trình viên" },
  { id: 2, name: "Trần Văn B", position: "Thiết kế viên" },
  { id: 3, name: "Lê Thị C", position: "Nhân viên dự án" }
]);
</script>

<style scoped>
.employee-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
