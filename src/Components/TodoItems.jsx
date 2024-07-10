import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoItems = ({task, toggleCompleted, deletedTodo, updateTodo}) => {
  return (
    <div className='Todo'>
        <p onClick={() => toggleCompleted(task.id)} 
        className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => updateTodo(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={()=> deletedTodo(task.id)}/>
        </div>

    </div>
  )
}

export default TodoItems