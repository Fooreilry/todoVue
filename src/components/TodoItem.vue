<template>
    <li class= "todo-list__item">
        <div @click="changeStyle" :class="[todo.complit ? 'todo-list__checkbox_complite' : '']" class="todo-list__checkbox"></div>
        <p :class="[todo.complit ? 'todo-list__text_complit' : '']" class="todo-list__text">{{todo.text}}</p>
        <button @click="$emit('remove', index)" class="button button__delete">Delete</button>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        changeStyle() {
            this.todo.complit ? this.todo.complit = false : this.todo.complit = true;
            this.$emit('complit', this.todo.complit);
        }
    },
}
</script>


<style scoped>
    .todo-list__item{
        width: 100%;
        margin-bottom: 10px ;
        padding: 3px 10px;

        background: #adeff7;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 3px;
    }
    .todo-list__checkbox{
        border: 1px solid #000080;
        width: 38px;
        height: 38px;
        border-radius: 3px;
    }
    .todo-list__checkbox:hover{
        background-color: #8feef7;
    }
    .todo-list__checkbox_complite{
        background-color: #0b76ef;
    }
    .todo-list__checkbox_complite::before{
        content: '';
        display: block;
        position: relative;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
        width: 25px;
        height: 25px;
        top: 5px;
        left: 5px;
        
    }
    .todo-list__checkbox_complite:hover{
        background-color: #0b76ef
    }
    .todo-list__text{
        width: 75%;
        text-align: justify;
        word-break:break-all;
        hyphens: auto;
    }
    .todo-list__text_complit{
        text-decoration: line-through;
        color: gray; 
        opacity: .5
    }
    .button__delete{
        background: #800000;
    }
    .button__delete:hover{
        background: #600000;
    }
</style>