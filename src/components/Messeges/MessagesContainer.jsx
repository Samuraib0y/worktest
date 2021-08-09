import React from "react";
import {sendMessage} from "../../redux/messagesReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import Messages from "./Messages";
import {compose} from "redux";





let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessage(newMessageBody));
        }
    }
}


export default compose(connect(mapStateToProps,mapDispatchToProps) ,withAuthRedirect)(Messages)


// let AuthRedirectComponent = withAuthRedirect(Messages)
// const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);
// export default MessagesContainer;
