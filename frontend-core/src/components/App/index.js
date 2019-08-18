import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Route, NavLink, HashRouter } from "react-router-dom";

import './App.css';
import MenuHeader from '../Navbar';
import Api from '../rrrrr';
import Table from '../Table';
import Gallary from "../Gallary";

class App extends Component {
  render() {
    return (
      <HashRouter >
        <MenuHeader />
        {/* The corresponding component will show here if the current URL matches the path */}
        <Route path="/Api" component={Api}/>
        <Route path="/Table" component={Table} />
        <Route path="/Gallary" component={Gallary} />
      </HashRouter>
    );
  }
}

export default App;