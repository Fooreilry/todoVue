<template>
    <h1 class="title">ToDoList</h1>
    <div class="todo-wrapper">
        <div  class="conteiner">
            <h2 class="todo__title">Add todo in list:</h2>
            <todo-form
            @create="createTodo"
            />
            <div class="todos-filter">
                <todo-select
                :options="filteOptions"
                v-model="sortValue"
                />
            </div>
            <todo-list
            :todos="filterValue"
            @remove="removeTodo"
            />
            <ul class="pagination">
                <li v-for="pageNumber in totalPages" :key="pageNumber">
                    <button class="pagination-button" :class="{active: page === pageNumber}" @click="changePage(pageNumber)">{{pageNumber}}</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue"
import TodoSelect from "./components/UI/TodoSelect.vue";
export default {
    components: {
    TodoForm,
    TodoList,
    TodoSelect
},
    data() {
        return {
            todos: [],
            // limit: 8,
            // totalPages: 0,
            // page: 1,
            sortValue: '',
            filteOptions: [
                { value: 'complit', name: 'Выполненные' },
                { value: 'uncomplit', name: 'Невыполненные' }
            ]
        }
    },
    methods: {
        createTodo(todo) {
            this.todos.push(todo)
        },
        removeTodo(todo) {
            this.todos = this.todos.filter(e => e.id !== todo.id)
        },
        
        // changePage(pageNumber) {
        //     this.page = pageNumber
        // }
    },
    computed: {
        // totalPages() {
        //     return this.totalPages = Math.ceil(this.todos.length / this.limit)
        // },
        // todosCount() {
        //     const start = (this.page -1) * this.limit,
        //         end = start + this.limit;
        //     return this.todos.slice(start, end)
        // },
        filterValue() {
            if (this.sortValue === 'complit') {
                return this.todos.filter(e => e.complit === true)
            }
            if (this.sortValue === 'uncomplit') {
                return this.todos.filter(e => e.complit === false)
            }
            return this.todos
        },
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
        display: flex;
        max-width: 800px;
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
    .todos-filter{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        max-width: 370px;
    }
    .todos-filter__button{
        padding: 10px;
        margin-right: 10px;
        border: none;
        font-family: Arial;
        font-size: 15px;
        background: #000080;
        font-weight: 600;
        color: white;
        border-radius: 3px;
    }
    .pagination {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    .pagination li {
        padding: 0 8px;
        flex-grow: 0;
        flex-shrink: 0;
    }

    .pagination-button {
        width: 38px;
        height: 38px;
        background: #adeff7;
        border: 1px solid #adeff7;
        border-radius: 3px;
    }

    .pagination-button:hover {
        background-color: #8feef7;
    }

    .active {
        border: 1px solid #000040;
        width: 38px;
        height: 38px;
        border-radius: 3px;
        background: #000080;
        font-weight: 900;
        color: white;
    }

    .active:hover {
        background: #000080;
    }

    @media (max-width:767px) {
        .title {
            font-size: 24px;
        }

        .todo-wrapper {
            max-width: none;
        }

    }

    @media (max-width:576px) {
        .title {
            font-size: 24px;
        }

        .todo-wrapper {
            max-width: none;
        }
        .todos-filter{
            max-width: none;
        }

    }
</style>