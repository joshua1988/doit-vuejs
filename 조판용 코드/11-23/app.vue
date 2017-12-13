<template>
	<section>
		<ul>
			<li v-for="todoItem in todoItems" class="shadow">
				<i class="checkBtn fa fa-check" aria-hidden="true"></i>
				{{ todoItem }}
				<span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
					<i class="fa fa-trash-o" aria-hidden="true"></i>
				</span>
			</li>
		</ul>
	</section>
</template>
