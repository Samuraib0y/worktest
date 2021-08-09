import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                {props.message}</div>
            <div className={s.likes}>
                    {props.likescount}
            </div>
        </div>
    )
}

export default Post;
