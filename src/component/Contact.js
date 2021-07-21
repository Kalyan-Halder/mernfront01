import React, {useState} from 'react';
//Icons pack
import {HiOutlineMailOpen} from 'react-icons/hi'; 
import profile_img from "../img/profile.svg";


const Contact = () => {
    const[data,setData] = useState({email:"",message:""});
    const changeEvent = (e)=>{
           const name = e.target.name;
           const value = e.target.value;

           setData({...data,[name]:value});
    }
    const submitEvent = async(e)=>{
           e.preventDefault();
           const {email,message} = data;
           try{
           
                const res = await fetch("https://mernback01.herokuapp.com/contact", {
                   method:"post",
                   headers:{
                       "Content-Type" :"application/json"
                   },
                   body: JSON.stringify({email,message})
               })
               if(res.status === 201){
                   window.alert("Data Recorded");
                   setData({
                       email:"",
                       message:""
                   });
               }
               else if(res.status === 401){
                   window.alert("Invalid Email");
                   setData({
                    email:"",
                    message:""
                });
               }
           }catch(err){
               console.log(err);
           }

    }
    return (
       
        <>
            <div className="homediv">
              
                <div className="detail_holder">       
                     <div className="logo_inner">
                              <h1>Contact Us</h1>
                              <img src={profile_img} alt="" />
                     </div>
                     <div className="input_inner">
                                

                            <div className="input_holder">
                                 <HiOutlineMailOpen size="1.5rem"/>
                                 <input type="email" name="email" placeholder="Email..." value={data.email} onChange={changeEvent} />
                            </div>
                             <div className="input_holder">
                                     <textarea className="txtArea" placeholder="Enter Your Message" name="message" id="" onChange={changeEvent} value={data.message}></textarea>
                             </div>
                             <div className="input_holder">
                                     <input className="btn" type="submit" value="Send" onClick={submitEvent} />
                             </div>
                     </div>
                    
                </div>
               
              
            </div>
        </>
    )
}
export default Contact;