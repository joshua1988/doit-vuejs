<script>
export default {
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

</script>