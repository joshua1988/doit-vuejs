<script>
addTodo() {
	if (this.newTodoItem !== "") {
		var value = this.newTodoItem && this.newTodoItem.trim();
		localStorage.setItem(value, value);
		this.propsdata.push(value);
		this.clearInput();
	}
},
</script>