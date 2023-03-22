import React from 'react';
import {useNavigate} from 'react-router-dom';

const NotFoundPage = () => {
    const navigate= useNavigate();
   
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <button onClick={()=>navigate('/')}>Go back to Home</button>
        </div>
    );
}

export default NotFoundPage;
