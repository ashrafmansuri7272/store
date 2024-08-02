import React, { useState } from "react";
import Column from "./Column";
 

const Kanban: React.FC = () => {
    
    const [tasks, setTasks] = useState({
        backlog: [{id: 0, text: 'task0'}],
        todo: [],
        ongoing: [],
        done: []
    })
    const [newTask, setNewTask] =useState('')

    const moveTask = (taskId, direction) => {

    }   
    const addTask = () => {
        if(newTask.trim() === '') return
        const newTaskObj = {
            id: Date.now(),
            text: newTask
        }
        setTasks(prevTasks => ({
            ...prevTasks,
            backlog: [...prevTasks.backlog, newTaskObj]
        }))
    }
    const deleteTask = (taskId) => {
        
    }

return(
    <>
    <input type='text' placeholder='add New task' value={newTask} onChange={(e)=>setNewTask(e.target.value)}></input>
    <button onClick={addTask}>Create task</button>
   <div className="Kanban-container">
    <Column name='Backlog' tasks={tasks.backlog} moveTask={moveTask} deleteTask={deleteTask}/>
    <Column name='To Do' tasks={tasks.todo}  moveTask={moveTask} deleteTask={deleteTask}/>
    <Column name='Ongoing' tasks={tasks.ongoing}  moveTask={moveTask} deleteTask={deleteTask}/>
    <Column name='Done' tasks={tasks.done}  moveTask={moveTask} deleteTask={deleteTask}/>
   </div>
   </>)
}

export default Kanban