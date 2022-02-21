import React from "react";
import styles from "./usersCards.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/logo-user-icon.png";


const UsersCards = (props) => {
    return <div className={styles.cardContainer}>
        {
            props.users.map(u => <div className={styles.userCard} key={u.id}>

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
                    {u.followed
                        ? <button className={'waves-effect waves-light btn-small indigo accent-1'}
                                  disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.unfollow(u.id)
                                  }}>Unfollow</button>
                        : <button className={'waves-effect waves-light btn-small indigo accent-1'}
                                  disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.follow(u.id)
                                  }}>Follow</button>
                    }
                </div>
            </div>)
        }
    </div>
}

export default UsersCards