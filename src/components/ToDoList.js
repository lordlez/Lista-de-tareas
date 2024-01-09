import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import Task from '../components/Task';
import '../stylesheet/ToDoList.css';

function ToDoList() {
    
    const [tasks, setTasks] = useState([]); // Hook

    const addTask = task => {
        console.log(task);
        if(task.text.trim()) { // veo si la cadena no esta vacia
            task.text = task.text.trim(); // trim quito espacios al inicio o al final
            const updatedTasks = [task, ...tasks]; // agrego la tarea al principio del arreglo
            setTasks(updatedTasks);
        }
    };

    const deleteTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    const completeTask = id => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id) {
               task.completed = !task.completed; 
            }
            return task;
        });
        setTasks(updatedTasks);
    };


    return (
        <>
            <TaskForm onSubmit={addTask} />
            <div className='task-list-container'>
                {
                    // reenderizar lista de componentes
                    tasks.map((task) => 
                        <Task key={task.id} id={task.id} text={task.text} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask} />
                    )
                }
            </div>
        </>
    );
}

export default ToDoList;