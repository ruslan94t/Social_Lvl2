import React from 'react';
import s from'./Profile.module.css'
function Profile(props) {
    return (
        <div className={s.content}>
            <div>
                <img src='https://pinster.ru/cache/4e6bd3a7/avd56a9538548e2dbcd98.jpeg' />
            </div>
            <div>ava+description</div>
            <div>
                My Post

                <div>New Post</div>
                <div className={s.posts}>
                    <div className={s.item}>Post</div>
                    <div className={s.item}>Post 2</div>
                    <div className={s.item}>Post 3</div>
                    <div className={s.item}>Post 4</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;