<template>
	<div class="modal-header">
		<h5 class="modal-title" id="addRoleModalLabel">Add New Role</h5>
		<button
			type="button"
			class="btn-close"
			data-bs-dismiss="modal"
			aria-label="Close"
		></button>
	</div>
	<div class="modal-body">
		<!-- Form for adding a new role -->
		<form>
			<div class="mb-3">
				<label for="role-name" class="form-label">Role Name</label>
				<input type="text" class="form-control" id="role-name" required />
			</div>
			<div class="mb-3">
				<label for="role-type" class="form-label">Role Type</label>
				<input type="text" class="form-control" id="role-type" required />
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
				></textarea>
			</div>
			<div class="mb-3">
				<label for="role-images" class="form-label"
					>Images relating to users associated with the role</label
				>
				<input
					type="file"
					class="form-control"
					id="role-images"
					multiple
					required
				/>
			</div>
			<button type="submit" class="btn btn-primary">Add Role</button>
		</form>
	</div>
</template>
<script setup lang="ts">
</script>