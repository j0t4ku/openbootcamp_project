import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const history= useNavigate();
    const navigate = (path) => {
        history(path);
    }
    const navigateProps= (path)=>{
        history(path,{search:'?online=true', state:{online:true}})
    }
    return (
        <div>
            <h1>Home Page</h1>
            <h2>DashBoard</h2>

            <button onClick={() => { navigate('/profile') }}>Go Profile</button>
            <button onClick={() => { navigateProps('/online-state') }}>Go to Example State</button>
            
        </div>
    );
}

export default HomePage;
