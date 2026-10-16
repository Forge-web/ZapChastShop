<script setup lang="ts">


</script>


<template>

	<div class="flex flex-col w-full gap-5">

		<div class="felx w-full bg-gray-800 rounded-lg py-10 text-white">
			<div class="flex w-full justify-center mb-5 text-xl">
				<div class="">Наш магазин - самый лучший, знай!</div>
			</div>
			<div class="flex w-full gap-5 justify-center">
	
				<div class="flex flex-col gap-5">
					<div class="bg-gray-600 p-5 rounded-xl">Запчасти всегда в наличии</div>
					<div class="bg-gray-600 p-5 rounded-xl">Помощь экспертов 25/8</div>
					<div class="bg-gray-600 p-5 rounded-xl">Мгновенная замена или возврат</div>
				</div>
				
				<div class="flex flex-col gap-5">
					<div class="bg-gray-600 p-5 rounded-xl">100% оригинал с гарантией до 2 млн. лет</div>
					<div class="bg-gray-600 p-5 rounded-xl">Бесплатная доставка от 100 лет</div>
					<div class="bg-gray-600 p-5 rounded-xl">Кешбэк 5% бонусами на все</div>
				</div>
	
			</div>
		</div>

		<div class="bg-gray-800 flex text-white gap-5 p-5 rounded-xl">
			<div class="">
				<NuxtImg class="" src="/images/car-lada.png" height="250"/>
			</div>

			<div class="text-lg">
				Машинка, которая часто нуждается в наших деталях.<br>
				P.S. Да, фон не удаляется
			</div>

		</div>

	</div>

</template>