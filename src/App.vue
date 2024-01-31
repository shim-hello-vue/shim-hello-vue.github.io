<script setup>
// import { ref } from 'vue'
import category from "@/assets/category.json"
const categories = category

</script>

<template>
<li v-for="item in categories">
	{{ item.name }} - {{ item.code }}
</li>
</template>
