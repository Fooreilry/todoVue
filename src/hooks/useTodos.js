import { ref } from "vue"

export default function useTodos(todo) {
    const todos = ref([])

        const createTodo = (todo) => {
            todos.value.push(todo)
    }
    
        return {
            todos,
            createTodo
        }
}