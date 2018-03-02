import React, { Component } from "react";


export default class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
            commit: 'What time is it? '
        };
    }
    componentDidMount(){
        setInterval(() => {
            this.time();
        }, 3000);
        setInterval(() => {
            this.nowTime();
        },2000);
    
    }
    componentWillUnmout(){
        clearInterval(this.timerID);
    }
    nowTime(){
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    tick(){
        this.setState({
            date: new Date().toLocaleTimeString()    
        })
    }
    time(){
        this.setState({ commit: "Now time: " });
        
    }
    render(){
        return <div>
            <h2>
              {this.state.commit}   {this.state.date}
            </h2>
           
          </div>;
    }
};

setInterval(new Clock, 1000);
