import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add, length }) => {

    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
             nameRef.current.value,
             descriptionRef.current.value,
             false,
             levelRef.current.value
        );
        add(newTask);
    }

    const normaStyle={
        color:'blue',
        fontWeight: 'bold'
    }
    const urgentStyle={
        color:'yellow',
        fontWeight: 'bold'
    }
    const blokingStyle={
        color:'red',
        fontWeight: 'bold'
    }


    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input className='form-control form-control-lg' type="text" ref={nameRef} id='inputName' placeholder='Ingrese el Nombre' required autoFocus />
                <input className='form-control form-control-lg' type="text" ref={descriptionRef} id='inputDescription' placeholder='Ingrese la Descripcion' required />
                <label htmlFor="selectLevel" className='sr-only'>Priority</label>
                <select className='form-control-lg' name="selectLevel" id="selectLevel" ref={levelRef} defaultValue={LEVELS.NORMAL}>
                    <option value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option value={LEVELS.URGENT}>
                        Urgente
                    </option>
                    <option  value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
                <button type="submit" className='btn btn-success btn-lg ms-2' onClick={addTask}>
                    {length>0? 'Añadir Tarea': 'Crear primera tarea'}
                </button>
            </div>
        </form>
    );
}

TaskForm.protoType = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
