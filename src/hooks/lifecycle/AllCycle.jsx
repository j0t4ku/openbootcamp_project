/**
 * Ejemplo de todos los comportamientos de los componentes
 */

import React, { useEffect } from 'react';

const AllCycle = () => {
    useEffect(() => {
        console.log("Componente se actualiza")
        const interval = setInterval(() => {
            console.log("Actualizacion del componente")
        }, 1000);

        return () => {
            console.log("Componente desaparece");
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            All life cycle
        </div>
    );
}

export default AllCycle;
