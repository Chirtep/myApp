import React from "react";
import s from './MainMenu.module.css';
import {NavLink} from "react-router-dom";
import MyFriendsContainer from "./MyFriends/MyFriendsContainer";
import {useSelector} from "react-redux";

const MainMenu = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth)

    return <> {isAuth && <div className={s.nav}>
        <div className={s.navMenu + ' collection'}>
            <div>
                <NavLink className={s.navMenuBtn + ' collection-item'} to='/profile'
                         activeClassName={'collection-item active deep-purple lighten-2 px1'}>Profile</NavLink>
            </div>
            <div>
                <NavLink className={s.navMenuBtn + ' collection-item'} to='/dialogs'
                         activeClassName={'collection-item active deep-purple lighten-2 px1'}>Messages</NavLink>
            </div>
            <div>
                <NavLink className={s.navMenuBtn + ' collection-item'} to='/users'
                         activeClassName={'collection-item active deep-purple lighten-2 px1'}>Users</NavLink>
            </div>
            <div>
                <NavLink className={s.navMenuBtn + ' collection-item'} to='/news'
                         activeClassName={'collection-item active deep-purple lighten-2 px1'}>News</NavLink>
            </div>

            <MyFriendsContainer/>

        </div>
    </div>}
    </>


}

export default MainMenu