// store/RoleStore.ts
import { getRoles } from '@/services/RoleService'
import type { Role } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import roleMock from '@/services/roleMock'

export const useRoleStore = defineStore('RoleStore', () => {
	const roles = ref<Role[]>([])

	async function fetchRoles() {
		console.warn('replace this after API is ready')
		//roles.value = await getRoles()
		roles.value = roleMock.getRoles()
	}

	function addRole(role: Role) {
		roles.value.push(role)
		console.warn('addRole when API is ready')
	}

	function updateRole(updatedRole: Role) {
		const index = roles.value.findIndex((role) => role.id === updatedRole.id)

		if (index !== -1) {
			roles.value.splice(index, 1, { ...roles.value[index], ...updatedRole })
			console.log('updateRole when API is ready')
		} else {
			console.error('Role not found:', updatedRole.id)
		}
	}

	function removeRole(index: number) {
		roles.value.splice(index, 1)
		console.warn('removeRole when API is ready')
	}

	// Add other actions as needed
	return {
		roles,
		fetchRoles,
		addRole,
		updateRole,
		removeRole,
	}
})
