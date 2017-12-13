<template>
	<div class="inputBox shadow">
		<input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
		<span class="addContainer" v-on:click="addTodo">
			<i class="addBtn fa fa-plus" aria-hidden="true"></i>
		</span>

		<modal v-if="showModal" @close="showModal = false">
			<h3 slot="header">경고</h3>
			<span slot="footer" @click="showModal = false">할 일을 입력하세요.
				<i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
			</span>
		</modal>
    </div>
</template>
