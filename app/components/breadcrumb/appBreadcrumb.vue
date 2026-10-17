<!-- components/AppBreadcrumb.vue -->
<script setup lang="ts">
const route = useRoute()

const crumbs = computed(() => {
	const paths = route.path.split('/').filter(Boolean)
	const items = [{ label: 'Home', to: '/' }]

	paths.forEach((path, index) => {
		const to = '/' + paths.slice(0, index + 1).join('/')
		const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
		items.push({ label, to })
	})

	return items
})
</script>

<template>
	<nav class="" aria-label="Breadcrumb">
		<ul class="flex justify-start">
			<li 
				class="flex items-end" 
				v-for="(crumb, i) in crumbs" :key="crumb.to"
			>
			
				<NuxtLink class=""  v-if="i < crumbs.length - 1" :to="crumb.to">
					{{ crumb.label.toLowerCase() }}
				</NuxtLink>
				
				<span class="text-gray-500" v-else>{{ crumb.label.toLowerCase() }}</span>

				<UIcon
					v-if="i < crumbs.length - 1"
					name="zondicons:cheveron-right"
					class="text-green-400 self-end w-4 h-4 shrink-0 text-gray-300"
					aria-hidden="true"
				/>
			</li>
		</ul>
	</nav>
</template>