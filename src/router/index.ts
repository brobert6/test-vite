import { createRouter, createWebHistory } from 'vue-router'
import Roles from '../components/pages/role/Roles.vue'
import RoleDetails from '../components/pages/role/RoleDetails.vue'
import { PageType } from '@/types'

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
			props: {
				pageType: PageType.EDIT,
			},
		},
		,
		{
			name: 'roleCreate',
			path: '/role/create',
			component: RoleDetails,
			props: {
				pageType: PageType.CREATE,
			},
		},
	],
})

export default router
