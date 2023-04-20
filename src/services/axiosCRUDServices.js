import axios from 'axios'

/**
 * login method to ReqRes endpoint
 * @param {string} email 
 * @param {string} password 
 */
export const login= (email,password)=>{
    const body = {
        email: email,
        password: password
    }

    //return the response with a promise
    return axios.post('https://reqres.in/api/login', body)

}


//get all user
export const getAllUser = ()=>{
    return axios.get('https://reqres.in/api/users')
}

//get all pages users
export const getAllPageUser = (page)=>{
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

//get user by ID
export const getUserByID = (id)=>{
    return axios.get(`https://reqres.in/api/users/${id}`)
}

//Create an user
export const createUser=(name,job)=>{
    const body = {
        name: name,
        job: job
    }

    //return the response with a promise
    return axios.post('https://reqres.in/api/create', body)

}

//Update an user
export const updateUserById=(id, name,job)=>{
    const body = {
        name: name,
        job: job
    }

    //return the response with a promise
    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

//Delete user by ID
export const deleteUserByID = (id)=>{
    return axios.delete(`https://reqres.in/api/users/${id}`)
}