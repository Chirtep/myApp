import React from "react";
import styles from "./usersCards.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/logo-user-icon2.png";


const UsersCards = (props) => {
    return <div className={styles.cardContainer}>
        {
            props.users.map(u => <div className={styles.userCard + ' card medium'} key={u.id}>

                <div className={'card-image'}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.large : userPhoto}
                             className={styles.userPhoto} alt={'#'}/>
                    </NavLink>
                </div>

                <div className={'card-content'}>
                    <span className={'card-title'}>{u.name}</span>
                    {u.status && <span>{u.status}</span>}
                </div>

                <div className={'card-action'}>
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