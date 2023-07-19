import type { Role } from '@/types'
import axios from 'axios'

const apiClient = axios.create({
	//baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
	baseURL: import.meta.env.VITE_BASE_URL,
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
})

export const getRoles = (): Promise<Role[]> =>
	apiClient.get('/roles').then((response) => {
		if (response.data) {
			return new Promise((resolve) => resolve(response.data)) as Promise<Role[]>
		} else {
			return Promise.reject(
				`For the form GET on the url '/roles', could not coerce the received response data to a Role array`
			)
		}
	}, defaultApiRejectHandle())

export const getRolesSearched = (
	search: string,
	status: string
): Promise<Role[]> =>
	apiClient.get(`/roles?search=${search}&status=${status}`).then((response) => {
		if (response.data) {
			return new Promise((resolve) => resolve(response.data)) as Promise<Role[]>
		} else {
			return Promise.reject(
				`For the form GET on the url '/roles', could not coerce the received response data to a Role array`
			)
		}
	}, defaultApiRejectHandle())

export const defaultApiRejectHandle = () => (reason: any) => {
	console.error(reason)
	return Promise.reject('Api error: ' + reason)
}
