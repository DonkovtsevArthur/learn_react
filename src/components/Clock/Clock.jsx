import React, { Component } from "react";


export default class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmout(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
    render(){
        return <div><h2>{ this.state.date.toLocaleTimeString() }</h2></div>;
    }
};

setInterval(new Clock, 1000);
