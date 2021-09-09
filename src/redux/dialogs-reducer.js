const SET_MESSAGE = 'SET-MESSAGE';
const SET_NEW_MESSAGE_BODY = 'SET-NEW-MESSAGE-BODY';

let initialState = {
    dialogs: [
        {id: 1, name: 'Raweater'},
        {id: 2, name: 'Force_maker'},
        {id: 3, name: 'Vikanya'},
        {id: 4, name: 'Stolgi4enko'},
        {id: 5, name: 'Foxy'},
        {id: 6, name: 'MaxMayer'}
    ],

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your IT Kamasutra?'},
        {id: 3, message: 'WAZAAAAAAAAAAAAAP'},
        {id: 4, message: 'Hello there!'},
        {id: 5, message: 'Oh, hi Mark!'},
        {id: 6, message: 'lol'}
    ],

    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_MESSAGE:
            let newBody = {
                id: 7,
                message: state.newMessageBody
            };

            return {
                ...state,
                messages: [...state.messages, newBody],
                newMessageBody: ''
            };

        case SET_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        default:
            return state;
    }
}


export const setMessageCreator = () => ({type: SET_MESSAGE})
export const setNewMessageBodyCreator = (body) =>
    ({type: SET_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;