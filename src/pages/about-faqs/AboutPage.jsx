import React from 'react';

import {useLocation, useNavigate} from 'react-router-dom';

const AboutPage = () => {
    const location= useLocation();
    console.log('The route is: ', location.pathname);
    const navigate= useNavigate();


    return (
        <div>
            <div>
            <h1>About | FAQS</h1>
        </div>
        <div>
            <button onClick={()=>{navigate('/')}}>Go Home</button>
            <button onClick={()=>{navigate(-1)}}>Go Back</button>

        </div>
        </div>
    );
}

export default AboutPage;
