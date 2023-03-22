import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const history= useNavigate();
    const navigate = (path) => {
        history(path);
    }
    return (
        <div>
            <h1>Home Page</h1>
            <h2>DashBoard</h2>

            <button onClick={() => { navigate('/profile') }}>Go Profile</button>
            
        </div>
    );
}

export default HomePage;
