<template>
  <div>
    <h1>Thông tin chi tiết nhân viên</h1>
    <router-link :to="{ name: 'profile', params: { id: $route.params.id } }">Thông tin cá nhân</router-link> |
    <router-link :to="{ name: 'projects', params: { id: $route.params.id } }">Dự án</router-link> |
    <router-link :to="{ name: 'contact', params: { id: $route.params.id } }">Liên hệ</router-link>
    
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>
