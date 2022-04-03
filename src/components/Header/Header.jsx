import React from "react";
import s from './Header.module.css';
import mainLogo from '../../assets/images/mainLogo.png'
import {NavLink, withRouter} from "react-router-dom";
import defaultPic from '../../assets/images/logo-user-icon.png'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth-reducer";

const Header = (props) => {
    const auth = useSelector(state => state.auth),
        dispatch = useDispatch(),
        cn = require('classnames')

    return <header className={cn(s.header, 'nav-wrapper deep-purple lighten-2 px1')}>
        <img className={s.mainLogo} src={mainLogo} alt={'#'}/>
        <div className={s.loginBox}>
            <div className={s.loginBlock}>
                {auth.isAuth ? <div className={s.loginAuth}>
                        <button className={'waves-effect waves-light btn-small indigo accent-1'}
                                onClick={() => {
                                    dispatch(logout())}
                                }>Exit
                        </button>
                        <span className={s.userLogin}>{auth.login}</span>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
            <div className={s.userPhotoBlock}>{auth.userProfile && auth.isAuth === true &&
            <NavLink to={`/profile/${auth.userId}`}>
                <img src={auth.userProfile.photos.small ?
                    auth.userProfile.photos.small : defaultPic} alt={'#'}/>
            </NavLink>}
            </div>
        </div>
    </header>
}


export default withRouter(Header)