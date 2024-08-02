import React from "react";
interface TaskProps {
    key: number,
    task: { id: number; text: string };
    moveTask: (taskId: number, direction: number) => void;
    deleteTask: (taskId: number) => void;
  }
  
const Task: React.FC<TaskProps> = ({key, task, moveTask, deleteTask}) => {
    return (<div key={key}>
        <span>{task.text}</span>
        <button onClick={()=> moveTask(task.id, 1)}>Forward</button>
        <i onClick={()=> moveTask(task.id, -1)}>Backward</i>
        <i onClick={()=> deleteTask(task.id)}>Delete</i>
    </div>)
}
export default Task
//if we use from and to it will know which array to be fetched and which array to be moved
