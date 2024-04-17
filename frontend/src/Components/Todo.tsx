import { useEffect, useState } from "react"
import { TodoType, TodoTypeId } from "../Constants"
import { addTodos, deleteTodos, fetchTodos, toggleTodos } from "../Api/Api"
import TodoInput from "./TodoInput"
import TodoCard from "./TodoCard"
const Todo = () => {

    const [todos, setTodos] = useState<TodoTypeId[]>([])
    const [flag, setFlag] = useState<boolean>(false)

    const handleAddTodos = (data: TodoType) => {
        addTodos(data).then(() => {
            fetchTodos().then((res) => {
                setTodos(res)
            })
        })
    }

    const handleToggleTodos = (id: number, status: boolean) => {
        toggleTodos(id, status).then(() => {
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === id ? { ...todo, status: !status } : todo
                )
            );
        })
    }

    const handleDeleteTodos = (id: number) => {
        deleteTodos(id).then(() => (
            setTodos((prevTodos) =>
                prevTodos.filter((todo) => {
                    if (todo.id !== id) {
                        return todo
                    }
                }
                )
            )
        ))
    }

    useEffect(() => {
        fetchTodos().then((res) => {
            console.log(res);
            setTodos(res)
        })
    }, [])

    return (
        <div>
            <div>
                <TodoInput handleAddTodos={handleAddTodos} />
            </div>
            <div>
                {
                    todos?.map((todo, ind) => (
                        <TodoCard key={todo.id} {...todo} handleToggleTodos={handleToggleTodos} handleDeleteTodos={handleDeleteTodos} />
                    ))
                }
            </div>
        </div>
    )
}

export default Todo