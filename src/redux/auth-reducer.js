import {authAPI, securityAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'myApp/authReducer/SET_USER_DATA',
    SET_AUTH_USER_PROFILE = 'myApp/authReducer/SET_AUTH_USER_PROFILE',
    UPDATE_USER_PIC = 'myApp/authReducer/UPDATE_USER_PIC',
    GET_CAPTCHA_URL = 'myApp/authReducer/GET_CAPTCHA_URL'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    userProfile: null,
    captchaUrl: null
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

        case UPDATE_USER_PIC:
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos}
            }

        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
}),
    setAuthUserProfile = (userProfile) => ({type: SET_AUTH_USER_PROFILE, userProfile}),
    updateUserPic = (photos) => ({type: UPDATE_USER_PIC, photos}),
    setCaptchaUrl = (captchaUrl) => ({type: GET_CAPTCHA_URL, captchaUrl})

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

export const getCaptcha = () => async (dispatch) => {
    let response = await securityAPI.getCaptcha()
    const captchaUrl = response.data.url

    dispatch(setCaptchaUrl(captchaUrl))
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;