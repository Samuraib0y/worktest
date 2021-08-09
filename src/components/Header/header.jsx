import React from "react";
import h from "./header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <header className={h.header}>
            <img src="/public/logo192.png" alt=""/>




            <div className={h.loginBlock}>
                { props.isAuth ? <div>{props.login}  <button onClick={props.loginOut} >Log out</button></div> :
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;