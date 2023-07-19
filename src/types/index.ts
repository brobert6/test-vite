export type User = {
	id: number
	first_name: string
	last_name: string
	photo_url: string
}

export type Role = {
	id: number
	name: string
	type: string
	description: string
	editable: boolean
	active: boolean
	users: User[]
	created_on: string
	modified_on: string
}
