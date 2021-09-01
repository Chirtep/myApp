import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.appState.sideBar}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() =>
                           <Dialogs state={props.appState.dialogsPage}/>}/>
                <Route path='/profile'
                       render={() =>
                           <Profile state={props.appState.profilePage}/>}/>
                <Route path='/news'
                       render={() =>
                           <News/>}/>
                <Route path='/music'
                       render={() =>
                           <Music/>}/>
                <Route path='/settings'
                       render={() =>
                           <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
