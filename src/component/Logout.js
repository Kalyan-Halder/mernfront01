import React,{useContext} from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import {UserContext} from "../App"
 

const getData = ()=>{
    localStorage.removeItem("jwtoken");
}


const Logout = () => {
    const{state,dispatch} = useContext(UserContext);
    useEffect(()=>{
        dispatch({type:"USER",payload:false});
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