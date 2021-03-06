import React, { useEffect, useState,useContext} from 'react';
import "../index.css";
import { NavLink } from "react-router-dom";
import {UserContext} from "../App";



const Home = () => {
    const[data,setData]=useState({name:"",greet:"",link:"",direct:""});
    const{state,dispatch} = useContext(UserContext);
    const getData = async()=>{
         const token = localStorage.getItem("jwtoken");

         try{
             
                const res = await fetch("https://mernback01.herokuapp.com/home", {
                 method:"POST",
                 headers:{
                    Accept :"application/json",
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({token})
             });
             
             if(res.status === 401){
                setData({name:"Programmer",greet:"Login to Continue",link:"/login"}); 
            }
            else if(res.status === 200){
            const user = await res.json();
            dispatch({type:"USER",payload:true});
            setData({name:user.name,greet:"Welcome Back",link:"/user"});    
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
              <h1>Hello {data.name}</h1>
              <p className="homePara" style={{color: "white"}}>{data.greet}</p>
              <NavLink className="redirect2" to={data.link}>Get Started</NavLink>
           </div>
        </>
    )
}
export default Home;