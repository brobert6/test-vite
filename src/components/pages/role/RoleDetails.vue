<template>
	<div class="container mt-5" v-if="role">
		<form @submit.prevent="handleSubmit">
			<div class="mb-3">
				<label for="role-name" class="form-label">Role Name</label>
				<input
					type="text"
					class="form-control"
					id="role-name"
					required
					v-model="role.name"
				/>
			</div>
			<div class="mb-3">
				<label for="role-type" class="form-label">Role Type</label>
				<input
					type="text"
					class="form-control"
					id="role-type"
					required
					v-model="role.type"
				/>
			</div>
			<div class="mb-3">
				<label for="role-description" class="form-label"
					>Role Description</label
				>
				<textarea
					class="form-control"
					id="role-description"
					rows="3"
					required
					v-model="role.description"
				></textarea>
			</div>

			<div class="mb-3">
				<label for="role-description" class="form-label">Users</label>
				<ul>
					<li v-for="user in role.users" :key="user.id">
						<div>
							<img
								:src="user.photo_url"
								alt="User Image"
								class="plus-images-box"
							/>
							<span>{{ user.first_name }} {{ user.last_name }}</span>
						</div>
					</li>
				</ul>
				<p>TODO: Add multiple select with list of users, so we can edit them</p>
			</div>

			<button type="submit" class="btn btn-primary">
				{{ role.id > 0 ? 'Update' : 'Add Role' }}
			</button>
			<button class="btn btn-secondary" @click="backToList()">Cancel</button>
		</form>
	</div>
</template>
<script setup lang="ts">
import { useRoleStore } from '@/stores/RoleStore'
import { PageType, type Role } from '@/types'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps<{
	pageType: PageType
}>()

const roleStore = useRoleStore()

const route = useRoute()
const router = useRouter()
const itemId = route.params.id as string

const role = ref<Role>()

onMounted((): void => {
	if (!roleStore.roles.length) roleStore.fetchRoles()

	if (props.pageType === PageType.CREATE) {
		role.value = {
			id: 0,
			name: '',
			type: '',
			description: '',
			users: [],
			created_on: '',
			editable: false,
			active: true,
			modified_on: '',
		}
	} else {
		role.value = roleStore.roles.find((r) => r.id.toString() === itemId)
	}
})

function handleSubmit() {
	if (props.pageType === PageType.CREATE) {
		roleStore.addRole(role.value!)
	} else {
		roleStore.updateRole(role.value!)
	}
	router.push({
		name: 'roles',
	})
}

function backToList() {
	router.push({
		name: 'roles',
	})
}
</script>