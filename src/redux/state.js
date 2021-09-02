import React from "react";
let rerenderEntireTree = '';

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 12},
            {id: 2, message: 'It\'s my first post', likeCount: 7},
            {id: 3, message: 'BlaBla', likeCount: 3},
            {id: 4, message: 'FooBar', likeCount: 6}
        ],
        newPostText: 'it-kamasutra.com'
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Raweater'},
            {id: 2, name: 'Force_maker'},
            {id: 3, name: 'Vikanya'},
            {id: 4, name: 'Stolgi4enko'},
            {id: 5, name: 'Foxy'},
            {id: 6, name: 'MaxMayer'}
        ],

        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your IT Kamasutra?'},
            {id: 3, message: 'WAZAAAAAAAAAAAAAP'},
            {id: 4, message: 'Hello there!'},
            {id: 5, message: 'Oh, hi Mark!'},
            {id: 6, message: 'lol'}
        ],

        newMessage: 'Напиши что-нибудь!'
    },

    sideBar: {
        friends: [
            {
                id: 1,
                name: 'Raweater',
                img: 'https://www.pinclipart.com/picdir/middle/499-4992513_avatar-avatar-png-clipart.png'
            },
            {
                id: 2,
                name: 'Force_maker',
                img: 'https://www.pinclipart.com/picdir/middle/499-4992513_avatar-avatar-png-clipart.png'
            },
            {
                id: 3,
                name: 'Vikanya',
                img: 'https://www.pinclipart.com/picdir/middle/499-4992513_avatar-avatar-png-clipart.png'
            },
            {
                id: 4,
                name: 'Stolgi4enko',
                img: 'https://www.pinclipart.com/picdir/middle/499-4992513_avatar-avatar-png-clipart.png'
            },
            {
                id: 5,
                name: 'Foxy',
                img: 'https://www.pinclipart.com/picdir/middle/499-4992513_avatar-avatar-png-clipart.png'
            },
            {
                id: 6,
                name: 'MaxMayer',
                img: 'https://www.pinclipart.com/picdir/middle/499-4992513_avatar-avatar-png-clipart.png'
            }
        ]
    }
}

window.state = state;

export const addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {

    let newMessage = {
        id: 7,
        message: state.dialogsPage.newMessage
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessage = '';
    rerenderEntireTree(state);

}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessage = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; //паттерн наблюдатель // publisher subscriber
}

export default state