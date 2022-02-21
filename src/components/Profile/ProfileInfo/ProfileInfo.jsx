import React, {useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preolader";
import defaultPic from "../../../assets/images/logo-user-icon.png"
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    } else {
        const onUpload = (e) => {
            if (e.target.files.length) {
                props.uploadPic(e.target.files[0])
            }
        }

        return (
            <div className={s.descriptionBlock}>
                <div className={s.picBlock}>
                    <img className={s.profilePicture} src={props.profile.photos.large || defaultPic} alt={'#'}/>
                    {props.isOwner && <div className={s.uploadWrapper + " file-field input-field"}>
                        <div className={s.uploadBtn + " btn-small indigo accent-1"}>
                            <span>Upload</span>
                            <input type="file" onChange={onUpload}/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"/>
                        </div>
                    </div>}
                </div>

                {editMode ? <ProfileDataForm
                        profile={props.profile}
                        saveProfile={props.saveProfile}
                        contactsForm={props.contactsForm}
                        forms={props.forms}
                        errors={props.errors}
                        setEditMode={setEditMode}
                        editMode={editMode}

                    />
                    : <ProfileData
                        status={props.status}
                        updateStatus={props.updateStatus}
                        userId={props.userId}
                        authorizedUserId={props.authorizedUserId}
                        profile={props.profile}
                        followingInProgress={props.followingInProgress}
                        userUnfollow={props.userUnfollow}
                        userFollow={props.userFollow}
                        isOwner={props.isOwner}
                        toEditMode={() => {
                           setEditMode(true)
                        }}
                    />
                }
            </div>
        )
    }
}

export default ProfileInfo