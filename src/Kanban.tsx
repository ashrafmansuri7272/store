import React, { useState } from "react";
import Column from "./Column";


const Kanban: React.FC = () => {
    const columns = ['backlog', 'todo', 'ongoing', 'done'];

    const [tasks, setTasks] = useState({
        backlog: [{ id: 0, text: 'task0' }],
        todo: [],
        ongoing: [],
        done: []
    })
    const [newTask, setNewTask] = useState('')

    const moveTask = (taskId, direction) => {
        let taskFound;
        const fromColumn = columns.find(col => {
            taskFound = tasks[col].find(tas => tas.id === taskId)
            return !!taskFound
        })
        const targetColumn = columns[columns.indexOf(fromColumn) + direction];
        if (!targetColumn) return
        setTasks(prevTasks => ({
            ...prevTasks,
            [fromColumn]: prevTasks[fromColumn].filter(tass => tass.id !== taskId),
            [targetColumn]: [...prevTasks[targetColumn], taskFound]
        }))
    }

    const addTask = () => {
        if (newTask.trim() === '') return
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
        let deletetaskIndex;
        setTasks(prevTasks => {
            const currentColumn = columns.find(col => {
                const deletetaskIndex = tasks[col].findIndex(t => t.id === taskId)
                return !!deletetaskIndex
            })
            if (!deletetaskIndex) return prevTasks;
            return {
                ...prevTasks,
                [currentColumn]: prevTasks[currentColumn].splice(deletetaskIndex, 1)
            }
        })
    }

    return (
        <>
            <input type='text' placeholder='add New task' value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>
            <button onClick={addTask}>Create task</button>
            <div className="Kanban-container">
                <Column name='Backlog' tasks={tasks.backlog} moveTask={moveTask} deleteTask={deleteTask} />
                <Column name='To Do' tasks={tasks.todo} moveTask={moveTask} deleteTask={deleteTask} />
                <Column name='Ongoing' tasks={tasks.ongoing} moveTask={moveTask} deleteTask={deleteTask} />
                <Column name='Done' tasks={tasks.done} moveTask={moveTask} deleteTask={deleteTask} />
            </div>
        </>)
}

export default Kanban