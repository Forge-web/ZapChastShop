<script setup lang="ts">

</script>

<template>

	<div class="flex flex-col gap-5 w-full bg-gray-800 p-5 rounded-xl">
		
		<ul class="flex flex-col gap-5 list-inside">
			<AboutUsItemLi :header="'О проекте'">
				<div class="">
					ZapChast Shop это простой демо сайт, где показываются возможности
					<span class="text-lg text-green-500">
						<NuxtLink to="https://tailwindcss.com/"
							class="border-b border-gray-500"
						>
							Tailwindcss
						</NuxtLink>
					</span>
					, а также возможности фреймворка 
					<span class="text-lg text-green-500 flex-inline">
						<NuxtLink to="https://tailwindcss.com/"
							class="border-b border-gray-500 flex-inline w-max gap-1"
						>
							<UIcon
								class="w-5 h-5 self-center flex-inline"
								name="devicon:nuxt"
							/>
							Nuxt
						</NuxtLink>
					</span>
				</div>
			</AboutUsItemLi>
			<AboutUsItemLi :header="'Ссылки на проекты'">
				<NuxtLink
						class="flex gap-5 hover:outline-dashed hover:outline-green-600/80 p-3 rounded-xl"
						to="https://github.com/Forge-web/ZapChastShop"
					>
						<UIcon 
							name="akar-icons:github-fill"
							class="w-8 h-8"
						/>
			
						github.com/Forge-web/ZapChastShop
					</NuxtLink>
			
					
					<NuxtLink 
						class="flex gap-5 hover:outline-dashed hover:outline-green-600/80 p-3 rounded-xl"
						to="https://github.com/phored-creator/TRacing"
					>
						<UIcon 
							name="akar-icons:github-fill"
							class="w-8 h-8"
						/>
			
						github.com/phored-creator/TRacing
					</NuxtLink>
			</AboutUsItemLi>
		</ul>
	</div>

</template>