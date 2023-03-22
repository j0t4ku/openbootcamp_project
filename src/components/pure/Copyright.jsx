import React from 'react';

//Material UI components
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography'

const Copyright = () => {
    return (
        <div>
            <Typography variant='body2' color='GrayText' align='center'>
                {'Copyright (C)'}
                <Link color='inherit' href='https://j0t4ku.github,io'>
                Imagina Formacion
                </Link>
                {''}
                {new Date().getFullYear()}
            </Typography>
        </div>
    );
}

export default Copyright;
