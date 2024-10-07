<template>
  <div>
    <h2>Thông tin cá nhân</h2>
    <p>Tên: {{ employee.name }}</p>
    <p>Email: {{ employee.email }}</p>
    <p>Vị trí: {{ employee.position }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const employeeId = route.params.id;

const employees = ref([
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", position: "Lập trình viên" },
  { id: 2, name: "Trần Văn B", email: "tvb@gmail.com", position: "Thiết kế viên" },
  { id: 3, name: "Lê Thị C", email: "ltc@gmail.com", position: "Nhân viên dự án" }
]);

const employee = ref(employees.value.find(e => e.id == employeeId));
</script>
