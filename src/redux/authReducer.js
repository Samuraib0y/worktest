import {authMeApi, getLoginApi, logOutApi} from "../api/api"
import {stopSubmit} from "redux-form"


const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, payload:{userId, email, login, isAuth}})
export default authReducer;

export const authLogin = () => {
    return (dispatch) =>{
        return authMeApi().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}





 export const getLoginPass = (email, password, rememberMe) => {
    return(dispatch) =>{
        getLoginApi(email, password, rememberMe).then(data => {
            if(data.resultCode === 0){
               dispatch(authLogin())
            }
            else {
                let message = data.messages.length > 0 ? data.messages[0] : "some Error"
                dispatch(stopSubmit("login" , {_error: message}))
            }
        })
    }
}

export const loginOut = () => {
    return(dispatch) =>{
        logOutApi().then(responce => {
            if(responce.data.resultCode === 0){
                dispatch(setAuthUserData(null,null,null, false))
            }
        })
    }
}


