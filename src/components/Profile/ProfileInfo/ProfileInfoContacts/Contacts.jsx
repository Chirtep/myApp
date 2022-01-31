import React from "react";
import s from "../ProfileInfo.module.css";
import facebook from '../../../../assets/images/facebook-icon.png'
import website from '../../../../assets/images/world-icon.png'
import vk from '../../../../assets/images/vk-com-icon.png'
import twitter from '../../../../assets/images/twitter-icon.png'
import instagram from '../../../../assets/images/instagram-icon.png'
import youtube from '../../../../assets/images/youtube-icon.png'
import github from '../../../../assets/images/github-icon.png'


const Contacts = (props) => {

    let imgObj = {
        facebook: facebook,
        website: website,
        vk: vk,
        twitter: twitter,
        instagram: instagram,
        youtube: youtube,
        github: github
    }

    let contacts = Object.keys(props.contacts).map(c => (
        props.contacts[c] !== null && <a className={s.contact} key={c} href={'https://' + props.contacts[c]}>
            {Object.keys(imgObj).map(i => (
                i === c && <img className={'circle'} key={i} src={imgObj[i]} alt={'#'}/>
            ))}
        </a>
    ))

    return <div className={s.contactsBox}>
        <span>Contacts:</span>
        <div className={s.contacts}>
            {contacts}
        </div>


    </div>

}

export default Contacts
