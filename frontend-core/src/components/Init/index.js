import React, { Component } from "react";
import logo from "./logo.svg";
import "./init.css";
import ReactDOM from 'react-dom';

class Init extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    // callAPI() {
    //     fetch("http://localhost:3001/testRoute")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }))
    //         .catch(err => err);
    // }

    // componentDidMount() {
    //     this.callAPI();
    // }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Init page</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default Init;