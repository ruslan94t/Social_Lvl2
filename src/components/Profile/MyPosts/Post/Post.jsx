import React from 'react';
import s from './Post.module.css';




function Post(props) {


    return (


                    <div className={s.item}>
                        <img src='https://i.redd.it/wtc3gq9qhe041.jpg'/>
                        {props.message}
                        <div>
                            <span>
                                {props.likesCount}
                            </span>
                        </div>
                    </div>

    );
}

export default Post;