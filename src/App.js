import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preolader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) {
            return  <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() =>
                               <DialogsContainer/>
                           }/>
                    <Route path='/profile/:userId?'
                           render={() =>
                               <ProfileContainer/>
                           }/>
                    <Route path='/news'
                           render={() =>
                               <News/>}/>
                    <Route path='/music'
                           render={() =>
                               <Music/>}/>
                    <Route path='/users'
                           render={() =>
                               <UsersContainer/>}/>
                    <Route path='/settings'
                           render={() =>
                               <Settings/>}/>
                    <Route path='/login'
                           render={() =>
                               <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);
