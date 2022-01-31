import {usersAPI} from "../api/api";
import {toggleIsFetching} from "./users-reducer";

const SET_USER_MESSAGE = 'myApp/dialogsReducer/SET_USER_MESSAGE',
    SET_DIALOGS = 'myApp/dialogsReducer/SET_DIALOGS',
    SET_MESSAGE = 'myApp/dialogsReducer/SET_MESSAGE'

let initialState = {
    dialogs: [],
    messages: [],
    words: [
        ["Товарищи,", "С другой стороны", "Равным образом", "Не следует, однако, забывать, что", "Таким образом", "Повседневная практика показывает, что", "Значимость этих проблем настолько очевидна, что", "Разнообразный и богатый опыт", "Задача организации, в особенности же", "Идейные соображения высшего порядка, а также"],
        ["реализация намеченных плановых заданий", "рамки и место обучения кадров", "постоянный и количественный рост и сфера нашей активности", "сложившаяся структура организации", "новая модель организационной деятельности", "дальнейшее развитие различных форм деятельности", "постоянное информационно-пропагандистское обеспечение нашей деятельности", "укрепления и развития структуры", "консультация с широким активом", "начало повседневной работы по формированию позиции"],
        ["играет важную роль в формировании", "требуют от нас анализа", "требуют определения и уточнения", "способствует подготовке и реализации", "обеспечивает широкому кругу (специалистов) участие в формировании", "позволяет выполнить важные задания по разработке", "в значительной степени обусловливает создание", "позволяет оценить значение", "представляет собой интересный эксперимент проверки", "влечет за собой процесс внедрения и модернизации"],
        ["существующих финансовых и административных условий", "дальнейших направлений развития", "системы массового участия", "позиций, занимаемых участниками в отношении поставленных задач", "новых предложений", "направлений прогрессивного развития", "системы обучения кадров, соответствующей насущным потребностям", "соответствующих условий активизации", "модели развития", "форм воздействия"]
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_MESSAGE:
            let newBody = {
                id: action.id,
                message: action.newMessageBody,
                flag: action.flag
            };

            return {
                ...state,
                messages: [...state.messages, newBody]
            };

        case SET_MESSAGE: {
            let newMessage = {
                id: action.id,
                message: action.message
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }

        case SET_DIALOGS: {
            return {
                ...state,
                dialogs: action.dialogs
            }
        }

        default:
            return state;
    }
}


export const setUserMessage = (newMessageBody, id, flag) => ({type: SET_USER_MESSAGE, newMessageBody, id, flag}),
    setDialogs = (dialogs) => ({type: SET_DIALOGS, dialogs}),
    setMessage = (id, message) => ({type: SET_MESSAGE, id, message})

export const getDialogs = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setDialogs(data.items));
    }
}

export const getMessages = (userId, message) => {
    return (dispatch) => {
        dispatch(setMessage(userId, message))
    }
}

export default dialogsReducer;