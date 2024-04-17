import React, { useState } from 'react'
import { TodoType } from '../Constants'

export type TodoInputProps = {
  handleAddTodos: (newTodo: TodoType) => void
}

const TodoInput = ({ handleAddTodos }: TodoInputProps) => {

  const [inputVal, setInputVal] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let newObj: TodoType = {
      title: inputVal,
      status: false
    }
    handleAddTodos(newObj)
    setInputVal("");
  }

  return (
    <div className='flex justify-center gap-4 m-4'>
      <form onSubmit={handleSubmit} className='flex gap-4'>
        <input type="text" className='border-2 border-black rounded-md' value={inputVal} onChange={handleChange} />
        {/* <button className='border-2 bg bg-green-500 p-1 rounded-md'>Add Todo</button> */}
      </form>
    </div>
  )
}

export default TodoInput