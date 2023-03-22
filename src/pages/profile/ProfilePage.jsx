import React from 'react';
import {useNavigate} from 'react-router-dom';

const ProfilePage = ({user}) => {
    const navigate= useNavigate();
    
    return (
        <div>
            <h1>Welcome to Profile</h1>
            <button onClick={()=>navigate('/task')}>Task</button>
            <button onClick={()=>navigate(-1)}>Go bak</button>
        </div>
    );
}

export default ProfilePage;
