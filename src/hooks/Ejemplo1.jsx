/* 
    Ejemplo de uso del hook useState
*/

import React, {useState} from 'react';

const Ejemplo1 = () => {
    //valor inicial para un contador
    const valorInicial=0;
    //valorr inicial para una persona
    const personaInicial= {
        nombre: 'joel',
        email: 'joel@joel.com'
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /*
    * Funcion para actualizar el contador
    */
    function incrementarContador(){
        setContador(contador+1);
    }

    /*
    * Funcion para actualizar persona
    */
    function actualizarPersona(){
        setPersona({
            nombre: 'juan',
            email: 'juan@juan.com'
        })
    }
    return (
        <div>
            <h1>*** Ejemplo de useState ***</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la Persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>    

            <div>
                <button onClick={incrementarContador}>Incrementar Contador</button>
                <button onClick={actualizarPersona}>Actualizar Persona</button>
            </div>  
        </div>
    );
}

export default Ejemplo1;
