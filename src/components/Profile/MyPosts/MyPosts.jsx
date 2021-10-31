import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";




function MyPosts(props) {




   let postElements = props.posts
       .map(p=><Post key={p.id} message={p.message} likesCount={p.likesCount} /> )

let newPostElement = React.createRef()


    let addPost = ()=>{
       let text = newPostElement.current.value;
       props.addPost(text)

        newPostElement.current.value = '';

    }
    return (

            <div className={s.postsBlock}>

                <h3>My Post</h3>

                <div>
                    <div>

                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                    <button onClick={addPost}>Add Post</button>

                    </div>
                </div>
                <div className={s.posts}>

                    {postElements}

                </div>
            </div>

    );
}

export default MyPosts;