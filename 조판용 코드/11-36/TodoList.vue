<script>
export default {
	props: ['propsdata'],
	data() {
		return {
			todoItems: []
		}
	},
	created() {
		for (var key in localStorage) {
			this.todoItems.push(key);
		}
	},
	methods: {
		removeTodo(todoItem, index) {
			localStorage.removeItem(todoItem);
			this.todoItems.splice(index, 1);
		}
	}
}
</script>
