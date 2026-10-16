<script setup lang="ts">

const route = useRoute();

const products = ref(getProducts().byId(Number(route.params.id))!);

const modalWin = ref(false);

</script>

<template>

	<div class="flex w-full gap-5">

		<div class="">
			<NuxtImg :src="products.img" height="500"/>
		</div>

		<div class="flex flex-col gap-5">
			
			<div class="text-3xl">
				{{ products.name }}
			</div>
			
			<div class="text-lg">
				{{ products.desc }}
			</div>

			<div class="text-xl">
				Цена: {{ products.price }}
			</div>

			<div 
				@click="modalWin=true"
				class="cursor-pointer p-5 bg-red-400/50 w-max rounded-lg duration-500 hover:scale-125"
			>
				Купить
			</div>
		</div>
	</div>


<Teleport to="#teleports">
	<div v-if="modalWin" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
	
		<div class="flex flex-col max-w-150 w-full outline-dashed outline-black">
			<div class="w-max p-3 text-white cursor-pointer bg-gray-900/80 rounded-xl" @click="modalWin=false">
				cancel
			</div>

			<div class="">
				<div class="text-gray-200">
					Тут такое дело, я не успел сделать корзину, но вы отправте деньги на<br>
					+7 900 122 32 23 тбанк. Спасибо
				</div>
			</div>

		</div>

	</div>
</Teleport>
</template>