import React,{useState} from 'react'

export const Todo = ({task,toggleComplete,deleteTodo,editTodo,saveEditTodo}) => {
    const [newTask, setNewTask] = useState(task.task);

    const handleEditChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        saveEditTodo(task.id, newTask);
    };
  return (
    <div className='Todo'>
    {task.isEditing ? (
                <form onSubmit={handleEditSubmit}>
                    <input
                        className='edit-input'
                        type='text'
                        value={newTask}
                        onChange={handleEditChange}
                        onBlur={handleEditSubmit}  // Save on blur (optional)
                        autoFocus  // Auto focus the input field
                    />
                </form>
            ) : (

        <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? "completed":''}`}>{task.task}</p>
      
    )}
        <div>
        <i className="fa-thin fa-pen-to-square" onClick={() => editTodo(task.id)}></i>
        <i className="fa-thin fa-trash" onClick={() => deleteTodo(task.id)}></i>
        </div>
     
    </div>
  )
}
