import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'/>
            </header>

            <nav className='nav'>

                <div>
                   <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Messages</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src='https://pinster.ru/cache/4e6bd3a7/avd56a9538548e2dbcd98.jpeg' />
                </div>
                <div>ava+description</div>
                <div>
                    My Post

                <div>New Post</div>
                 <div>
                     <div>Post</div>
                     <div>Post 2</div>
                     <div>Post 3</div>
                     <div>Post 4</div>
                 </div>
                </div>
            </div>


        </div>
    )
}


export default App;
