import React, { Component } from "./node_modules/react";
import logo from "./logo.svg";
import "./init.css";
import ReactDOM from './node_modules/react-dom';

class Api { 
    callAPI() {
        fetch("http://localhost:3001/testRoute")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }
}

export default Api;