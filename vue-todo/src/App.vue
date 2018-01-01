<template>
  <div id="app">
    <!-- component naming #1 -->
    <TodoHeader></TodoHeader>
    <TodoInput v-bind:passed-data="todoItems"></TodoInput>
    <TodoList v-bind:passedData="todoItems" v-on:removeTodo="removeTodo"></TodoList>
    <TodoFooter v-bind:passedData="todoItems" @clearLocalStorage="clearLocalStorage"></TodoFooter>
  </div>
</template>

<script>
// Component Registration
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data () {
    return {
      todoItems: []
    }
  },
  watch: {
    todoItems: {
      handler: function (todo) {
        console.log("changed");
      }
    }
  },
  created() {
		if (localStorage.length > 0) {
			for ( var i = 0, len = localStorage.length; i < len; ++i ) {
				this.todoItems.push(localStorage.key(i));
			}
		}
  },
  methods: {
    clearLocalStorage() {
      localStorage.clear();
      this.todoItems = [];
    },
    removeTodo(item, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(item);
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  },
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>
