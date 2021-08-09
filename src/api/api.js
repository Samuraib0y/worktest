import * as axioc from "axios";


const instance = axioc.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "65644754-d35d-40ea-8a14-9b41c1451076"
    }
})


export const getUsers = (currentPage = 1, pageSize = 7) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        })
        .then(responce => responce.data)
}


export const authMeApi = () => {
    return instance.get(`auth/me`).then(responce => responce.data)
}

export const unFollowApi = (id) => {
    return instance.delete(`follow/${id}`).then(responce => responce.data)
}

export const followApi = (id) => {
    return instance.post(`follow/${id}`, {} ).then(responce => responce.data)
}

export const profileApi = (id) => {
    return instance.get(`profile/${id}`).then(response => response.data)
}

export const getStatusApi = (id) => {
    return instance.get(`profile/status/${id}`).then(response => response.data)
}

export const updateStatusApi = (status) => {
    return instance.put(`profile/status`, {status: status})
}

export const getLoginApi = (email, password, rememberMe = false) => {
    return instance.post(`auth/login`,{email:email, password:password, rememberMe: rememberMe}).then(responce => responce.data)
}

export const logOutApi = () => {
    return  instance.delete(`auth/login`)
}