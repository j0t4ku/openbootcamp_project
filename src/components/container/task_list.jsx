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


    function completeTask(task){
        console.log('Complete this task: ', task)
        const index= tasks.indexOf(task);
        const tempTask= [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        //Modificar el estado de la tarea
        setTasks(tempTask);
    }

    function deleteTask(task){
        console.log('Complete this task: ', task)
        const index= tasks.indexOf(task);
        const tempTask= [...tasks];
        //delete task
        tempTask.splice(index,1)
        setTasks(tempTask)
    }

    function addTask(task){
        const tempTask= [...tasks];
        tempTask.push(task);
        setTasks(tempTask)
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
                                    return (<TaskComponent 
                                        task={task} 
                                        key={index} 
                                        complete={completeTask}
                                        deleteTask={deleteTask}
                                        ></TaskComponent>)
                                })}

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
                    <TaskForm add={addTask}></TaskForm>
        </div>
    );
};


export default TaskListComponent;
