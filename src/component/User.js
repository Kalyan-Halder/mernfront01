import React, { useEffect ,useState} from 'react';
import { NavLink } from "react-router-dom";

//Icons pack
import { BsFillPersonFill } from "react-icons/bs";
import {HiOutlineMailOpen} from 'react-icons/hi';
import { HiOutlinePhone } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";


import profile_img from "../img/profile.svg";

const User = () => {
    const[data,setData] = useState({name:"",email:"",phone:"",password:"",conpassword:""});

    const getData = async()=>{
        const token = localStorage.getItem("jwtoken");
          
        try{
       
            const res = await fetch("https://mernback01.herokuapp.com/user", {
               method:"POST",
               headers:{
                   Accept :"application/json",
                   "Content-Type":"application/json"
               },
               body: JSON.stringify({token})
           });
           if(res.status === 401){
               setData({name:"N/A",email:"N/A",phone:"N/A"});
               setTimeout(function() { alert(`You are not logged_in\nPlease Login first`);
               }, 500); 
           }
           else if(res.status === 402){
             
               setTimeout(function() { alert(`Something went Wrong!!\nPlease Login again`);
               }, 500);
               setData({name:"N/A",email:"N/A",phone:"N/A"});
           }
           else if(res.status === 200){
           const user = await res.json();
           setData(user);
        }
        }catch(err){
           console.log(err);
        }
    }
    
    useEffect(()=>{
        getData();
    },[]);
    return (
        <>
            <div className="homediv">
              
                <div className="detail_holder"> 
                       
                            
                          
                     <div className="logo_inner">
                              <h1 style={{color: "black"}}>User Profile</h1>
                              <img src={profile_img} alt="" />
                     </div>
                     <div className="input_inner">
                             <div className="detail">
                                   <BsFillPersonFill size="1.5rem"/>
                                  <h1> {data.name}</h1>
                             </div>
                                <div className="detail">
                                   <HiOutlineMailOpen size="1.5rem"/>
                                  <h1> {data.email}</h1>
                             </div>
                             <div className="detail">
                                    <HiOutlinePhone size="1.5rem"/>
                                           <h1> {data.phone}</h1>
                              </div>
                              <div className="redirects">
                                   <NavLink className="redirect2" to="/home"><div className="nav_icon"><FaHome size="1.2rem" />Home</div></NavLink>
                                   <NavLink className="redirects2" to="/logout"><div className="nav_icon"><BiLogOut size="1.3rem"/> Logout </div></NavLink>
                             </div>
                     </div>
                </div>
               
              
            </div>
        </>
    )
}
export default User;