import React, { Component } from 'react';

class LifeCycleExample extends Component {
    constructor(props){
        super(props);
        console.log("constructor")
    }

    componentWillUnmount(){
        console.log("willmount")
    }
    componentDidMount(){
        console.log("did mount")
    }
    componentDidUpdate(){
        console.log("did Update")
    }
    componentWillUnmount(){
        console.log("will unmount")
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleExample;
