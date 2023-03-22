import React from 'react';
import { useLocation } from 'react-router-dom'

const PropsPage = () => {
    const location= useLocation();
    
    console.log('State',location.state.online);//state
    console.log('Query',location.search);//Query params sent

    return (
        <div>
            <h1>State: {location.state.online ? 'Online': 'OffLine'}</h1>
            <h1>Query: {location.search}</h1>
        </div>
    );
}

export default PropsPage;
