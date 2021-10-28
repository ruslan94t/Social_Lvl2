import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
let posts = [
    {id:1, message:"Hi, how are you ?", likesCount:12 },
    {id:2, message:"Its my first post", likesCount: 3}
]

let dialogs = [
    {id:1, name:"Alina"},
    {id:2, name:"Masha"},
    {id:3, name:"Sasha"},
    {id:4, name:"Nastya"},
    {id:5, name:"Juliya"},
    {id:6, name:"Anya"},
];
let messages= [
    {id:1, message:"Hi"},
    {id:2, message:"Yo Yo Yo"},
    {id:3, message:"How is you"},
    {id:4, message:"Whery you"},

];
ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root')
);

