import {profileAPI, usersAPI} from "../api/api";

const SET_POST = 'SET-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'It\'s my first post', likeCount: 7},
        {id: 3, message: 'BlaBla', likeCount: 3},
        {id: 4, message: 'FooBar', likeCount: 6}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
}

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setPost = (newPostText) => ({type: SET_POST, newPostText})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });

}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });

}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });

}

export default profileReducer;