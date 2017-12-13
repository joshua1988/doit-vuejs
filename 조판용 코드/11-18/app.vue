<template>
	<div class="inputBox shadow">
		<input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
		<span class="addContainer" v-on:click="addTodo">
			<i class="addBtn fa fa-plus" aria-hidden="true"></i>
		</span>
	</div>
</template>
