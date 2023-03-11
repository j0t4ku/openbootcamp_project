/**
 * Ejemplo de Did Update en clases y hooks en componentes funcionales
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {
    componentDidUpdate(){
        console.log("Cuando el componente recive nuevos props o cambio en su estado privado")
    }
    render() {
        return (
            <div>
                DidUpdate
            </div>
        );
    }
}


export const DidUpdateHook = () => {
    useEffect(() => {
        console.log("Cuando el componente recive nuevos props o cambio en su estado privado") 
    });
    return (
        <div>
            DidUpdate Funcional
        </div>
    );
}

