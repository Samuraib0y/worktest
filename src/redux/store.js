// import profileReducer from "./profileReducer";
// import messagesReducer from "./messagesReducer";
//
//
// let store = {
//     _state: {
//         profilePage: {
//             PostsData: [
//                 {id: 1, message: 'Heey retard,suck', likescount: 23},
//                 {id: 2, message: 'Noooo, hes normal', likescount: 2}
//             ],
//             newPostText: 'SamyraiBoi otsasuvai mne chlen chel'
//         },
//         messagePage: {
//             MessageData: [
//                 {id: 1, name: 'Samsa'},
//                 {id: 2, name: 'Katya'},
//                 {id: 3, name: 'Max'},
//                 {id: 4, name: 'Tsar'}
//             ],
//             DialogData:
//                 [
//                     {id: 1, text: 'Привет'},
//                     {id: 2, text: 'Как твои дела'},
//                     {id: 3, text: 'Хорошо'},
//                     {id: 4, text: 'А твои?'},
//                     {id: 5, text: 'Тоже'},
//                 ],
//             newMessageText: ''
//         },
//         sidebar: {}
//     },
//     getState() {
//         return this._state
//     },
//     _callSubscriber() {
//         console.log('Its done');
//     },
//     subscriber(observer) {
//         this._callSubscriber = observer;
//     },
//
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.messagePage = messagesReducer(this._state.messagePage, action);
//
//
//         this._callSubscriber(this._state)
//
//     }
// }
//
//
// export default store;
