import { useState } from 'react'
import React from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import TodoItems from './TodoItems';
import EditTaskForm from './EditTaskForm';


const TodoWrapper = () => {
    const todoId = uuidv4();

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, {id: todoId, task: todo, completed: false, isEditing: false}])
        
    }

 const toggleCompleted = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {
        ...todo, completed: !todo.completed
    }: todo))
 }

 const deletedTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !==id))
 }

 const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, isEditing: !todo.isEditing
    }: todo))
 }

 const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {
        ...todo, task, isEditing: !todo.isEditing
    }: todo))
 }

  return (
    <div className='TodoWrapper'>
        <h1>Get Task Done!</h1>
     
        {<TodoForm  addTodo={addTodo}/>}

        {todos.map((todo) => (  
            
            todo.isEditing ? (
                <EditTaskForm key={todo.id} updateTodo={editTask} task={todo}/>
            ) : (
                <TodoItems key={todo.id} task={todo}
                toggleCompleted={toggleCompleted} deletedTodo={deletedTodo} updateTodo={updateTodo}  /> 
            )
    
        ))}
      
      
    </div>
  )
}

export default TodoWrapper