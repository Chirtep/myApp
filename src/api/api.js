import * as axios from "axios";
import {feedUnifier} from "../components/common/utils/feedUnifier";

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
    },
    getFollowedUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&friend=true`)
            .then(response => response.data)
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
    },
    checkFollow(userId) {
        return instance.get(`follow/` + userId)
            .then(response => response.data)
    },
    uploadPic(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.post(`auth/logout`, {})
    },
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const newsAPI = {
    getFeed(url, resource, proxy) {
        return feedUnifier(url, resource, proxy)
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    }
}

