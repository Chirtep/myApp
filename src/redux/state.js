import React from "react";

let store = {
    _state: {
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
    },

    _rerenderEntireTree() {
        console.log('no observers')
    },

    getState() {
        return this._state;
    },

    subscribe (observer) {
        this._rerenderEntireTree = observer; //паттерн наблюдатель // publisher subscriber
    },

    setPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state);
    },

    setNewPostText (newText) {
       this._state.profilePage.newPostText = newText;
       this._rerenderEntireTree(this._state);
    },

    setMessage() {
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessage
        };

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessage = '';
        this._rerenderEntireTree(this._state);
    },

    setNewMessageText (newText) {
        this._state.dialogsPage.newMessage = newText;
        this._rerenderEntireTree(this._state);
    }
}

export default store