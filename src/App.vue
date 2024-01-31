<script setup>
import { ref } from 'vue'
import category from "@/assets/category.json"
const categories = ref(category)

</script>

<template>
<div v-for="item in categories">
<div v-if="item.artist.includes('Ariana')">
	<br> <div> rank : {{item.rank}} </div>
	<div> name : {{ item.name }} </div>
	<div> artist : {{ item.artist }} </div>
	<div> peak rank : {{item.peak_rank}} </div>
	<div> weeks on chart : {{item.weeks_on_chart}} </div> <br> <hr>
</div>
</div>
</template>
