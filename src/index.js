import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import MenuHeader from './components/Navbar';
import './bootstrap/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import Table from './components/Table';

// ReactDOM.render(<Navbar />, document.getElementById('Navbar'));
ReactDOM.render(<MenuHeader />, document.getElementById('Navbar2'));
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Table />, document.getElementById('root1'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();