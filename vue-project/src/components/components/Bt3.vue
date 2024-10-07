<template>
  <div>
    <input v-model="searchQuery" type="text" placeholder="Nhập từ khóa" />
    <button @click="search">Tìm kiếm</button>

    <div>
      <p>Value: {{ searchQueryFromParams || "Trước khi tìm kiếm" }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const searchQuery = ref("");
const router = useRouter();
const route = useRoute();

const searchQueryFromParams = ref(route.query.q || "");

watch(
  () => route.query.q,
  (newQuery) => {
    searchQueryFromParams.value = newQuery;
  }
);

const search = () => {
  if (searchQuery.value) {
    router.push({ path: "/search", query: { q: searchQuery.value } });
  }
};
</script>
