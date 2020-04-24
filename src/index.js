// ---------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux';
import { createStore } from 'redux';
import './index.css';
import 'tachyons';
import App from './containers/App';
import { searchRobots } from './reducers';

// ---------------------------------------------------------------------------
const store = createStore(searchRobots);

// ---------------------------------------------------------------------------
ReactDOM.render(<App store={store} />, document.getElementById('root'));
