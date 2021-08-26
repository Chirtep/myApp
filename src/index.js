import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you?', likeCount:'12'},
    {id: 2, message: 'It\'s my first post', likeCount:'7'},
    {id: 3, message: 'BlaBla', likeCount:'3'},
    {id: 4, message: 'FooBar', likeCount:'6'}
]

let dialogs = [
    {id: 1, name: 'Raweater'},
    {id: 2, name: 'Force_maker'},
    {id: 3, name: 'Vikanya'},
    {id: 4, name: 'Stolgi4enko'},
    {id: 5, name: 'Foxy'},
    {id: 6, name: 'MaxMayer'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your IT Kamasutra?'},
    {id: 3, message: 'WAZAAAAAAAAAAAAAP'},
    {id: 4, message: 'Hello there!'},
    {id: 5, message: 'Oh, hi Mark!'},
    {id: 6, message: 'lol'}
]


ReactDOM.render(
  <React.StrictMode>
    <App p={posts} d={dialogs} m={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
