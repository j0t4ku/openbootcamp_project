/**
 * Ejemplo de Uso de: UseState, UseRef, UseEffect
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //crear referencia con useRef para asocia variables con elementos del DOM

    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1)
    }
    function incrementar2() {
        setContador2(contador2)
    }

    //Caso 1
   /*  useEffect(() => {
        console.log("cambio en el estado del compoenente");
        console.log("Mostrando referencia a elemento del DOM");
        console.log(miRef)
    }); */

    //Caso 2
    /* useEffect(() => {
        console.log("cambio en el estado del contador 1");
        console.log("Mostrando referencia a elemento del DOM");
        console.log(miRef)
    }, [contador1]); */

    //Caso 3
    useEffect(() => {
        console.log("cambio en el estado del contador 1 o contador 2");
        console.log("Mostrando referencia a elemento del DOM");
        console.log(miRef)
    }, [contador1,contador2]);

    return (
        <div>
            <h1>** Ejemplo 2 **</h1>
            <h2>Contador1: {contador1}</h2>
            <h2>Contador2: {contador2}</h2>
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            <div>
                <button onClick={incrementar1}>Incrementar 1</button>
                <button onClick={incrementar2}>Incrementar 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
