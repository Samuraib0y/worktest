
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    MessageData: [
        {id: 1, name: 'Samsa'},
        {id: 2, name: 'Katya'},
        {id: 3, name: 'Max'},
        {id: 4, name: 'Tsar'}
    ],
    DialogData:
        [
            {id: 1, text: 'Привет'},
            {id: 2, text: 'Как твои дела'},
            {id: 3, text: 'Хорошо'},
            {id: 4, text: 'А твои?'},
            {id: 5, text: 'Тоже'},
        ]
};


const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                    id: 8,
                    text: action.newMessageBody
                }
            return {
                ...state,
                DialogData: [...state.DialogData, newMessage]
            }
        // stateCopy.DialogData = [...state.DialogData]
        // let newMessage = {
        //     id: 8,
        //     text: stateCopy.newMessageText,
        // }
        // stateCopy.DialogData.push(newMessage)
        // stateCopy.newMessageText = '';

default:
    return state;
}

}




export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default messagesReducer;