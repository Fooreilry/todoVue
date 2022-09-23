<template>
    <h1 class="title">ToDoList</h1>
    <div class="todo-wrapper">
        <div  class="conteiner">
            <h2 class="todo__title">Add todo in list:</h2>
            <todo-form
            @create="createTodo"
            />
            <todo-list
            :todos="todosCount"
            @remove="removeTodo"
            @complit="saveValue"
            />
            <ul>
                <li v-for="pageNumber in totalPages" :key="pageNumber" @click="changePage(pageNumber)">{{pageNumber}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import useLocalStorage from './hooks/useLocalStorage'
import useTodos from './hooks/useTodos'
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue"
export default {
    // setup(props, todo) {
    //         console.log(props);
    //     const { todos, createTodo } = useTodos(todo)
    //     const {saveTodos} = useLocalStorage(todos)
    //     return {
    //         todos,
    //         createTodo,
    //         saveTodos
    //     }

    // },
    components: {
        TodoForm,
        TodoList,
    },
    data() {
        return {
            todos: [],
            limit: 8,
            totalPages: 0,
            page: 1,
            sortValue: '',
            sortOptions: [
                { value: 'complit', name: 'Выполненные' },
                { value: 'complit', name: 'Невыполненные' }
            ]
        }
    },
    methods: {
        createTodo(todo) {
            this.todos.push(todo)
            this.saveTodos()
        },
        saveValue(todo) {
            console.log(todo);
            this.todos.sort((a, b) => (a.complit > b.complit) ? 1:-1) //Сортировка))))
            this.saveTodos()
        },
        removeTodo(index) {
            console.log(JSON.stringify(localStorage.getItem('todos')).length);
            this.todos.splice(index, 1)
            this.saveTodos()
        },
        // sortTodos(todo) {
        //     if (todo === true) {
                
        //     }
        // },
        changePage(pageNumber) {
            this.page = pageNumber
        },
        saveTodos() {
            try {
                const todosParsed = JSON.stringify(this.todos)
                localStorage.setItem('todos', todosParsed)
            }
            catch(err) {
                console.log(err);
            }

        },
        async loadTodos() {
            const todoData = await localStorage.getItem('todos')
            todoData === null ? this.todos = [] : this.todos = JSON.parse(todoData)
        }
    },
    computed: {
        totalPages() {
            return this.totalPages = Math.ceil(this.todos.length / this.limit)
        },
        todosCount() {
            const start = (this.page -1) * this.limit,
                end = start + this.limit;
            return this.todos.slice(start, end)
        },
    },
    mounted() {
        this.loadTodos()
    },

}
</script>

<style>
    body{
        margin: 0;
        padding: 0;
        font-family: Arial;
        font-size: 17px;
        padding: 8px;
        height: 100%;
        background: -moz-linear-gradient( #4b0082 0%, #000080 50%, #007777 100%) no-repeat;
        background: -webkit-linear-gradient( #4b0082 0%,#000080 50%,#007777 100%)no-repeat;
        background: linear-gradient( #4b0082 0%,#000080 50%,#007777 100%)no-repeat;
        background-attachment: fixed;
        background-size: auto 100%;
    }
    *,
    *::after,
    *::before{
        box-sizing: border-box;
    }
    li{
        list-style-type: none;
        margin: 0;
    }
    ul{
        margin: 0;
        padding: 0;
    }
    .title{
	    font-size: 34px;
	    color:#FFFFFF;
	    text-align: center;
    }
    .todo__title{
        margin: 7px 0;
        font-size: 16px;
    }
    .conteiner{
        width: 100%;
        margin: 0 auto;
        max-width: 800px;
    }
    .todo-wrapper{
        width: 800px;
        margin: 0 auto;
        background-color: #E0FFFF;
        padding: 15px 30px;
        border: 1px solid LightGray;
    }
    .button{
        padding: 10px;
        border: none;
        font-family: Arial;
        font-size: 15px;
        border: 1px solid #000000;
        background: #000080; 
        font-weight: 900;
        color: white;
        border-radius: 3px;
    }


</style>