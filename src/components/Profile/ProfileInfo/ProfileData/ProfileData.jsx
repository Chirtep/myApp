import s from "../ProfileInfo.module.css";
import ProfileStatus from "./ProfileDataStatus/ProfileStatus";
import Contacts from "./ProfileDataContacts/Contacts";
import React from "react";
import {useSelector} from "react-redux";
import FollowBtn from "../../../common/utils/followBtn";

const ProfileData = (props) => {
    const profilePage = useSelector(state => state.profilePage),
        authId = useSelector(state => state.auth.userId)

    return <div className={s.info}>
        <div className={s.infoBlock}>
            <div className={s.nameBlock}>
                <div className={s.nameWrapper}>
                    <h5>{profilePage.profile.fullName}</h5>
                    {(Number(props.userId) !== Number(authId)) && profilePage.profile.followed !== undefined &&
                    <FollowBtn followed={profilePage.profile.followed} id={props.userId} flag={true}/>}
                    {props.isOwner && <button onClick={props.toEditMode}
                                              className={'waves-effect waves-light btn-small indigo accent-1'}>Edit</button>}
                </div>
                <ProfileStatus userId={props.userId}/>
            </div>

            <div className={s.aboutMeBlock}>
                <div className={s.aboutMe}>
                    <span className={s.aboutMeTitle}>About me:</span>
                    <span className={s.aboutMeInfo}>{profilePage.profile.aboutMe}</span>
                </div>
                <span className={s.lookingForAJob}>Looking for a job: {profilePage.profile.lookingForAJob ?
                    <i className="material-icons">done</i> : <i className="material-icons">do_not_disturb</i>}
                </span>

                <div className={s.lookingForAJobDescription}>
                    <span className={s.lookingForAJob}>My professional skills:</span>
                    <span className={s.professionalSkills}>{profilePage.profile.lookingForAJobDescription}</span>
                </div>

                <Contacts contacts={profilePage.profile.contacts}/>
            </div>
        </div>
    </div>
}

export default ProfileData