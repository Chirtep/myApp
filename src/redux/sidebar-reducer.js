import {usersAPI} from "../api/api";
import {RandomArray} from "../components/common/Randomizers/RandomArray/RandomArray";

const SET_FRIENDS = 'myApp/sidebarReducer/SET_FRIENDS'

let initialState = {
    followedUsers: [],
    pageSize: 100,
    friends: []
}

const sidebarReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_FRIENDS: {
            return {
                ...state,
                friends: action.friends
            }
        }

        default:
            return state;
    }
}

export const setFriends = (friends) => ({type: SET_FRIENDS, friends})

export const getFollowedUsers = (page, pageSize) => {
    return async (dispatch) => {
        let data = await usersAPI.getFollowedUsers(page, pageSize)
        dispatch(setFriends(RandomArray(data.items, 6)))
    }
}

export default sidebarReducer;
