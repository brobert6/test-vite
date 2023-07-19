<template>
	<div class="container mt-5">
		<!-- Static display title -->
		<h1 class="mb-4">User Roles Management</h1>

		<!-- Search field -->
		<div class="row align-items-center mb-3 search-box">
			<div class="col-md-4 box">
				<div class="input-group">
					<input
						type="text"
						class="form-control"
						id="search"
						placeholder="search"
						v-model="search"
					/>
					<div class="input-group-text">🔎</div>
				</div>
			</div>

			<!-- Filter dropdown -->
			<div class="col-md-4 box">
				<div class="mb-3">
					<label for="filter-dropdown" class="form-label"
						>Filter by Status:</label
					>
					<select
						class="form-select"
						id="filter-dropdown"
						@change="updateStatus"
						v-model="selectedStatus"
					>
						<option value="all">Active and Inactive</option>
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
					</select>
				</div>
			</div>
			<!-- Button for adding new roles -->
			<div class="col-md-4 box">
				<button
					class="btn btn-success mb-4 btn-new-role float-right"
					data-bs-toggle="modal"
					data-bs-target="#addRoleModal"
				>
					Add New Role
				</button>
			</div>
		</div>

		<!-- Role Cards -->
		<div class="row">
			<role-card v-for="role in filteredRoles" :role="role" :key="role.id">
			</role-card>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { Role } from '@/types'
import { useRoleStore } from '@/stores/RoleStore'
import RoleCard from '@/components/role/RoleCard.vue'

const newRole = ref('')
const roleStore = useRoleStore()
const search = ref('')
const selectedStatus = ref('all')

onMounted((): void => {
	roleStore.fetchRoles()
})

function loadDetails(id: number) {
	console.log('...loading ' + id.toString())
}

function updateStatus() {}

const filteredRoles = computed(() => {
	roleStore.roles
	const searchString = search.value.toLowerCase()

	return roleStore.roles.filter((role) => {
		const nameMatches = role.name.toLowerCase().includes(searchString)
		const typeMatches = role.type.toLowerCase().includes(searchString)
		const descriptionMatches = role.description
			.toLowerCase()
			.includes(searchString)
		const statusMatches =
			selectedStatus.value === 'all' ||
			(selectedStatus.value === 'active' && role.active) ||
			(selectedStatus.value === 'inactive' && !role.active)

		return (nameMatches || typeMatches || descriptionMatches) && statusMatches
	})
})
</script>

<style scoped>
</style>