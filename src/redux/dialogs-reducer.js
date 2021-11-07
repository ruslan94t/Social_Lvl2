const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState= {
    dialogs: [
        {id: 1, name: "Alina"},
        {id: 2, name: "Masha"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Nastya"},
        {id: 5, name: "Juliya"},
        {id: 6, name: "Anya"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo Yo Yo"},
        {id: 3, message: "How is you"},
        {id: 4, message: "Whery you"},

    ],
    newMessageBody: "",
}

const dialogsReducer = (state=initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id:7,message: body});

            return state
        default:
            return state

    }


    return state;
}

export default dialogsReducer;



export const sendMessageCreator = ()=>({type:SEND_MESSAGE});
export  const updateNewMessageBodyCreator = (body)=>({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})
