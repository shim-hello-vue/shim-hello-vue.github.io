<script setup>
import { ref } from 'vue'
const message = ref({name: "shim", age: 25})
</script>

<template>
<h1>{{ message }} </h1>
</template>
