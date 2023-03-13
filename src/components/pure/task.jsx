import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';
import {BsFillTrash3Fill} from 'react-icons/bs';
import {BsToggleOn, BsToggleOff} from 'react-icons/bs';


const TaskComponent = ({ task }) => {
    useEffect(() => {
        console.log("Tarea creada")
        return () => {
            console.log(`Tarea ${task.name} esta destruido`)
        };
    }, [task]);

    /**
     * Funcion que compueba el nivel de la tarea
     */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (<h6 className='mb-0'>
                    <span className='badge bg-primary'>{task.level}</span>
                </h6>);
                break;
            case LEVELS.URGENT:
                return (<h6 className='mb-0'>
                    <span className='badge bg-warning'>{task.level}</span>
                </h6>);
                break;
            case LEVELS.BLOCKING:
                return (<h6 className='mb-0'>
                    <span className='badge bg-danger'>{task.level}</span>
                </h6>);
                break;
            default:
                break;
        }
    }
/**
 * Funcion que retorna un icon segun el estado de la tarea
 * @returns icon 
 */
    function taskIconCompleted(){
        if(task.completed){
            return <BsToggleOn style={{color:'green'}}></BsToggleOn>
        }else{
            return <BsToggleOff></BsToggleOff>
        }
    }

    return (
        <tr className='fw-normal'>
            <th className='task-name'>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span >{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* Ejecutar funcion que retorna el badge por el nivel */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* Ejecucion de funcion para obtener iconos */}
                {taskIconCompleted()}
                <BsFillTrash3Fill style={{color:'tomato'}}></BsFillTrash3Fill>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
