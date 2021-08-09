import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form';
import appReducer from "./appReducer";
import testReducer from "./testReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    test: testReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;