import React from "react";
import s from "./../Messages.module.css"
import {NavLink} from "react-router-dom";

const Message = (props) => {
    let path = "/dialog/" + " " + props.id;

    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={path}>{props.name} </NavLink>
        </div>
    )
}


export default Message;
