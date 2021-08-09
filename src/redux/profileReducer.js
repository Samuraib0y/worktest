import {getStatusApi, updateStatusApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const GET_USER_STATUS = 'GET_USER_STATUS'



let initialState = {
    PostsData: [
        {id: 1, message: 'Heey retard,suck', likescount: 23},
        {id: 2, message: 'Noooo, hes normal', likescount: 2}
    ],
    profile: null,
    status: " "
};





const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likescount: 123
            };
            return {...state, PostsData: [...state.PostsData, newPost], newPostText: '' }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case GET_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}




export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})
export const getUserStatus = (status) => ({type:GET_USER_STATUS, status})



export const getStatus = (userId) => {
    return (dispatch) =>{
        getStatusApi(userId).then(data =>{
            dispatch(getUserStatus(data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) =>{
        updateStatusApi(status).then(responce =>{ if(responce.data.resultCode === 0)
            dispatch(getUserStatus(status))
        })
    }
}



export default profileReducer;

