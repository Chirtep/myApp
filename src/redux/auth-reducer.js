import {authAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'myApp/authReducer/SET_USER_DATA',
    SET_AUTH_USER_PROFILE = 'myApp/authReducer/SET_AUTH_USER_PROFILE'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    userProfile: null
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        case SET_AUTH_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }

        default:
            return state;
    }
}

const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})
const setAuthUserProfile = (userProfile) => ({type: SET_AUTH_USER_PROFILE, userProfile})

export const getAuthMe = () => async (dispatch) => {
    let data = await authAPI.getAuthMe()

    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
        usersAPI.getProfile(id)
            .then(data => {
                dispatch(setAuthUserProfile(data));
            })
    }
}

export const loginMe = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthMe());
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;