<script setup>
import {ref} from 'vue'

const message = ref('')
</script>

<template>
<span>Multiline message is:</span>
<p stle="white-space: pre-line;">{{message}}</p>
<textarea v-model="message" placeholder="and multiple silnes"></textarea>
</template>
