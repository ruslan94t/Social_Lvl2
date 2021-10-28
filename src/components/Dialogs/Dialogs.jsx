import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem =(props)=>{
    return     <div className={s.dialog}>
        <NavLink to={'/dialogs/'+props.id}>
            {props.name}
        </NavLink>

    </div>
}

const Message =(props)=>{
    return <div className={s.message}>{props.message}</div>
}

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

let dialogsElements = dialogs
    .map(d =>  <DialogItem key={d.id} name={d.name} id={d.id} />);

let messageElements  =messages
    .map(m =><Message key={m.id} message={m.message} />)



function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;