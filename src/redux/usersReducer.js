import {followApi, getUsers, profileApi, unFollowApi} from "../api/api";
import {setUserProfile} from "./profileReducer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
        }
        // Если id isFollowing равно true мы добавляем в массив, если же нет, то фильтруем массив(создаем новый массив)
        // и убираем id которое не равно той id что пришла в экшене
        //     про фильтр создается новый массив без айдишек которые имеют тру
        default:
            return state;
    }
}


export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersCount = (totalUsersCount) => ({type: SET_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowing = (isFollowing, userId) => ({type: TOGGLE_IS_FOLLOWING, isFollowing,
    userId
})



export const getUsersThunk = (currentPage, pageSize) =>{
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        getUsers(currentPage, pageSize).then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setUsersCount(data.totalCount))
            }
        )
    }
}

export const unfollow = (userId) =>{
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        unFollowApi(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(unFollowSuccess(userId))

            }
            dispatch(toggleIsFollowing(false, userId))
        })
    }
}
export const follow = (userId) =>{
    return (dispatch) => {
        dispatch(toggleIsFollowing(true,userId))
        followApi(userId).then(data => {

            if (data.resultCode == 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowing(false, userId))
        })
    }
}

export const getProfile = (userId) => {
    return (dispatch) =>{
        profileApi(userId).then(data =>{
            dispatch(toggleIsFetching(false))
            dispatch(setUserProfile(data))
        })
    }
}





export default usersReducer;