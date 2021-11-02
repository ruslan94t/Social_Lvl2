
let store ={
    _state:{
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


    },
    _callSubscriber(){
        console.log('same')
    },

    getState(){

        return this._state
    },
    subscribe(observer){
        this._callSubscriber=observer;
    },

    addPost (){

        let newPost={
            id:5,
            message:this._state.profilePage.newPostText,
            likesCount:0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state)
    },
    updateNewPostText(postMessage){

        this._state.profilePage.newPostText =postMessage;
        this._callSubscriber(this._state)
    },
    dispatch(action){
        if(action.type==="ADD-POST"){

            let newPost={
                id:5,
                message:this._state.profilePage.newPostText,
                likesCount:0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText='';
            this._callSubscriber(this._state)
        }else if(action.type==="UPDATE-NEW-POST_TEXT"){
            this._state.profilePage.newPostText =action.newText;
            this._callSubscriber(this._state)
        }
    }


}



export default store;