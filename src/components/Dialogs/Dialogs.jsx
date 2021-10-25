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