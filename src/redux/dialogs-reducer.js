const SET_MESSAGE = 'SET-MESSAGE';
const SET_NEW_MESSAGE_BODY = 'SET-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SET_MESSAGE:
            let newBody = {
                id: 7,
                message: state.newMessageBody
            };

            state.messages.push(newBody);
            state.newMessageBody = '';
            return state;

        case SET_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        default:
            return state;
    }
}


export const setMessageCreator = () => ({type: SET_MESSAGE})
export const setNewMessageBodyCreator = (body) =>
    ({type: SET_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;