import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts p={posts} />
        </div>
    )
}

let posts = [
    {id: 1, message: 'Hi, how are you?', likeCount:'12'},
    {id: 2, message: 'It\'s my first post', likeCount:'7'},
    {id: 3, message: 'BlaBla', likeCount:'3'},
    {id: 4, message: 'FooBar', likeCount:'6'}
]


export default Profile
