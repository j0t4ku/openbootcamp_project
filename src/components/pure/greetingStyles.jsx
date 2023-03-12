import React, { useState } from 'react';


//definir estilos en constantes
//estilo para logeados
const loggerStyles = {
    colo: 'blue'
}
//estilo para no logeados
const unloggerStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}


const GreetingStyles = (props) => {

    //Estado para controloar si esta logeado o no
    const [logged, setLogged] = useState(false);

    return (
        <div style={logged? loggerStyles: unloggerStyle}>
            {logged ? (<p>Hola, {props.name}</p>) : (<p>Por favor logeate</p>) }
        <button onClick={()=>{setLogged(!logged)}}>
            {logged ? 'Loggout':'Login'}
        </button>
        </div>
    );
}

export default GreetingStyles;
