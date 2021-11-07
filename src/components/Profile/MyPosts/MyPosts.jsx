import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";






function MyPosts(props) {


    let postElements = props.posts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()


    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator())

       // props.updateNewPostText('')

    }


    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text)
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    };


    return (

        <div className={s.postsBlock}>

            <h3>My Post</h3>

            <div>
                <div>

                        <textarea
                            onChange={onPostChange}
                            ref={newPostElement}
                            value={props.newPostText}
                        ></textarea>
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