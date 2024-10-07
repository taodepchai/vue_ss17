<template>
  <div>
    <p>Id: {{ user.id }}</p>
    <p>UserName: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Address: {{ user.address }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const user = ref({});

const allUsers = [
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
  { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" }
];

const fetchUserById = (id) => {
  const foundUser = allUsers.find(u => u.id === parseInt(id));
  if (foundUser) {
    user.value = foundUser;
  } else {
    user.value = {};
  }
};

fetchUserById(route.params.id);

watch(() => route.params.id, (newId) => {
  fetchUserById(newId);
});
</script>
