import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef(null)
    const nameRef = useRef(null)

    function pressButton() {
        const text = messageRef.current.value;
        alert("Default: " + text)
    }
    function pressButtonParams(text) {
        alert(text)
    }

    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
        <div style={{ background: 'cyan', padding: '30px' }}>
            <p onMouseOver={() => console.log("OnMouseOver")}>
                Hello: {name}
            </p>
            <button onClick={() => console.log("boton 1")}>Boton 1</button>
            <button onClick={pressButton}>Boton 2</button>
            <button onClick={() => pressButtonParams("Hello")}>Boton 3</button>
            <input type="text"
                placeholder='Send a text to your father'
                onFocus={(e) => console.log("Focus on")}
                onChange={(e) => console.log("Input Change", e.target.value)}
                ref={messageRef}
            />
            <button onClick={() => send(messageRef.current.valueOf)}>
                Send Message
            </button>

            <div style={{ marginTop: '20px' }}>
                <form action="" onSubmit={submitName}>
                    <input type="text" ref={nameRef} placeholder='New Name' />
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
