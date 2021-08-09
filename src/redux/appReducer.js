import {authLogin} from "./authReducer";


const SET_INITIALIZED = 'SET_INITIALIZED'



let initialState = {
    initialized: false
}


const AppReducer = (state = initialState, action) =>{
        switch (action.type) {
            case SET_INITIALIZED:
                return{
                    ...state,
                    initialized: true
                }
            default:
                return state;
        }
}


export const initialized = () => ({type: SET_INITIALIZED})

export const initializeApp = () => {
    return (dispatch) =>{
        let result =  dispatch(authLogin())
        result.then(() =>{
            dispatch(initialized())
        })

    }
}


export default AppReducer;