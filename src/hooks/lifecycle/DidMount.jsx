/**
 * Ejemplo de uso de ciclo de vida 
 * en componente 
 */

 import React, { Component, useEffect } from 'react';

 export class DidMount extends Component {
    componentDidMount(){
        console.log("Componente antes de Render");
    }
    render() {
        return (
            <div>
                Did Mount
            </div>
        );
    }
}



export const DidMountHook = () => {
useEffect(() => {
    console.log("Antes de Render del componente")
    
}, []);
    return (
        <div>
            Did Mount Funcional
        </div>
    );
}

export default DidMount;
