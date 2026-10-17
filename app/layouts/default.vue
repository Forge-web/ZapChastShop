<script setup lang="ts">
import AppBreadcrumb from '~/components/breadcrumb/appBreadcrumb.vue';
import ButtonHeader from '~/components/buttons/buttonHeader.vue';


useHead({
	title: "ZapChast Shop"
});

const pagesHeader = [
	{text: "Главная", url: "/", active: true},
	{text: "Товары", url: "/products", active: true},
	{text: "О нас", url: "/aboutUs", active: true},
]


</script>

<template>

	<div class="flex flex-col min-h-screen">

		
		<header class="flex justify-center">
			<div class="flex justify-between items-center p-3 max-w-200 w-full rounded-b-xl bg-gray-800 text-white">
				
				<!-- Логотип (слева) -->
				<NuxtLink class="duration-300 hover:bg-gray-400/20 p-3 rounded-lg" to="/">ZapChast Shop</NuxtLink>
				
				<!-- Кнопка для мобилок -->
				<!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#headerNav">
					<span class="navbar-toggler-icon"></span>
				</button> -->

				<!-- Меню (уедет вправо благодаря ms-auto на списке) -->
				<div class="" id="headerNav">
					<ul class="flex mb-2 md:mb-0">
						<li v-for="page in pagesHeader">
							<ButtonHeader :text="page.text" :url="page.url" :active="page.active"/>
						</li>
					</ul>
				</div>

			</div>
		</header>
		
	
		
		<main class="flex flex-col max-w-200 w-full self-center">
			<div class="mt-2">
				<AppBreadcrumb />
			</div>
			<div class="my-4 w-full">
				<slot />
			</div>
		</main>
	
	
		
		<footer class="mt-auto flex justify-center">
			<div class="max-w-200 w-full bg-gray-800 text-white p-4 rounded-t-xl">
				<span>© 2026 Ваша Компания</span>
				<div class="d-none d-sm-block">
					
				</div>
			</div>
		</footer>
		
	</div>


</template>