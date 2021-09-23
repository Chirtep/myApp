const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_USER_PROFILE = 'SET_AUTH_USER_PROFILE';

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

        case SET_AUTH_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const setAuthUserProfile = (userProfile) => ({type: SET_AUTH_USER_PROFILE, userProfile})

export default authReducer;