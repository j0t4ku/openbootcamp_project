import React, { useState } from 'react';
import { getNumber } from '../../services/ObservableService';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);
    const obtainNewNumber=()=>{
        console.log('Subscription to Obseevable')
        
        getNumber.subscribe(
            {
                nex(newNumber){
                    console.log('New Number:', newNumber);
                    setNumber(newNumber);
                },
                error(error){
                    alert(`Something went wrong ${error}`);
                    console.log('Error in Observable')
                },
                complete(){
                    alert(`Finished with: ${number}`)
                    console.log('Done with the observable')

                    
                }
            }
        )
    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumber}>Obtain new Number</button>
        </div>
    );
}

export default ObservableExample;
