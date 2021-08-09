import React from "react";
import style from "./FormsControls.module.css"




const FormControls = ({input, meta,child, ...props}) =>{
    const hasError =  meta.touched && meta.error;
    return(
        <div className={style.formControl +" " + (hasError ? style.error: "")}>
          <div>
              {props.children}
        </div>
    {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) =>{
    const {input, meta,child,...restProps} = props;
    return <FormControls {...props}> <textarea {...input} {...props}/>   </FormControls>
}


export const Input = (props) =>{
    const {input, meta,child,...restProps} = props;
    return <FormControls {...props}> <input {...input} {...props}/>   </FormControls>
}

