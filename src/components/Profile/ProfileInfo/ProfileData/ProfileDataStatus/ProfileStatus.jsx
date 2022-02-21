import React, {useEffect, useState} from "react";
import s from '../../ProfileInfo.module.css'

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        if(Number(props.userId) === Number(props.authorizedUserId) || !props.userId) {
            setEditMode(true);
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.statusBlock}>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>
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