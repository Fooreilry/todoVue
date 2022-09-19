<template >
    <ul class="todo-list" v-if="todos.length > 0">
        <todo-item 
        v-for="(todo, index) in todos" 
        :key="todo.id"
        :todo="todo"
        @remove="$emit('remove', index)"
        @complit="$emit('complit', todo.complit)"
        >
    </todo-item>
    </ul>
    <p class="todo-list__none " v-else-if="todos.length === 0">New todos not found</p>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
    components: {
        TodoItem
    },
    props: {
        todos: {
            type: Array,
            required: true
        },
    },
}
</script>
<style scoped>
    .todo-list{
        margin-top: 30px ;
        max-width: 800px;
    }

    
    .todo-list__none{
        text-align: center;
        font-size: 20px;
    }
</style>