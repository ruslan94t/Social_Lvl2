import {rerenderEntireTree} from "../render";




let state = {
    profilePage:{
        posts:[
            {id:1, message:"Hi, how are you ?", likesCount:12 },
            {id:2, message:"Its my first post", likesCount: 3}
        ],
        newPostText:'it-kama.com'
    },
    dialogsPage:{
        dialogs: [
            {id:1, name:"Alina"},
            {id:2, name:"Masha"},
            {id:3, name:"Sasha"},
            {id:4, name:"Nastya"},
            {id:5, name:"Juliya"},
            {id:6, name:"Anya"},
        ],
        messages:[
            {id:1, message:"Hi"},
            {id:2, message:"Yo Yo Yo"},
            {id:3, message:"How is you"},
            {id:4, message:"Whery you"},

        ]
    }


}




export let addPost = ()=>{
    let newPost={
        id:5,
        message:state.profilePage.newPostText,
        likesCount:0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export let updateNewPostText = (postMessage)=>{

    state.profilePage.newPostText =postMessage;
    rerenderEntireTree(state)
}



window.state = state;

export default state;