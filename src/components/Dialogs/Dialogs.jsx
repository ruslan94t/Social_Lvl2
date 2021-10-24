import React from 'react';
import s from './Dialogs.module.css';


function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog+' '+s.active}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
                <div className={s.dialog}>
                    Masha
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    How is Your
                </div>
                <div className={s.message}>
                    Fine what is
                </div>
            </div>
        </div>
    );
}

export default Dialogs;