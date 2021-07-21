import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router';

// import Cookies from 'universal-cookie';


import "../index.css";
import log_img from "../img/login.svg";




//Icon packs
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {

    const history = useHistory();
    const [data, setData] = useState({
        email: "",
        password: ""
    });


    const changeEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData({ ...data, [name]: value });
    }

    const submitEvent = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        try {
            
                const res = await fetch("https://mernback01.herokuapp.com/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            if (res.status === 403) {
                window.alert("Please fill all necessary data!!!");
                setData({
                    email: "",
                    password: ""
                });
            }
            else if (res.status === 200) {
                const user = await res.json();
                // const cookies = new Cookies();
                // cookies.set('jwtoken', user,{
                //         path: '/',
                //         maxAge:1000*60,
                         
                //      });
                localStorage.setItem("jwtoken",user);

                window.alert("Login Successful");
                setData({
                    email: "",
                    password: ""
                });
                history.push("/");
            }
            else if (res.status === 401) {
                window.alert("Wrong Credintial");
                setData({
                    email: "",
                    password: ""
                });
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="form_warp">
                <form action="">
                    <div className="logo_inner">
                        <img src={log_img} alt="" />
                    </div>
                    <div className="input_inner">
                        <div className="input_holder">
                            <HiOutlineMailOpen size="1.5rem" />
                            <input type="email" name="email" placeholder="Email..." value={data.email} onChange={changeEvent} />
                        </div>
                        <div className="input_holder">
                            <RiLockPasswordLine size="1.5rem" />
                            <input type="password" name="password" placeholder="Password..." value={data.password} onChange={changeEvent} />
                        </div>
                        <input className="btn" type="submit" value="Log In" onClick={submitEvent} />
                        <NavLink to="/signup" className="redirect1">Don't Have an Account?</NavLink>
                    </div>
                </form>

            </div>
        </>
    )
}
export default Login;