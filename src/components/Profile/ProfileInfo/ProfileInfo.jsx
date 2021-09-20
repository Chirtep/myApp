import React from "react";
import s from './ProfileInfo.module.css'
import backgroundImage from '../../../assets/images/canada.jpg'
import Preloader from "../../common/Preloader/Preolader";
import Contacts from "./ProfileInfoContacts/Contacts";
import lookingJob from "../../../assets/images/logo-accept.png"
import foundJob from "../../../assets/images/cancel-icon.png"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div>
                    <img className='background'
                         src={backgroundImage}/>
                </div>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large}/> <br/>
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