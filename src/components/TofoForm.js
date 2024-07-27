import React from 'react'
import { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const[value, setValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if(value !== '')
          {
            addTodo(value)
            setValue("")
          }
    }
     
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' 
        className='todo-input' 
        placeholder='What to do today?'
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        />
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
