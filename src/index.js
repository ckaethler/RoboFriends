// ---------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import 'tachyons';
import App from './containers/App';
import { searchRobots } from './reducers';


// ---------------------------------------------------------------------------
const store = createStore(searchRobots);

// ---------------------------------------------------------------------------
// by putting store in provider, makes accessible to all inside of it
ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>, 
    document.getElementById('root')
);
