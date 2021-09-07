import React from "react";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

            newMessageBody: ''
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

    _callSubscriber() {
        console.log('no observers')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer; //паттерн наблюдатель // publisher subscriber
    },

    //action - это объект, действие, которое должно сообщить, что именно нужно выполнить;
    // у него должно быть свойство { type: 'ЗДЕСЬ УКАЗЫВАЕМ, ЧТО ВЫПОЛНИТЬ, НАПРИМЕР SET-POST' }

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;