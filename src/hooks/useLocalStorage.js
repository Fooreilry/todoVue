import { onMounted, ref } from 'vue'
export default function useLocalStorage(todos) {
    const saveTodos = () => {
        try {
            const todosParsed = JSON.stringify(todos.value)
            localStorage.setItem('todos', todosParsed)
        }
        catch(err) {
            console.log(err);
        }
    }
    const loadTodos = async() => {
        const todoData = await localStorage.getItem('todos')
        todoData === null ? todos.value = [] : todos.value = JSON.parse(todoData)
    }

    onMounted(loadTodos)

    return {
        saveTodos,
    }
}