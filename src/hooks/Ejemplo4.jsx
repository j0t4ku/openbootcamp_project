/**
 * Ejemplo de uso de Props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>** Ejemplo de Children Props **</h1>
            <h2>Nombre: {props.nombre}</h2>
            
            
            {props.children}
        </div>
    );
}

export default Ejemplo4;
