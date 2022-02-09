import React, {useEffect, useState, Suspense} from "react";
import './App.css';
import MainMenu from "./components/Navbar/MainMenu";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Provider, useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preolader";
import Footer from "./components/Footer/Footer";
import * as Scroll from 'react-scroll';
import store from "./redux/redux-store";
import Messages from "./components/Dialogs/Messages";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')),
    ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer")),
    UsersContainer = React.lazy(() => import("./components/Users/UsersContainer")),
    LoginPage = React.lazy(() => import("./components/Login/LoginContainer")),
    NewsContainer = React.lazy(() => import("./components/News/NewsContainer"))

const App = (props) => {
    const auth = useSelector(state => state.auth),
        initialized = useSelector(state => state.app.initialized),
        dispatch = useDispatch(),
        scroll = Scroll.animateScroll;

    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    function scrollToTop() {
        scroll.scrollToTop();
    }

    const [scrolled, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    if (!initialized) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className='app-wrapper grey lighten-4'>
            <HeaderContainer/>
            <div className={'upBtn ' + (scrolled > document.documentElement.clientHeight && 'show')} onClick={() => {
                scrollToTop()
            }}>
                <i className="material-icons">arrow_drop_up</i>
            </div>
            <div className={'middle-wrapper'}>
                <MainMenu isAuth={auth.isAuth}/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Route path={'/dialogs/:Id?'} component={DialogsContainer}/>
                            <Route path={'/messages'} component={Messages}/>
                            <Route path={'/profile/:userId?'} component={ProfileContainer}/>
                            <Route path={'/users'} component={UsersContainer}/>
                            <Route path={'/news'} component={NewsContainer}/>
                            <Route path={'/login'} component={LoginPage}/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

let AppContainer = withRouter(App)

const MainApp = (props) => {
    return <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
}

export default MainApp