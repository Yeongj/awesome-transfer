import React, { Component } from "react";
import logo from "./logo.svg";
import "./init.css";
import ReactDOM from 'react-dom';
import FilePlayer from 'react-player/lib/players/FilePlayer'

class Init extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title"><a href>Init page</a></h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        )
    }
}

// (
//     <FilePlayer
//         url='http://localhost:3001/images/FILE0019.mov'
//         light={true}
//         volume={1}
//         controls={true}
//         fileconfig={{forceVideo:true}}
//         />
// ),


export default Init;