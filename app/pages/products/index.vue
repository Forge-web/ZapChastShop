<script setup lang="ts">
import CardProducts from '~/components/products/cardProducts.vue';


const products = ref(getProducts().products);

</script>

<template>

	<div class="flex flex-wrap w-full bg-gray-800 rounded-xl">
		<CardProducts v-for="product in products" :product="product"/>
	</div>

</template>