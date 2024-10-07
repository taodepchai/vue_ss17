<template>
  <div>
    <h2>Dự án của nhân viên</h2>
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  { id: 1, name: "Dự án 1" },
  { id: 2, name: "Dự án 2" },
  { id: 3, name: "Dự án 3" }
]);
</script>
