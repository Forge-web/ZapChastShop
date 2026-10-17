<script setup lang="ts">
const props = defineProps<{
	product: {
		id: number,
		img: string,
		price: string,
		name: string,
		desc: string
	}
}>();
</script>

<template>

	<div 
		class="flex flex-col max-w-50 p-5 text-white hover:outline-dashed hover:outline-white/20"
	>
		<NuxtLink :to="`/products/${product.id}`"
			class="flex flex-col h-full"
		>

			<div class="">
				<NuxtImg :src="product.img" height="250"/>
			</div>

			<div class="">
				{{ product.name }}
			</div>

			<div class="flex items-end h-full">
				<span class="text-gray-400">Цена:</span>
				&nbsp;
				<span class="text-green-200/80">{{ product.price }}</span>
			</div>


		</NuxtLink>
	</div>	

</template>