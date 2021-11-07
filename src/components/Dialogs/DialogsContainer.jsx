import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/Dialogs";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";








function DialogsContainer(props) {


    let state=props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs
        .map(d =>  <DialogItem key={d.id} name={d.name} id={d.id} />);

    let messageElements  =state.messages
        .map(m =><Message key={m.id} message={m.message} />)
    let newMessageBody = state.newMessageBody;




    let onSendMessageClick=()=>{
props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange=(body)=>{

        props.store.dispatch(updateNewMessageBodyCreator(body))
    }



    return (
        <Dialogs
            dialogsPage={state}
            updateNewMessageBody={onNewMessageChange}
            onSendMessageClick={onSendMessageClick}
        />
    );
}

export default DialogsContainer;