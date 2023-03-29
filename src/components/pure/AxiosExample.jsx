import React, { useEffect, useState } from 'react';
import { getRandomUser } from '../../services/axiosService';

const AxiosExample = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        obtainUser
    }, []);


    const obtainUser=()=>{
        getRandomUser()
            .then((r) => {
                if(r.status==200){
                    console.log(r)
                    setUser(r.data.results)
                }
            })
            .catch((err) => {
                alert('Error in get user: ', err)
            })
    }

    return (
        <div>
            <h1>Axios Example</h1>
            {user != null ? 
            (
                <div>
                    <img src={user.picture.large} alt="Avatar" />
                    <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                    <h3>{user.email}</h3>

                </div>
            )
            :
            (
                <div>
                    <p>Generate a new User</p>
                    <button onClick={obtainUser}>Generate</button>
                </div>
            )
            }
        </div>
    );
}

export default AxiosExample;
