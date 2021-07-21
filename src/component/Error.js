import React from 'react';
import { NavLink } from "react-router-dom";
import "../index.css";

const Error = () => {
    return (
        <>
            <div className="homediv">
                <h1 className="redirect3">Page 404 Not Found!!!</h1>
                <NavLink className="redirect2" to="/home"><div className="nav_icom">Home</div></NavLink>
            </div>
        </>
    )
}
export default Error;