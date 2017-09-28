import React from 'react';
import ReactDOM from 'react-dom';


import NavBar from './components/NavBar';


const alpha = require('alphavantage')({ key: 'MWQ2U4K8HU6D7VUK' })
// const API_Key = 'MWQ2U4K8HU6D7VUK'

ReactDOM.render(NavBar({title: 'FinTimeline', style: 'inverse'}), document.getElementById('root'))
