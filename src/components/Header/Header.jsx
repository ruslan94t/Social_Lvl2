import React from 'react';
import s from './Header.module.css'
function Header(props) {
    return (
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'/>
        </header>
    );
}

export default Header;