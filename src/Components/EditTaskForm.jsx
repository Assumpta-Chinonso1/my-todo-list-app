import { useState } from 'react'
import React from 'react'



const EditTaskForm = ({updateTodo, task}) => {

    const [inputValue, setInputValue] = useState(task.task)

    const handleBtn = (e) => {
        e.preventDefault()

        updateTodo(inputValue, task.id);
        setInputValue("")

    }
  return (
    <form className='Todo' onSubmit={handleBtn}>

        <input type="text" className='todo-input' 
         value={inputValue}
         placeholder="Update Today's Task?" 
         onChange={(e) => setInputValue(e.target.value)} />

         <button type="submit" className='todo-btn'>Update Task!</button>

    </form>
  )
}

export default EditTaskForm