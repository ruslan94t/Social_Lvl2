import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";




function MyPosts(props) {
    return (

            <div className={s.postsBlock}>

                <h3>My Post</h3>

                <div>
                    <div>

                        <textarea></textarea>
                    </div>
                    <div>
                    <button>Add Post</button>

                    </div>
                </div>
                <div className={s.posts}>
                  <Post message='Hi how  are you' />
                  <Post message={`Hi ' how  are you`} />

                </div>
            </div>

    );
}

export default MyPosts;