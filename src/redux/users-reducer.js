const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u =>  {
                    if (u.id === action.userID) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }
}

export const toggleFollowAC = (userID) => ({type: TOGGLE_FOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;