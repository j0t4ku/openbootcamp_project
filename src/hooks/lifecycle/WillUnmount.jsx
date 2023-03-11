/**
 * Ejemplo de ComponenteWillUnmont y hooks par componente funcional
 */

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {
    componentWillUnmount(){
        console.log("Comportamiento antes de que el componente desaparezca")
    }
    render() {
        return (
            <div>
                WillUnmount
            </div>
        );
    }
}


export const WillUnmountHook = () => {
    useEffect(() => {
        //void
        return () => {
            console.log("Comportamiento antes de que el componente desaparezca")
        };
    }, []);
    return (
        <div>
            WillUnmount Funcional
        </div>
    );
}


