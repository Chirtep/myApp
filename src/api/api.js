import * as axios from "axios";
import {getAuthMe} from "../redux/auth-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "3edbec09-c499-46ae-ba3a-0f33cce848fe"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/` + id)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/` + id, {})
            .then(response => response.data)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe})

    },
    logout() {
        return instance.post(`auth/logout`, {})
    },
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}
