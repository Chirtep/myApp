import React from "react";
import s from './Header.module.css';
import mainLogo from '../../assets/images/mainLogo.png'
import {NavLink} from "react-router-dom";
import defaultPic from '../../assets/images/icon-profile.png'


const Header = (props) => {

    return <header className={s.header}>
        <img className={s.mainLogo} src={mainLogo}/>
        <div className={s.loginBox}>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
            <div className={s.userPhotoBlock}>{props.userProfile ?
                <img src={props.userProfile.photos.small !== null ?
                    props.userProfile.photos.small : defaultPic}/> : ''}
            </div>
        </div>
    </header>
}


export default Header