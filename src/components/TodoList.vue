<template >
    <ul class="todo-list" v-if="todos.length !== 0">
        <transition-group name="todo-list">
        <todo-item 
            v-for="todo in todos" 
            :key="todo.id"
            :todo="todo"
            @remove="$emit('remove', todo)"
            @complit="$emit('complit', todo.complit)"
            />
        </transition-group>
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
    .todo-list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .todo-list-enter-active,
    .todo-list-leave-active {
      transition: all 0.5s ease;
    }
    .todo-list-enter-from,
    .todo-list-leave-to {
      opacity: 0;
      transform: translateX(90px);
    }

</style>