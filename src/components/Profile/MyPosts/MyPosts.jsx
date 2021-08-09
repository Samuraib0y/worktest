import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";


const MyPosts = (props) => {
    let newPostText = (values) =>{
        props.addPost(values.newPostText)
    }

    let PostsElements = props.PostsData.map(p => <Post message={p.message} likescount={p.likescount}/>)


    let newPostElement = React.createRef();




    return (
        <div className={s.myPost}>
            <div className={s.newPost}>
                <AddPostFormRedux onSubmit={newPostText}/>
            </div>
            <div className={s.item}>
                {PostsElements}
            </div>
        </div>

    )

}



const NewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field  validate={requiredField}  component={Textarea} name={"newPostText"} placeholder={"New post text"}/></div>
            <div>
                <button onClick={props.addPost}> Ok</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "addPostsForm"})(NewPost)

export default MyPosts;
