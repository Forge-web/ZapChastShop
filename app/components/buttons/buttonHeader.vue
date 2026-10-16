<script setup lang="ts">
	const props = defineProps<{
		text: string,
		url: string,
		active?: boolean
	}>();

	const active = ref(props.active);
</script>

<template>

	<NuxtLink 
		class=""
		:to="props.url"
	>
		<button type="button" class="p-2 rounded-lg cursor-pointer duration-300 hover:bg-gray-400/20" :class="active ? 'nav-link-active' : 'nav-link'">
			{{ props.text }}
		</button>
	</NuxtLink>

</template>