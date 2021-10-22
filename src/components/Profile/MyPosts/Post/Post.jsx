import React from 'react';
import s from './Post.module.css';




function Post(props) {
    return (


                    <div className={s.item}>
                        <img src='https://i.redd.it/wtc3gq9qhe041.jpg'/>
                       Post 1
                        <div>
                            <span>
                                like
                            </span>
                        </div>
                    </div>

    );
}

export default Post;