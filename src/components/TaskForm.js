import React, { useState } from 'react';
import '../stylesheet/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value); // extrae el valor del campo de texto
    };

    const handleShipping = e => {
        e.preventDefault(); // evito que la pag se recargue al enviar el formulario

        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        }
        
        props.onSubmit(newTask);
    };


    return (
        <form className='task-form' onSubmit={handleShipping} >
            <input className='task-input' type='text' placeholder='Write a task' name='text' onChange={handleChange} />
            <button className='task-button'>Add Task</button>
        </form>
    );
}

export default TaskForm;