import { ref } from "vue";

export default function formTodo(emit) {
    const todo = ref({})
    const body = ref('')
    const createTodo = () => {
        if (body.length !== 0) {
            todo.id = Date.now()
            todo.text = body
            todo.complit = false
            emit('create', todo)
            body.value = ''
        }

    }

    return {
        todo,
        body,
        createTodo
    }
}