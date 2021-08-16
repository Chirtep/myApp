import React from "react";
import s from './Post.module.css';

const Post = (props) => {

    return <div className={s.item}>
        <img src='https://www.pinclipart.com/picdir/middle/499-4992513_avatar-avatar-png-clipart.png'/>
        {props.message}
        <div><span>Likes:</span> {props.likeCount}</div>
    </div>
}

export default Post

