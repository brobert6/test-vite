<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
	<main class="pt-5 mdb-docs-layout">
		<!-- <RouterView /> -->
		<router-view v-slot="{ Component }">
			<suspense timeout="0">
				<template #default>
					<component :is="Component" :key="$route.path"></component>
				</template>
				<template #fallback>
					<div>Loading content...</div>
				</template>
			</suspense>
		</router-view>
	</main>
</template>

<style scoped>
</style>
