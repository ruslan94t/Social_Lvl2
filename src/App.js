import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import s from "./components/Dialogs/Dialogs.module.css";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {


    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                {/*<Route  path="/dialogs" component={Dialogs} />*/}
                {/*<Route path="/profile" component={Profile} />*/}

                <Route path="/dialogs"
                       render={() => <DialogsContainer
                           store={props.store}
                       />}/>

                <Route path="/profile"
                       render={() => <Profile
                           store={props.store}
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}

                       />}/>

            </div>


        </div>


    )
}


export default App;
