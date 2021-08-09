import React from "react";
import t from "./Test.module.css"







const Test = (props) => {


   let addWarn = () => {
        window.alert(props.text)
    }


    return(
        <div className={t.dar}>
            <div className={t.vei}>
                <button onClick={addWarn}> Test me! </button>
            </div>
        </div>
    )
}


export default Test;