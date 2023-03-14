import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Jota');
    function showMessage(text){
        alert(text)
    }
    function updateName(newName){
        setName(newName)
    }

    return (
        <div style={{background:'tomato', padding: '10px'}}>
            <Child send={showMessage} name={name} update={updateName}></Child>
        </div>
    );
}

export default Father;
