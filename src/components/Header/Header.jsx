import React from "react";
import s from './Header.module.css';
import mainLogo from '../../assets/images/mainLogo.png'
import {NavLink} from "react-router-dom";
import defaultPic from '../../assets/images/logo-user-icon.png'

const Header = (props) => {

    return <header className={s.header + ' nav-wrapper deep-purple lighten-2 px1'}>
        <img className={s.mainLogo} src={mainLogo} alt={'#'}/>
        <div className={s.loginBox}>
            <div className={s.loginBlock}>
                {props.auth.isAuth ? <div className={s.loginAuth}>
                        <button className={'waves-effect waves-light btn-small indigo accent-1'}
                                onClick={props.logout}>Exit
                        </button>
                        <span className={s.userLogin}>{props.auth.login}</span>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
            <div className={s.userPhotoBlock}>{props.auth.userProfile && props.auth.isAuth === true &&
            <NavLink to={`/profile/${props.auth.userId}`}>
                <img src={props.auth.userProfile.photos.small ?
                    props.auth.userProfile.photos.small : defaultPic} alt={'#'}/>
            </NavLink>}
            </div>
        </div>
    </header>
}


export default Header