import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../components/Common/FormsControls/FormsControls";
import {requiredField} from "../utils/validators/validators";
import Redirect from "react-router-dom/es/Redirect";
import style from "./../components/Common/FormsControls/FormsControls.module.css"


const Login = (props) => {

    const onSubmit = (formData) =>{
        props.getLoginPass(formData.login,formData.password,formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"profile"} />
    }



    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} validate={requiredField} name={"login"} component={Input}/></div>
            <div><Field placeholder={"Password" } validate={requiredField} name={"password"} type={"password"} component={Input} /></div>
            <div><Field component={"input"} name={"rememberMe"} type={"checkbox"} /> Remember me</div>
            { props.error && <div className={style.allError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


export default Login