import React from "react";
import styles from "./usersCards.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/logo-user-icon.png";
import {useSelector} from "react-redux";
import FollowBtn from "../../common/utils/followBtn";

const UsersCards = (props) => {
    const usersPage = useSelector(state => state.usersPage)

    return <div className={styles.cardContainer}>
        {
            usersPage.users.map(u => <div className={styles.userCard} key={u.id}>

                <div className={styles.photoBlock}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.large || userPhoto}
                             className={styles.userPhoto + ' ' + (u.photos.large !== null? styles.cover : styles.contain)} alt={'#'}/>
                    </NavLink>
                </div>

                <div className={styles.info}>
                    <span className={styles.name}>{u.name}</span>
                    {u.status && <span className={styles.status}>{u.status}</span>}
                </div>

                <div className={styles.btnBlock}>
                    <FollowBtn id={u.id} followed={u.followed}/>
                </div>
            </div>)
        }
    </div>
}

export default UsersCards