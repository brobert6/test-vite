<template>
	<div class="col-md-4 mb-4">
		<div class="card">
			<div class="card-body">
				<div class="row">
					<div class="col-md-12 inactive-box">
						<button
							v-if="!role.active"
							class="btn btn-danger btn-inactive"
							style="float: right"
						>
							Inactive
						</button>
					</div>
				</div>
				<h5 class="card-title">{{ role.name }}</h5>
				<h6 class="card-subtitle mb-2 text-muted">{{ role.type }}</h6>
				<p class="card-text">{{ truncateDescription(role.description) }}</p>
				<div class="mb-2 d-flex">
					<!-- Collection of images related to users associated with the role -->
					<template v-if="role.users && usersWithImages.length > 0">
						<div
							v-for="user in usersWithImages.slice(0, 3)"
							:key="user.id"
							class="me-2"
						>
							<img
								:src="user.photo_url"
								:alt="user.first_name"
								class="user-image rounded-circle"
							/>
						</div>
					</template>
					<template v-if="role.users.length > 3">
						<div class="plus-images-box">+{{ role.users.length - 3 }}</div>
					</template>
				</div>
				<div class="row">
					<div class="col-md-6 date-box">
						Date created:
						<span class="creation-date">{{ formatDate(role.created_on) }}</span>
					</div>
					<div class="col-md-6 lock-box" v-if="!role.editable">
						<span style="float: right"> 🔒 </span>
					</div>
					<div class="col-md-6 buttons-box" v-else style="">
						<button class="btn btn-danger btn-inactive edit">Edit</button>
						<button class="btn btn-danger btn-inactive delete">Delete</button>
					</div>
				</div>

				<div class="text-end">
					<!-- Buttons (Edit and Delete) or non-editable indicator will be added dynamically here -->
				</div>
			</div>
		</div>
	</div>
</template>


<script setup lang="ts">
import type { Role } from '@/types'
import { computed } from 'vue'

const props = defineProps<{
	role: Role
}>()

function truncateDescription(description: string) {
	if (description.length > 100) {
		return description.slice(0, 100) + '...'
	}
	return description
}

function formatDate(createdOn: string) {
	const date = new Date(createdOn)
	const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
	const month =
		date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
	const year = date.getFullYear()

	return `${day}/${month}/${year}`
}

const usersWithImages = computed(() => {
	return props.role.users.filter((user) => user.photo_url.length > 0)
})
</script>