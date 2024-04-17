import React from 'react'
import { TodoType, TodoTypeId } from '../Constants'

interface TodoCardprops extends TodoTypeId {
  handleDeleteTodos: (id: number) => void;
  handleToggleTodos: (id: number, status: boolean) => void
}

const TodoCard = ({ id, title, status, handleDeleteTodos, handleToggleTodos }: TodoCardprops) => {
  return (
    <div className='flex justify-evenly border-black border-2 gap-4 m-4 p-4'>
      <p className='text-bold'>{id}</p>
      <p className='text-bold'>{title}</p>
      <p>{status ? "Completed" : "Not Completed"}</p>
      <button className='bg-blue-500 text-white p-2 rounded-md' onClick={() => handleToggleTodos(id, status)}>Toggle</button>
      <button className='bg-red-500 text-white p-2 rounded-md' onClick={() => handleDeleteTodos(id)}>Delete</button>
    </div>
  )
}

export default TodoCard