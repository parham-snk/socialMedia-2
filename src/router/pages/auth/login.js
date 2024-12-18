import React, { useState } from "react";
import { Link, NavLink } from "react-router";

import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState()
    const [mail, setMail] = useState()
    const [password, setPassword] = useState()
    const [remmember, setRemmember] = useState(false)


    const formAPI = () => {

        const form = new FormData()
        form.append('username', username)
        form.append("password", password)
        form.append('remmember', remmember)
        console.log(form)
        // fetch("http://localhost:8080/auth/login",{
        //     method:"POST",
        //     body:{username,password,remmember},
        //     headers:{
        //         'Content-Type': 'application/json',
        //     }
        // }).then()
        axios.post('http://localhost:8080/auth/login', {username,password,remmember}).then().catch(err => console.log(err))
    }
    return (
        <div className="d-flex  justify-content-center align-items-center " style={{ height: "100vh" }}>
            <form className="d-flex flex-column w-75 justify-content-center align-items-start shadow px-4 py-5 rounded-3">
                <label for="username">username : </label>
                <input type="text" name="username" id="username" placeholder="username" className="w-100 p-1 my-1" onChange={e => {
                    setUsername(e.target.value)
                }} />
                <label for="password" className="mt-3">password : </label>
                <input type="password" name="password" id="password" placeholder="password" className="w-100 p-1 my-1" onChange={e => {
                    setPassword(e.target.value)
                }} />

                <div className="d-flex flex-row my-3 pointer-event" style={{ cursor: "pointer" }}>
                    <input type="checkbox" name="remember" id="remember" style={{ cursor: "pointer" }} onClick={e => {
                        e.target.checked ? setRemmember(true) : setRemmember(false)
                    }} /> <label style={{ cursor: "pointer" }} for="remember" className="ms-2">remember me</label>
                </div>
                <br />
                <input type="submit" value="submit" />
                <div className="btn btn-outline-primary w-100 my-4" onClick={formAPI} >
                    login
                </div>
                <Link to="/register">register</Link>
            </form>
        </div>
    )
}

export default Register;