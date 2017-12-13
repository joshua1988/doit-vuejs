<script>
    new Vue({
        methods: {
            addTodo() {
                localStorage.setItem(this.newTodoItem, this.newTodoItem);
            }
        }
    })
</script>