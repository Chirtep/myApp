import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/logo-user-icon.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = Math.max(1, props.currentPage - 3); i <= Math.min(props.currentPage + 3, pagesCount); i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    let chosen = props.currentPage === p ? styles.selectedPage : props.currentPage;
                    return <span className={chosen + ' ' + styles.pointer}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}
                        </span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "3edbec09-c499-46ae-ba3a-0f33cce848fe"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.toggleFollow(u.id)
                                        }
                                    });

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "3edbec09-c499-46ae-ba3a-0f33cce848fe"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.toggleFollow(u.id)
                                        }
                                    });
                                
                            }}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                      <div>{u.name}</div>
                      <div>{u.status}</div>
                    </span>
                    <span>
                      <div>{"u.location.country"}</div>
                      <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    );
}

export default Users;