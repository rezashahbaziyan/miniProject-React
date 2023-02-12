import React from "react";
import { Component } from "react";
import "./Clock.css";

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
        setInterval(this.update.bind(this), 1000);
    }

    render(){
        return <div><h1 className="ClockH1">{this.state.date.toLocaleTimeString()}</h1></div>
    }

    update(){
        this.setState({
            date: new Date()
        })
    }
}