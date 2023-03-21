import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const TaskForm = ({ add, length }) => {
    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL
    }
    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .required('Name is required'),
            description: Yup.string()
                .required('Description is required'),
            level: Yup.string()
                .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select a Level')
                .required('Role is required')

        }
    )

    function addTask(values) {
        const newTask = new Task(
            values.name,
            values.description,
            false,
            values.level
        );
        add(newTask);
    }

    return (
        <div>
            <h4>Task Form</h4>
            <Formik
                initialValues={initialValues}
                //Yup Validation
                validationSchema={taskSchema}
                // Submit Event
                onSubmit={(values) => { addTask(values) }}
            >
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => {
                    return (
                        <Form>
                            <label htmlFor="name">Name</label>
                            {/* Email Errors */}
                            {
                                errors.name && touched.name && (
                                    <ErrorMessage name='name' component='div'></ErrorMessage>
                                )
                            }
                            <Field className='form-control form-control-lg' id="name" name="name" ></Field>

                            <label htmlFor="description">Description</label>
                            {/* Description Errors */}
                            {
                                errors.description && touched.description && (
                                    <ErrorMessage name='description' component='div'></ErrorMessage>
                                )
                            }
                            <Field className='form-control form-control-lg' id="description" name="description" ></Field>

                            <label htmlFor="level">Level</label>
                            {
                                errors.level && touched.level && (
                                    <ErrorMessage name='level' component='div'></ErrorMessage>
                                )
                            }
                            <Field className='form-control form-control-lg'
                                as="select" id="level" name="level" >
                                <option value={LEVELS.NORMAL}>
                                    Normal
                                </option>
                                <option value={LEVELS.URGENT}>
                                    Urgente
                                </option>
                                <option value={LEVELS.BLOCKING}>
                                    Blocking
                                </option>
                            </Field>

                            <button className='btn btn-success btn-lg ms-2 mt-3' type="submit">
                            {length>0? 'Añadir Tarea': 'Crear primera tarea'}
                            </button>
                            {
                                isSubmitting ? (<p>Adding task</p>) : null
                            }
                        </Form>
                    );
                }}

            </Formik>
        </div>
    );
}

TaskForm.protoType = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
