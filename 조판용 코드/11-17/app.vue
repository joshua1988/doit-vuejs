<script>
    new Vue({
        methods: {
        addTodo() {
                if (this.newTodoItem !== "") {
                    var value = this.newTodoItem && this.newTodoItem.trim();
                    localStorage.setItem(value, value);
                    this.clearInput();
                }
            },
            clearInput() {
                this.newTodoItem = '';
            }
        }
    });
</script>