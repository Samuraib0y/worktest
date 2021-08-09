import React from "react";
import s from "./../Messages.module.css"



const Dialog = (props) => {
    return (
        <div className={s.dialogs_item}>{props.text}</div>
    )
}

export default Dialog;
