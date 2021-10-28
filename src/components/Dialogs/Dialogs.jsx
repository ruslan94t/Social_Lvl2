import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem =(props)=>{
    return     <div className={s.dialog+' '+s.active}>
        <NavLink to={'/dialogs/'+props.id}>
            {props.name}
        </NavLink>

    </div>
}

const Message =(props)=>{
    return <div className={s.message}>{props.message}</div>
}

let dialogsData = [
    {id:1, name:"Alina"},
    {id:2, name:"Masha"},
    {id:3, name:"Sasha"},
    {id:4, name:"Nastya"},
    {id:5, name:"Juliya"},
    {id:6, name:"Anya"},
];
let messageData = [
    {id:1, message:"Hi"},
    {id:2, message:"Yo Yo Yo"},
    {id:3, message:"How is you"},
    {id:4, message:"Whery you"},

];




function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1" />
                <DialogItem name="Masha" id="2" />
                <DialogItem name="Alina" id="3" />
                <DialogItem name="Yuliya" id="4" />
                <DialogItem name="Nusha" id="5" />

            </div>
            <div className={s.messages}>
                <Message message="hi" />
            </div>
        </div>
    );
}

export default Dialogs;