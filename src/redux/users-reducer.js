import {usersAPI} from "../api/api"

const TOGGLE_FOLLOW = 'myApp/usersReducer/TOGGLE_FOLLOW',
    SET_USERS = 'myApp/usersReducer/SET_USERS',
    SET_CURRENT_PAGE = 'myApp/usersReducer/SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'myApp/usersReducer/SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'myApp/usersReducer/TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'myApp/usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS',
    TOGGLE_FLAG = 'myApp/usersReducer/TOGGLE_FLAG',
    SET_FOLLOWED_USERS = 'myApp/usersReducer/SET_FOLLOWED_USERS'

let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    flag: false,
    followedUsers: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }

        case TOGGLE_FLAG: {
            return {
                ...state,
                flag: action.flag
            }
        }

        case SET_USERS: {
            return {...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]
            }
        }

        case SET_FOLLOWED_USERS: {
            return {...state, followedUsers: action.followedUsers}
        }

        default:
            return state;
    }
}

export const toggleFollow = (userID) => ({type: TOGGLE_FOLLOW, userID}),
    setUsers = (users) => ({type: SET_USERS, users}),
    setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage}),
    setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount}),
    toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching}),
    toggleFollowingProgress = (isFetching, userId) => ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }),
    toggleFlag = (flag) => ({type: TOGGLE_FLAG, flag}),
    setFollowedUsers = (followedUsers) => ({type: SET_FOLLOWED_USERS, followedUsers})

export const setFlag = (flag) => {
    return (dispatch) => {
        dispatch(toggleFlag(flag))
    }
}

const toggleFollowFlow = async (dispatch, userId, apiMethod) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId)

    if (data.resultCode === 0) {
        dispatch(toggleFollow(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));

    let followedData = await usersAPI.getFollowedUsers(1, 100)
    dispatch(setFollowedUsers(followedData.items))
}

export const getUsers = (page, pageSize, followed) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await (followed === false ? usersAPI.getUsers(page, pageSize) : usersAPI.getFollowedUsers(page, pageSize))

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setCurrentPage(page));
    }
}


export const follow = (userId) => {
    return async (dispatch) => {
        await toggleFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI))
    }
}

export const unfollow = (userId) => async (dispatch) => {
    await toggleFollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI))
}

export default usersReducer;