import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from "./App";

ReactDOM.render(
    <MainApp/>,
    document.getElementById('root')
)

window.__store__ = store;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
