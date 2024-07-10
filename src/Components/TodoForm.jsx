import { useState } from 'react'
import React from 'react'



const TodoForm = ({addTodo}) => {

    const [inputValue, setInputValue] = useState("")

    const handleBtn = (e) => {
        e.preventDefault()

        addTodo(inputValue);
        setInputValue("")

    }
  return (
    <form className='Todo' onSubmit={handleBtn}>

        <input type="text" className='todo-input' 
         value={inputValue}
         placeholder="What is Today's Task?" 
         onChange={(e) => setInputValue(e.target.value)} />

         <button type="submit" className='todo-btn'>Add Task!</button>

    </form>
  )
}

export default TodoForm