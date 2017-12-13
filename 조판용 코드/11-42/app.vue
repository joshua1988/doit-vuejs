<script>
removeTodo(todoItem, index) {
	this.$emit('removeTodo', todoItem, index);
}
</script>