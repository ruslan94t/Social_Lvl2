import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
function Profile(props) {
    return (
        <div>
            <div>
                <img  className={s.imageProfile} src='https://content.skyscnr.com/m/1b51182679225810/original/GettyImages-147444574_doc.jpg?resize=1800px:1800px&quality=100' />
            </div>
            <div>ava+description</div>
     <MyPosts />
        </div>
    );
}

export default Profile;