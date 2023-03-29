import React, { useEffect, useState } from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetail, login } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [totalUsers, setTotalUsers] = useState(12);
    const [userPerPage, setUserPerPage] = useState(6);
    const [pages, setPages] = useState(2);

    useEffect(() => {
        obtainUsers();
    }, []);
    
    const obtainUsers=()=>{
    getAllUsers().then((r)=>{
        console.log('All users: ',r.data)
        setUsers(r.data);
        setTotalUsers(r.total);
        setUserPerPage(r.per_page)
        setPages(r.total_pages);
    })
    .catch((err)=>{
        alert('Error while retreiving the users: ',err)
    })
    .finally(()=>{
        console.log('Ended obtaining users: ')
        console.table(users)
    })

    }

    const obtainPagedUsers=(page)=>{
        getAllPagedUsers(page)
        .then((r)=>{
            console.log('All Page users: ',r.data)
            setUsers(r.data);
            setTotalUsers(r.total);
            setUserPerPage(r.per_page)
            setPages(r.total_pages);
        })
        .catch((err)=>{
            alert('Error while retreiving the users: ',err)
        })
        .finally(()=>{
            console.log('Ended obtaining users: ')
            console.table(users)
        })

    }

    const obtainUserDetails= (id)=>{
        getUserDetail(id)
        .then((r)=>{
            console.log('User Detail: ',r.data);
            setSelectedUser(r.data)
            
        })
        .catch((err)=>{
            alert('Error while retreiving the users: ',err)
        })
        .finally(()=>{
            console.log('Ended obtaining users: ')
            console.table(selectedUser)
        })
    }

    const authUser= ()=>{
        login('eve.holt@reqres.in','cityslika')
        .then((r)=>{
            console.log('User token: ',r.token);
            sessionStorage.setItem('token',r.token);
            
        })
        .catch((err)=>{
            alert('Error while login the users: ',err)
        })
        .finally(()=>{
            console.log('Ended login users: ')
        })
    }


    return (
        <div>

            {/* Button to simulate login */}
            <button onClick={authUser}>Auth User</button>

            <h2>Users: </h2>
            {users.map((user, i)=>{
                return(
                    <p key={i} onClick={()=>obtainUserDetails(user.id)}>
                        {user.first_name} {user.last_name}
                    </p>
                )
            })}
            <p>Showing {userPerPage} users of {totalUsers} in total.</p>
            <button onClick={()=>obtainPagedUsers(1)}>
                1
            </button>
            <button onClick={()=>obtainPagedUsers(2)}>
                1
            </button>

            <div>
                <h3>User Details</h3>
                {selectedUser != null ? (<div>
                    <p>Name: {selectedUser.name}</p>
                    <p>Last Name: {selectedUser.last_name}</p>
                    <p>Email: {selectedUser.email}</p>
                    <img src={selectedUser.avatar} alt="Avatar User" style={{height:'50px', width:'50px'}} />
                </div>)
                :
                (<h6>Select One User for Details</h6>)
                }
            </div>
        </div>
    );
}

export default FetchExample;
