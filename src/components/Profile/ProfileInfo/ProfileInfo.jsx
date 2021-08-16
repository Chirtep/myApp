import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className='background'
                     src='https://www.goodfreephotos.com/albums/canada/alberta/banff-national-park/very-majestic-and-beautiful-landscape-with-mountains-in-banff-national-park-alberta-canada.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo