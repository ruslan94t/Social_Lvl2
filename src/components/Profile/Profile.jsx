import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
function Profile(props) {
    return (
        <div className={s.content}>
            <div>
                <img src='https://pinster.ru/cache/4e6bd3a7/avd56a9538548e2dbcd98.jpeg' />
            </div>
            <div>ava+description</div>
     <MyPosts />
        </div>
    );
}

export default Profile;