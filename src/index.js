import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'jquery/dist/jquery.min.js';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css'; 
import './styles/index.scss';
import ScrollToTop from './jsx/scrollTop';

ReactDOM.render(
    <Router>
        <ScrollToTop>
            <App/>
        </ScrollToTop>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();



