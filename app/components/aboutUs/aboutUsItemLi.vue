<script setup lang="ts">
const props = defineProps<{
	header: string
}>();
</script>

<template>

	<li class="flex flex-col gap-1">
		<div class="text-xl">
			{{ props.header }}
		</div>

		<div class="border-l-2 border-green-500/80 ml-5 p-3">
			<slot />
		</div>

	</li>

</template>