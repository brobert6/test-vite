import { createRouter, createWebHistory } from 'vue-router'
import Roles from '../components/pages/role/Roles.vue'
import RoleDetails from '../components/pages/role/RoleDetails.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Roles,
		},
		{
			name: 'roles',
			path: '/roles',
			component: Roles,
		},
		{
			name: 'roleReveal',
			path: '/role/:id',
			component: RoleDetails,
		},
		,
		{
			name: 'roleReveal',
			path: '/role/create',
			component: RoleDetails,
		},
	],
})

export default router
