import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/Dialogs";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";








function Dialogs(props) {


    let state=props.store.getState().dialogsPage;


    let dialogsElements = state.dialogs
        .map(d =>  <DialogItem key={d.id} name={d.name} id={d.id} />);

    let messageElements  =state.messages
        .map(m =><Message key={m.id} message={m.message} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick=()=>{
props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange=(e)=>{
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                        placeholder="enter your message"
                    />
                    </div>
                    <div>
                        <button
                        onClick={onSendMessageClick}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;