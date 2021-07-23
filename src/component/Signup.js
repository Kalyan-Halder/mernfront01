import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from "react-router-dom";
import "../index.css";

//Icon packs
import { BsFillPersonFill } from "react-icons/bs";
import {HiOutlineMailOpen} from 'react-icons/hi';
import { HiOutlinePhone } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import sign_img from "../img/signup.svg";

//context api and reducer function
 

const Signup = () => {
    
    

    const history = useHistory();
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        conpassword: ""
    });
    const changeEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value });
    }




    const submitEvent = async(e)=>{
        e.preventDefault();
        const {name,email,phone,password,conpassword} = data;
        try{
      
                const res = await fetch("https://mernback01.herokuapp.com/signup", {
                 method:"POST",
                 headers:{
                     "Content-Type":"application/json"
                 },
                 body: JSON.stringify({name,email,phone,password,conpassword})
             });
            if(res.status === 403){
                window.alert("Please fill all necessary data!!!");
                setData({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                    conpassword: ""
                 }); 
            }
            else if(res.status === 200){
                 
                 window.alert(`Data Submitted \nYou can Login Now!!!`);
                 history.push("/login");
                 
             }
             else if(res.status === 402){
                 window.alert("Password Does Not Match");
                 setData({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                    conpassword: ""
                 }); 
             }
             else if(res.status === 401){
                window.alert("Email Already in Use");
                setData({
                   name: "",
                   email: "",
                   phone: "",
                   password: "",
                   conpassword: ""
                });   
            }
        }catch(err){
             console.log(err);
        }
    }
    return (
        <>
            <div className="form_warp">
                <form method="POST" autoComplete='off'>
                     <div className="logo_inner">
                          <img src={sign_img} alt="" />
                     </div>
                     <div className="input_inner">
                         
                    <div className="input_holder">
                         <BsFillPersonFill size="1.5rem"/>
                         <input type="text" name="name" placeholder="Name..." value={data.name} onChange={changeEvent}  />
                    </div>
                    <div className="input_holder">
                          <HiOutlineMailOpen size="1.5rem"/>
                         <input type="email" name="email" placeholder="Email..." value={data.email} onChange={changeEvent} />
                    </div>
                    <div className="input_holder">
                         <HiOutlinePhone size="1.5rem"/>
                         <input type="number" name="phone" placeholder="Phone..."  value={data.phone} onChange={changeEvent} />
                    </div>
                   
                    <div className="input_holder">
                          <RiLockPasswordLine size="1.5rem"/>
                         <input type="password" name="password" placeholder="Password..." value={data.password} onChange={changeEvent}  />
                    </div>
                    <div className="input_holder">
                          <RiLockPasswordLine size="1.5rem"/>
                          <input type="password" name="conpassword" placeholder="Confirm Password..."  value={data.conpassword} onChange={changeEvent} />
                    </div>
                    
                    <input className="btn" type="submit" value="Sign In" onClick={submitEvent}/>
                    <NavLink className="redirect1" to="/login">Already have an account?</NavLink>
                     </div>
                </form>
            </div>
        </>
    )
}
export default Signup;