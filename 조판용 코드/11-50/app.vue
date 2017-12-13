<script>
import Modal from './common/Modal.vue'

export default {
	props: ['propsdata'],
	data() {
		return {
			newTodoItem: '',
			showModal: false
		}
	},
    methods: {
        addTodo() {
			if (this.newTodoItem !== "") {
				var value = this.newTodoItem && this.newTodoItem.trim();
				localStorage.setItem(value, value);
				this.propsdata.push(value);
				this.clearInput();
			} else {
				this.showModal = !this.showModal;
			}
		},
		clearInput() {
			this.newTodoItem = '';
		}
    },
	components: {
		Modal: Modal
	}
}
</script>