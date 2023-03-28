import React from 'react';

const AsyncExample = () => {


    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    async function generateNumber() {
        return 1;
    }

    function obtainNumber() {
        generateNumber()
            .then((res) => aler(`Response: ${response}`))
            .catch((err) => alert(`Algo ha salido mal: ${err}`));
    }
    function obtainPromiseNumber() {
        generatePromiseNumber()
        .then((res) => aler(`Response: ${response}`))
        .catch((err) => alert(`Algo ha salido mal: ${err}`));
    }


    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key))

    }

    function showStorage(){
        saveSessionStorage('name','Juan')
            .then((r)=>{
                let value= response;
                alert(`Saved Name: ${value}`);
            })
            .catch(err=>{
                alert(`Algo ha salido mal: ${err}`)
            })
            .finally(()=>console.log(`Name saved and retreived sucessfuly`))
    }



    async function obtainMessage(){

        let promise= new Promsie((resolve, reject)=>{
            setTimeout(()=>{
                resolve('Hello Promise')
            }, 2000)
        });

        let message= await promise;
        
        await alert(`Message received: ${message}`)

    }

    const returnError= async()=>{
        await Promise.reject(new Error('Ooops'))
    }

    const consumeError= ()=>{
        returnError()
            .then((r)=>alert(`Everything is Ok: ${r}`))
            .catch((err)=>alert(`Algo ha salido mal: ${err}`))
            .finally(()=>alert('Finally executed'))
    }

    const urlNotFOund= async ()=>{
        try {
            let response= await fetch('https://invalidUrl')
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Algo ha salido mal: ${err}`)
        }
    }


    const multiplePromise= async()=>{
        let result= await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')

            ]
        ).catch((err)=>alert(`Algo ha salido mal: ${err}`))
    }


    


    return (
        <div>
            <h1>Async, Promise Example</h1>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain Promise Number</button>
            <button onClick={showStorage}>Save Name and Show</button>
            <button onClick={obtainMessage}>Receive Message in 2 seconds</button>
            <button onClick={consumeError}>Obtain Error</button>
            <button onClick={urlNotFOund}>Request to unknown URL</button>
            <button onClick={multiplePromise}>Multiple Promise</button>



        </div>
    );
}

export default AsyncExample;
