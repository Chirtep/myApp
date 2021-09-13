import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers( [
            {id: 1, photoUrl: 'http://images6.fanpop.com/image/photos/37700000/Luffy-One-Piece-monkey-d-luffy-37712160-740-987.jpg', followed: false, fullName: 'Raweater', status: 'old guy', location: {city: 'Saratov', country: 'Russian Federation'} },
            {id: 2, photoUrl: 'https://anime-fans.ru/wp-content/uploads/2021/04/Krasivye-anime-arty-tyan-demon_06.jpg', followed: true, fullName: 'Force_maker', status: 'Oh, yes, the floor is made out of the floor', location: {city: 'Moscow', country: 'Russian Federation'} },
            {id: 3, photoUrl: 'https://cdn-crimea-news.com/img/20190104/990912f8ba25a55cd1436e87eae85932.jpg', followed: false, fullName: 'Vikanya', status: 'nya', location: {city: 'Saint Petersburg', country: 'Russian Federation'} },
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ?<button onClick={ () => { props.toggleFollow(u.id) } }>Unfollow</button>
                            :<button onClick={ () => { props.toggleFollow(u.id) } }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                      <div>{u.fullName}</div>
                      <div>{u.status}</div>
                    </span>
                    <span>
                      <div>{u.location.country}</div>
                      <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users