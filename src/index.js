import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './components/index';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <Index />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
