const SET_POST = 'SET-POST';
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case SET_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case SET_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export const setPostActionCreator = () => ({type: SET_POST})
export const setNewPostTextActionCreator = (text) =>
    ({type: SET_NEW_POST_TEXT, newText: text})

export default profileReducer;