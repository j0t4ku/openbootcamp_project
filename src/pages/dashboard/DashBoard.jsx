import React from 'react';
import Copyright from '../../components/pure/Copyright';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

const DashBoard = () => {
    const navigate= useNavigate();
    const logout=()=>{
        navigate('/login')
    }
    return (
        <div>
            <Button vairant='conatined' onClick={logout} >Logout</Button>
            <Copyright></Copyright>
        </div>
    );
}

export default DashBoard;
