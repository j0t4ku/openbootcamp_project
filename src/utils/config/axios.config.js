import axios from 'axios';

// Default Config For Axios

export default axios.create(
    {
        baseURL: 'https://randomuser.me/api',
        responseType: 'json',
        timeout: 5000
    }
)