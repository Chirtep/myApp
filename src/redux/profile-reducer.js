import {profileAPI, usersAPI} from "../api/api";
import {RandomNum} from "../components/common/Randomizers/RandomNum/RandomNum";
import {RandomMessageGen} from "../components/common/Randomizers/RandomMessageGen/RandomMessageGen";
import {dateGen} from "../components/common/utils/dateGen";
import {updateUserPic} from "./auth-reducer";

const SET_POST = 'myApp/profileReducer/SET-POST',
    SET_USER_PROFILE = 'myApp/profileReducer/SET_USER_PROFILE',
    SET_STATUS = 'myApp/profileReducer/SET_STATUS',
    SET_COM_USERS = 'myApp/profileReducer/SET_COM_USERS',
    SET_REPLIES = 'myApp/profileReducer/SET_REPLIES',
    REMOVE_REPLY = 'myApp/profileReducer/REMOVE_REPLY',
    REMOVE_POST = 'myApp/profileReducer/REMOVE_POST',
    CHECK_FOLLOW = 'myApp/profileReducer/CHECK_FOLLOW',
    UPLOAD_PIC = 'myApp/profileReducer/UPLOAD_PIC'

let initialState = {
    posts: [],
    newPostText: '',
    profile: null,
    status: '',
    comUsers: [],
    replies: [],
    forms: [
        {name: 'fullName', type: 'textarea', label: 'Full name:', id: 'textarea1'},
        {name: 'lookingForAJob', type: 'checkbox', label: 'Looking for a job?'},
        {name: 'lookingForAJobDescription', type: 'textarea', label: 'My Professional Skills:', id: 'textarea2'},
        {name: 'aboutMe', type: 'textarea', label: 'About me:', id: 'textarea3'}
    ],
    contactsForm: [
        {name: 'contacts.facebook', type: 'textarea', label: 'Facebook', id: 'textarea4'},
        {name: 'contacts.website', type: 'textarea', label: 'Website', id: 'textarea5'},
        {name: 'contacts.vk', type: 'textarea', label: 'VKontakte', id: 'textarea6'},
        {name: 'contacts.twitter', type: 'textarea', label: 'Twitter', id: 'textarea7'},
        {name: 'contacts.instagram', type: 'textarea', label: 'Instagram', id: 'textarea8'},
        {name: 'contacts.youtube', type: 'textarea', label: 'YouTube', id: 'textarea9'},
        {name: 'contacts.github', type: 'textarea', label: 'GitHub', id: 'textarea10'},
        {name: 'contacts.mainLink', type: 'textarea', label: 'Main link', id: 'textarea11'},
    ],
    errors: []
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_POST:
            let newPost = {
                id: action.id,
                message: action.newPostText,
                likeCount: action.likeCount,
                comments: action.comments,
                time: action.time,
                userId: action.userId
            };

            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case SET_REPLIES:
            let newReply = {
                id: action.id,
                reply: action.reply,
                repliedUser: action.repliedUser,
                repliedUserPic: action.repliedUserPic,
                likeCount: action.likeCount,
                replier: action.replier,
                flag: action.flag,
                time: action.time
            }

            return {
                ...state,
                replies: [...state.replies, newReply]
            }

        case REMOVE_REPLY:
            return {
                ...state,
                replies: [...state.replies.filter(r => state.replies.indexOf(r) !== action.index)]
            }

        case REMOVE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(r => r.id !== action.id)]
            }

        case SET_COM_USERS:
            return {
                ...state,
                comUsers: action.comUsers
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case CHECK_FOLLOW:
            return {
                ...state,
                profile: {...state.profile, followed: action.followed}
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        case UPLOAD_PIC:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }

        default:
            return state;
    }
}

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setPost = (newPostText, id, likeCount, comments, time, userId) => ({
        type: SET_POST,
        newPostText,
        id,
        likeCount,
        comments,
        time,
        userId
    }),
    setStatus = (status) => ({type: SET_STATUS, status}),
    setComUsers = (comUsers) => ({type: SET_COM_USERS, comUsers}),
    setReplies = (id, reply, repliedUser, repliedUserPic, likeCount, replier, flag, time) => ({
        type: SET_REPLIES,
        id,
        reply,
        repliedUser,
        repliedUserPic,
        likeCount,
        replier,
        flag,
        time
    }),
    removeReply = (index) => ({type: REMOVE_REPLY, index}),
    removePost = (id) => ({type: REMOVE_POST, id}),
    checkFollow = (followed) => ({type: CHECK_FOLLOW, followed}),
    uploadPicSuccess = (photos) => ({type: UPLOAD_PIC, photos})

export const getProfile = (userId) => async (dispatch) => {
    let data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data));

    let followData = await profileAPI.checkFollow(userId)
    dispatch(checkFollow(followData))
}

export const getComUsers = (array) => async (dispatch) => {
    let data = await usersAPI.getUsers(RandomNum(1, 30), 20),
        comments = []

    data.items.forEach((item) => {
        comments.push({
            name: item.name,
            id: item.id,
            message: RandomMessageGen(array),
            photos: item.photos,
            likeCount: RandomNum(0, data.items.length),
            time: dateGen()
        })
    })
    dispatch(setComUsers(comments))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const uploadPic = (file) => async (dispatch) => {
    let response = await profileAPI.uploadPic(file)

    if (response.data.resultCode === 0) {
        dispatch(uploadPicSuccess(response.data.data.photos));
        dispatch(updateUserPic(response.data.data.photos))
    }
}

export default profileReducer;