import React from "react";
import s from "./Messages.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Textarea} from "../Common/FormsControls/FormsControls";


const maxLength50 = maxLengthCreator(50)

const Messages = (props) => {
  let addNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody)
  }


    let MessageElements = props.messagePage.MessageData.map(message => <Message name={message.name} id={message.id}/>);

    let DialogElements = props.messagePage.DialogData.map(dialog => <Dialog text={dialog.text}/>)






    return (
        <div className={s.messages}>
            <div className={s.message_items}>
                {MessageElements}
            </div>
            <div className={s.dialogs}>
                {DialogElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>

    )
}


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                 <Field validate={[requiredField,maxLength50]} component={Textarea} name={"newMessageBody"} placeholder={"Enter your message"}/>
                        {/*// onChange={onMessageChange} ref={newMessageElement} value={props.messagePage.newMessageText}/>*/}
            </div>
            <div>
                <button onClick={props.sendOnMessage}>Отправить</button>

            </div>

        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddmesageForm"})(AddMessageForm)


export default Messages;
