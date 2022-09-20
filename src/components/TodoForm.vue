<template>
    <div>
        <form class="todo-form" @submit.prevent action="">
            <input v-model.trim="todo.text" class="todo-form__input" type="text">
            <button @click="createTodo" @keypress.enter="createTodo" class="button add-button">Add</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            todo: {
                complit: false,
                text: ''
            }
        }
    },
    methods: {
        createTodo() {
            if (this.todo.text.length !== 0) {
                this.todo.id = Date.now()
                this.$emit('create', this.todo)
                this.todo = {
                text: ''
            }
            }
        },
    },
}
</script>
<style scoped>
    .todo-form{
        display: flex;
    }
    .todo-form__input{
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 12px;
        width: 100%;

    }
    .add-button{
        margin-left: 1%;
        padding: 5px 25px;
    }
    .add-button:hover{
        background: #000040;
    }
</style>