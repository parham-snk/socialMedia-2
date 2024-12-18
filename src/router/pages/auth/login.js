import React, { useState } from "react";
import { Link, NavLink } from "react-router";

import axios from "axios";

const Register = () => {

    const formAPI=()=>{
        const form=new FormData(document.querySelector('form'))
        console.log(form)

        // axios.post("",{form}).then(()=>{

        // })
    }
    return (
        <div className="d-flex  justify-content-center align-items-center " style={{ height: "100vh" }}>
            <form className="d-flex flex-column w-75 justify-content-center align-items-start shadow px-4 py-5 rounded-3">
                <label for="username">username : </label>
                <input type="text" name="username" id="username" placeholder="username" className="w-100 p-1 my-1"  />
                <label for="password" className="mt-3">password : </label>
                <input type="password" name="password" id="password" placeholder="password" className="w-100 p-1 my-1"  />

                <div className="d-flex flex-row my-3 pointer-event" style={{cursor:"pointer"}}>
                    <input type="checkbox" name="remember" id="remember" style={{cursor:"pointer"}}/> <label style={{cursor:"pointer"}} for="remember" className="ms-2">remember me</label>
                </div>
                <br />
                <div className="btn btn-outline-primary w-100 my-4" onClick={formAPI} >
                    login
                </div>
                <Link to="/register">register</Link>
            </form>
        </div>
    )
}

export default Register;