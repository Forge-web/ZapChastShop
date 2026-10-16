<script setup lang="ts">

const products = ref(getProducts().products);

</script>

<template>

	<div class="flex flex-wrap w-full bg-gray-800 rounded-xl">

		<div 
			v-for="product in products" 
			class="flex flex-col max-w-50 p-5 text-white hover:outline-dashed hover:outline-white/20"
		>
			<NuxtLink :to="`/products/${product.id}`">

				<div class="">
					<NuxtImg :src="product.img" height="250"/>
				</div>
		
				<div class="">
					{{ product.name }}
				</div>
		
				<div class="">
					{{ product.price }}
				</div>
				
				
			</NuxtLink>
		</div>	
	</div>

</template>