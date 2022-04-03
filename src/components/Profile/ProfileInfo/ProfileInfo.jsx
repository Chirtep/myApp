import React, {useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preolader";
import defaultPic from "../../../assets/images/logo-user-icon.png"
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {useDispatch, useSelector} from "react-redux";
import {uploadPic} from "../../../redux/profile-reducer";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    const profilePage = useSelector(state => state.profilePage),
        dispatch = useDispatch(),
        cn = require('classnames')

    if (!profilePage.profile) {
        return <Preloader/>
    } else {
        const onUpload = (e) => {
            if (e.target.files.length) {
                dispatch(uploadPic(e.target.files[0]))
            }
        }

        return (
            <div className={s.descriptionBlock}>
                <div className={s.picBlock}>
                    <img className={s.profilePicture} src={profilePage.profile.photos.large || defaultPic} alt={'#'}/>
                    {props.isOwner && <div className={cn(s.uploadWrapper, "file-field input-field")}>
                        <div className={cn(s.uploadBtn, "btn-small indigo accent-1")}>
                            <span>Upload</span>
                            <input type="file" onChange={onUpload}/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"/>
                        </div>
                    </div>}
                </div>

                {editMode ? <ProfileDataForm
                        setEditMode={setEditMode}
                        editMode={editMode}
                    />
                    : <ProfileData
                        userId={props.userId}
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