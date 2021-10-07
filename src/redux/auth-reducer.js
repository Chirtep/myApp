import {authAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_USER_PROFILE = 'SET_AUTH_USER_PROFILE';
const SET_AUTH = 'SET_AUTH';

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
                ...action.data,
                isAuth: true
            }

        case SET_AUTH:
            return {
                ...state,
                isAuth: !state.isAuth
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

const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
const setAuthUserProfile = (userProfile) => ({type: SET_AUTH_USER_PROFILE, userProfile})
const setAuth = () => ({type: SET_AUTH})

export const getAuthMe = () => (dispatch) => {
    authAPI.getAuthMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login));
                usersAPI.getProfile(id)
                    .then(data => {
                        dispatch(setAuthUserProfile(data));
                    })
            }
        });
}

export const loginMe = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                console.log('login success!')
                dispatch(setAuth());
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                console.log('logout success!')
                dispatch(setAuth());
            }
        })
}

export default authReducer;