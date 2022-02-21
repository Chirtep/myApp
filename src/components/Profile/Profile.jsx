import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from '../Profile/Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (
        <div className={s.profileContainer}>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profilePage.profile}
                status={props.profilePage.status}
                updateStatus={props.updateStatus}
                userId={props.userId}
                authorizedUserId={props.auth.userId}
                userFollow={props.userFollow}
                userUnfollow={props.userUnfollow}
                followingInProgress={props.followingInProgress}
                uploadPic={props.uploadPic}
                forms={props.profilePage.forms}
                contactsForm={props.profilePage.contactsForm}
                saveProfile={props.saveProfile}
                errors={props.profilePage.errors}
            />
            <MyPosts
                userId={props.userId}
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                userProfile={props.auth.userProfile}
                isAuth={props.auth.isAuth}
                addPost={props.addPost}
                authId={props.auth.userId}
                sendReply={props.sendReply}
                replies={props.profilePage.replies}
                cutReply={props.cutReply}
                cutPost={props.cutPost}
            />
        </div>
    )
}

export default Profile
