import React from "react";
import Task from "./Task";

interface ColumnProps {
    name: string;
    tasks: { id: number; text: string }[];
    moveTask: (taskId: number, direction: number) => void;
    deleteTask: (taskId: number) => void;
  }

const Column: React.FC<ColumnProps> = ({name, tasks, moveTask, deleteTask}) => {
    return (<div>
        <h2>{name}</h2>
        {tasks.map(task=>(
            <Task key={task.id} task={task} moveTask={moveTask} deleteTask={deleteTask}/>
        ))}
    </div>)
}

export default Column