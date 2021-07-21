import React from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";

const getData = ()=>{
    localStorage.removeItem("jwtoken");
}


const Logout = () => {
    useEffect(()=>{
        getData();
    },[]);
     
    return (
        <>
            <div className="homediv">
                     <h1 style={{color: "white"}}>You Have Been Logged Out 😭</h1>
                     <NavLink className="redirect2" to="/">Home</NavLink>
            </div>
        </>
    )
}
export default Logout;