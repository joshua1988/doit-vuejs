<template>
	<div id="app">
		<TodoHeader></TodoHeader>
		<TodoInput v-bind:propsdata="todoItems"></TodoInput>
		<TodoList v-bind:propsdata="todoItems"></TodoList>
		<TodoFooter></TodoFooter>
	</div>
</template>