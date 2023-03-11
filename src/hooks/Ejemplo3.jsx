/**
 * Ejemplo de useState y useContext
 */

import React, { useState, useContext } from 'react';


/**
 * Componente 1 dispone de un contexto que va atener un valor 
 * que recibe desde el padre
 */
const miContexto = React.createContext(null)
const Componente1 = () => {
    //Inicializamos un estado vacio
    const state = useContext(miContexto)

    return (
        <div>
            <h1>El token es: {state.token}</h1>
            <Componente2 />
        </div>
    );
}

const Componente2 = () => {
    const state = useContext(miContexto)
    return (
        <div>
            <h2>
                La secion es: {state.session}
            </h2>
        </div>
    );
}


const MiComponenteConContexto = () => {
    const estadoInicial = {
        tokens: '123456',
        session: 1
    }

    //creamos el estado del componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSession() {
        setSessionData({
            token: 'asdfghjkl',
            session: sessionData.session + 1
        })
    }

    return (
        <miContexto.Provider value={sessionData}>
            {/**
             * Todo lo que esta dentro puede leer y modificar la sessionData
             */}
            <h1>** Ejemplo de useState y useContext</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSession}>Actualizar Session</button>
        </miContexto.Provider>
    );
}

export default MiComponenteConContexto;
