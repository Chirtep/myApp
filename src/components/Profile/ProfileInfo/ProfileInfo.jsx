import React from "react";
import s from './ProfileInfo.module.css'
import backgroundImage from '../../../assets/images/canada.jpg'
import Preloader from "../../common/Preloader/Preolader";
import Contacts from "./ProfileInfoContacts/Contacts";
import lookingJob from "../../../assets/images/logo-accept.png"
import foundJob from "../../../assets/images/cancel-icon.png"
import defaultPic from "../../../assets/images/icon-profile.png"
import ProfileStatus from "./ProfileStatusWithHooks"


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        let profilePicture = props.profile.photos.large

        return (
            <div>
                <div>
                    <img className='background'
                         src={backgroundImage}/>
                </div>
                <div className={s.descriptionBlock}>
                    <img className={s.profilePicture} src={profilePicture? profilePicture: defaultPic}/> <br/>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <span>{props.profile.fullName}</span> <br/>
                    <span>{props.profile.userId}</span> <br/>
                    <span>{props.profile.aboutMe}</span>
                    <Contacts contacts={props.profile.contacts}/>
                    <div>
                        <span className={s.jobFlag}>В поисках работы: {props.profile.lookingForAJob ?
                            <img src={lookingJob}/> : <img src={foundJob}/>}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo