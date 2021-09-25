import * as axios from "axios";

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
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}
