<template>
  <div>
    <h2>Thông tin liên hệ</h2>
    <p>Số điện thoại: 0123456789</p>
    <p>Email: {{ employee.email }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const employeeId = route.params.id;

const employees = ref([
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com" },
  { id: 2, name: "Trần Văn B", email: "tvb@gmail.com" },
  { id: 3, name: "Lê Thị C", email: "ltc@gmail.com" }
]);

const employee = ref(employees.value.find(e => e.id == employeeId));
</script>
