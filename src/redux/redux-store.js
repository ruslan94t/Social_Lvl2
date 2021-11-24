import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import userReducer from "./users-reducer";


let reducers= combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage:userReducer
})






let store = createStore(reducers);


export default store;