import React from "react";
import s from "../ProfileInfo.module.css";

const Contacts = (props) => {
    let links = Object.values(props.contacts)

    return <div>
        <span className={s.descriptionBlock}>Контакты:</span>
        <ol>
            {links.map (l => {
                if (!l) {
                    return <li>-</li>
                } else if ( l.indexOf('//') < 0 ) {
                    return <li><a href={'https://' + l}>{l}</a></li>
                } else {
                    return <li><a href={l}>{l}</a></li>
                }
            })}
        </ol>
    </div>

}

export default Contacts