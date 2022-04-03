import React, {useEffect, useState} from "react";
import s from '../../ProfileInfo.module.css'
import {useDispatch, useSelector} from "react-redux";
import {updateStatus} from "../../../../../redux/profile-reducer";

const ProfileStatus = (props) => {
    const profilePage = useSelector(state => state.profilePage),
        authId = useSelector(state => state.auth.userId),
        dispatch = useDispatch()

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(profilePage.status)

    useEffect( () => {
        setStatus(profilePage.status);
    }, [profilePage.status])

    const activateEditMode = () => {
        if(Number(props.userId) === Number(authId) || !props.userId) {
            setEditMode(true);
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        dispatch(updateStatus(status))
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.statusBlock}>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{profilePage.status || '----'}</span>
            </div>
            }
            {editMode &&
            <div className={'row'}>
                <div className={'input-field'}>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}
                    />
                </div>
            </div>
            }
        </div>
    )
}

export default ProfileStatus;