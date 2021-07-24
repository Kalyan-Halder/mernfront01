import React,{useContext} from 'react';
import { NavLink } from "react-router-dom";

//icon packs
import { FaHome } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";


import {UserContext} from '../App';


import logo from "../img/logo1.png";
import "../index.css";

 

const Nav = () => {

    const {state,dispatch} = useContext(UserContext);
    console.log(state);
    const NavRender = ()=>{
        if(state){
            return(<>
                    <NavLink exact activeClassName="active" className="navlinks" to="/"><div className="nav_icon"><FaHome size="1.2rem" />Home</div></NavLink>
                    <NavLink activeClassName="active" className="navlinks" to="/user"><div className="nav_icon"><FaUserAlt size=".9rem"/> Profile </div></NavLink>
                    <NavLink activeClassName="active" className="navlinks" to="/contact"><div className="nav_icon"><MdPermContactCalendar size="1.3rem"/> Contact </div></NavLink>
                   
            </>);
        }
        else if(!state){
            return(<>
                    <NavLink exact activeClassName="active" className="navlinks" to="/"><div className="nav_icon"><FaHome size="1.2rem" />Home</div></NavLink>
                    <NavLink activeClassName="active" className="navlinks" to="/signup"><div className="nav_icon"><FaUserPlus size="1.2rem"/> Signup </div></NavLink>
                    <NavLink activeClassName="active" className="navlinks" to="/login"><div className="nav_icon"><FaSignInAlt size="1.2rem"/> Login </div></NavLink>
            </>);
        }
    }
    return (
        <>
            <div className="topbar">
                <div className="logo">
                   <NavLink to="/home"><img src={logo} alt="" /></NavLink>
                </div>
                 <div className="navbar">
                    <NavRender/>   
                </div>
            </div>
        </>
    )
}
export default Nav;