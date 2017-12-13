<script>
removeTodo(todoItem, index) {
	localStorage.removeItem(todoItem);
	this.todoItems.splice(index, 1);
}
</script>