import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Init from './components/Init';
import Navbar from './components/Navbar';
import * as serviceWorker from './serviceWorker';
import './bootstrap/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(<Navbar />,document.getElementById('nav'));
ReactDOM.render(<Init />,document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();