import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    //Valores por defecto
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example', 'Default description', true, LEVELS.NORMAL);
    const defaultTask3 = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log("Modificacion de tareas")
        setLoading(false);
        return () => {
            console.log("Componente desaparece")
        };
    }, [tasks]);



    const changeComponent = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card header */}
                    <div className='card-header p-3 '>
                        <h5>Your Tasks:</h5>
                    </div>
                    {/* Card body */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Descripcion</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/**
                                 * Iterar sobre una lista de tareas
                                 */}
                                {tasks.map((task, index) => {
                                    return (<TaskComponent task={task} key={index}></TaskComponent>)
                                })}

                            </tbody>

                        </table>
                    </div>
                </div>
                    <TaskForm></TaskForm>
            </div>
        </div>
    );
};


export default TaskListComponent;
