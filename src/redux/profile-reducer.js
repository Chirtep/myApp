import {usersAPI} from "../api/api";

const SET_POST = 'SET-POST';
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'It\'s my first post', likeCount: 7},
        {id: 3, message: 'BlaBla', likeCount: 3},
        {id: 4, message: 'FooBar', likeCount: 6}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case SET_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state;
    }
}

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setPostActionCreator = () => ({type: SET_POST})
export const setNewPostTextActionCreator = (text) =>
    ({type: SET_NEW_POST_TEXT, newText: text})

export const getProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });

}

export default profileReducer;