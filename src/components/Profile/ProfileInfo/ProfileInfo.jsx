import React from 'react';
import s from './ProfileInfo.module.css'

function ProfileInfo(props) {
    return (
        <div>
            <div>
                <img  className={s.imageProfile} src='https://content.skyscnr.com/m/1b51182679225810/original/GettyImages-147444574_doc.jpg?resize=1800px:1800px&quality=100' />
            </div>
            <div className={s.description}>ava+description</div>

        </div>
    );
}

export default ProfileInfo;