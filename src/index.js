import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { robots } from './Robots';
import 'tachyons';
import CardList from './CardList';

ReactDOM.render(
    <CardList robots={robots}/>,
    document.getElementById('root'));
