import React from 'react';
import c from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <div><NavLink to="/profile" activeClassName={c.active}>Profile</NavLink></div>
                <div><NavLink to="/messages" activeClassName={c.active}>Messages</NavLink></div>
                <div><NavLink to="/users" activeClassName={c.active}>Users</NavLink></div>
                <div><NavLink to="/test" activeClassName={c.active}>Test</NavLink></div>
                <div>werewrewrew</div>
                <div>ewrewrewr</div>
            </div>
        </nav>
    )
}

export default Navbar;
