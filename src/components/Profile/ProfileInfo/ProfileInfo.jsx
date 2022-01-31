import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preolader";
import Contacts from "./ProfileInfoContacts/Contacts";
import defaultPic from "../../../assets/images/logo-user-icon.png"
import ProfileStatus from "./ProfileStatus"


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        let profilePicture = props.profile.photos.large

        return (
                <div className={s.descriptionBlock}>
                    <div className={s.picBlock}>
                        <img className={s.profilePicture} src={profilePicture? profilePicture: defaultPic} alt={'#'}/>
                    </div>

                    <div className={s.info}>
                        <div className={s.infoBlock}>
                            <div className={s.nameBlock}>
                                <div className={s.nameWrapper}>
                                    <h5>{props.profile.fullName}</h5>
                                    {(Number(props.userId) !== Number(props.authorizedUserId)) && props.profile.followed !== undefined &&
                                    (props.profile.followed
                                        ? <button className={'waves-effect waves-light btn-small indigo accent-1'}
                                                  disabled={props.followingInProgress.some(id => id === Number(props.userId))}
                                                  onClick={() => {
                                                      props.userUnfollow(props.userId)
                                                  }}>Unfollow</button>
                                        : <button className={'waves-effect waves-light btn-small indigo accent-1'}
                                                  disabled={props.followingInProgress.some(id => id === Number(props.userId))}
                                                  onClick={() => {
                                                      props.userFollow(props.userId)
                                                  }}>Follow</button>)}
                                </div>
                                <ProfileStatus
                                    status={props.status}
                                    updateStatus={props.updateStatus}
                                    userId={props.userId}
                                    authorizedUserId={props.authorizedUserId}/>
                            </div>

                            <div className={s.aboutMeBlock}>
                                <div className={s.aboutMe}>
                                    <span className={s.aboutMeTitle}>About me:</span>
                                    <span className={s.aboutMeInfo}>{props.profile.aboutMe}</span>
                                </div>
                                <span className={s.lookingForAJob}>Looking for a job: {props.profile.lookingForAJob ?
                                    <i className="material-icons">done</i> : <i className="material-icons">do_not_disturb</i>}</span>

                                <Contacts contacts={props.profile.contacts}/>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ProfileInfo