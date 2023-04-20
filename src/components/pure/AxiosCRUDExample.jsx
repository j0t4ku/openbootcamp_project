import React from 'react';
import { createUser, deleteUserByID, getUserByID, login, updateUserById } from '../../services/axiosCRUDServices';


const AxiosCRUDExample = () => {

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email('Invalid Email Format')
                .required('Email is required'),
            password: Yup.string().required('Password is requireed')
        }
    )
    const initialCredentials = {
        email: '',
        password: ''
    }

    const authUser =(values)=>{
        login(values.email,values.password)
        .then((r)=>{
            if(r.data.token){
                alert(JSON.stringify(r.data))
                sessionStorage.setItem('token', r.data.token)
            }else{
                sessionStorage.removeItem('token')
                throw new Erro('Login Failure')
            }
        })
        .catch((err)=>{
            alert('Somthing ',err)
            sessionStorage.removeItem('token')
        })
        .finally(()=>{
            console.log('login done')
        })
    }

    //CURD Examples

    const obtainAllUser=()=>{
        getAllUser()
        .then((r)=>{
            alert(JSON.stringify(r.data.data))
        })
        .catch((err)=>{
            alert('Somthing wnet wrong:', err)
        })
    }

    const obtainAllPageUser=(page)=>{
        getAllPageUser(page)
        .then((r)=>{
            if(r.data.data && r.status=== 200){
                alert(JSON.stringify(r.data.data))
            }else{
                throw new Error('User not found in page:', page)
            }
        })
        .catch((err)=>{
            alert('Somthing went wrong:', err)
        })
    }

    const obtainUserByID=(id)=>{
        getUserByID(id)
        .then((r)=>{
            if(r.data.data && r.status=== 200){
                alert(JSON.stringify(r.data.data))
            }else{
                throw new Error('User not found')
            }
        })
        .catch((err)=>{
            alert('Something went wrong:', err)
        })
    }

    const createNewUser=(name, job)=>{
        createUser(name, job)
        .then((r)=>{
            if(r.data && r.status=== 201){
                alert(JSON.stringify(r.data))
            }else{
                throw new Error('User not created')
            }
        })
        .catch((err)=>{
            alert('Something went wrong:', err)
        })
    }

    const updateUser=(id,name,job)=>{
        updateUserById(id,name,job)
        .then((r)=>{
            if(r.data && r.status=== 200){
                alert(JSON.stringify(r.data.data))
            }else{
                throw new Error('User not found and not update')
            }
        })
        .catch((err)=>{
            alert('Something went wrong:', err)
        })
    }

    const deleteUser=(id)=>{
        deleteUserByID(id)
        .then((r)=>{
            if(r.status=== 204){
                alert('User deleted Succesfull')
            }else{
                throw new Error('User not found and no deleted')
            }
        })
        .catch((err)=>{
            alert('Something went wrong:', err)
        })
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // Initial Values
                initialValues={initialCredentials}
                //Yup Validation
                validationSchema={loginSchema}
                //Onsubmit Event
                onSubmit={async (values) => {
                    authUser(values)
                }}
            >
                {/* We obtain props from formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => {
                    return (
                        < Form >
                            <label htmlFor="">Email</label>
                            {/* Email Errors */}
                            {
                                errors.email && touched.email && (
                                    <div className='errors'>
                                        <p>{errors.email}</p>
                                    </div>
                                )
                            }
                            <Field id="email" name="email" ></Field>
                            <label htmlFor="">Password</label>
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && (
                                        <ErrorMessage name="password" component='div'>
                                        </ErrorMessage>
                                )
                            }
                            <Field type="password" id="password" name="password"></Field>
                            <button type="submit">Login</button>
                            {
                                isSubmitting ? (
                                        <ErrorMessage name="password" component='div'>
                                        </ErrorMessage>
                                ) : null
                            }
                        </Form>
                    )
                }}
            </Formik>

            <div>
                <button onClick={obtainAllUser}>Get All User with Axios</button>
                <button onClick={()=>{obtainAllPageUser(1)}}>Get All User with Axios</button>
                <button onClick={()=>{obtainUserByID(1)}}>Get User with id= 1</button>
                <button onClick={()=>{createNewUser('jota','jota')}}>Create User</button>
                <button onClick={()=>{updateUser(1,'jota','jota')}}>Update User with id 1</button>
                <button onClick={()=>{deleteUser(1)}}>Delete User with id 1</button>

            </div>
        </div >
    );
}

export default AxiosCRUDExample;
