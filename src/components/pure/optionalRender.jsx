import React, {useState} from 'react';


const loggedStyle={
    backgroundColo: 'green',
    color: 'white',
    fontWeight: 'bold'
}

const unloggedStyle={
    backgroundColo: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

//Login logout button
const LoginButton = ({actions}) => {
    return (
        <button style={loggedStyle} onClick={actions}>Login</button>
    );
}
const LogoutButton = ({actions}) => {
    return (
        <button style={unloggedStyle} onClick={actions}>Logout</button>

    );
}




const OptionalRender = () => {
    const [acceso, setAcceso] = useState(false);
    const [message, setMessage] = useState(0);

    /* const updateAcces= ()=>{
        setAcceso(!acceso);
    } */

    const loginAcces=()=>{
        setAcceso(true)
    }
    const logoutAcces=()=>{
        setAcceso(false)
    }

    let bottonAuth;
    /* if(acceso){
        bottonAuth= <button onClick={updateAcces}>logout</button>
    }else{
        bottonAuth= <button onClick={updateAcces}>Login</button>
    } */

    if(acceso){
        bottonAuth= <LogoutButton actions={logoutAcces}></LogoutButton>
    }else{
        bottonAuth= <LoginButton actions={loginAcces}></LoginButton>
    }

    // Unred messages 
    let addMessages= ()=>{
        setMessage(message+1)
    }

    return (
        <div>
            {/* Opcional Button */}
            {bottonAuth}
            {/* Numero de Mensajes */}
                {/* {message > 0 && message=== 1 && <p>You have {message} unread...</p> }
                {message > 1 && <p>You have {message} unread...</p> }
                {message==0 && <p>There are no new messages</p> } */}
            {/* Ejemplo con operador ternario */}
            {acceso ? (
                <div>
                {
                message > 0
                ? <p>You have {message} unread...</p>
                : <p>There are no new messages</p>
            }
            <button onClick={addMessages}>{message === 0 ? 'Add first message':'Add new Message'}</button>
                </div>
            ) : null}
        </div>
    );
}

export default OptionalRender;
