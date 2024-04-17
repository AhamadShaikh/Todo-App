import axios from "axios";
import { TodoType } from "../Constants";

// GET
export const fetchTodos = async () => {
    try {
        let res = await axios.get(`http://localhost:3000/todos`)
        return res.data
    } catch (error) {
        console.log(error);

    }
}

//POST
export const addTodos = async (data: TodoType) => {
    try {
        return axios.post(`http://localhost:3000/todos`, data)
    } catch (error) {
        console.log(error);
    }
}

//DELETE
export const deleteTodos = async (todoId: number) => {
    try {
        return axios.delete(`http://localhost:3000/todos/${todoId}`)
    } catch (error) {
        console.log(error);

    }
}

//PATCH
export const toggleTodos = async (todoId: number, status: boolean) => {
    try {
        return axios.patch(`http://localhost:3000/todos/${todoId}`,{ status: !status })
    } catch (error) {
        console.log(error);

    }
}
