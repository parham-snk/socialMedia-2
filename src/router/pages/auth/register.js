import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import axios from "axios";


const Register = () => {
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [mail, setMail] = useState()
    const [password, setPassword] = useState()

    const formAPI = async () => {
        axios.post('http://localhost:8080/auth/register', { name, username, mail, password })
    }
    return (
        <div className="d-flex  justify-content-center align-items-center " style={{ height: "100vh" }}>
            <form className="d-flex flex-column w-75 justify-content-center align-items-start shadow px-4 py-5 rounded-3">

                <label for="name" className="mt-3">name : </label>
                <input type="text" name="name" id="name" placeholder="name" onChange={e=>setName(e.target.value)} className="w-100 p-1 my-1" />


                <label for="username" className="mt-3">username : </label>
                <input type="text" name="username" id="username" placeholder="username" onChange={e=>setUsername(e.target.value)} className="w-100 p-1 my-1" />

                <label for="mail">mail : </label>
                <input type="text" name="mail" id="mail" placeholder="mail" onChange={e=>setMail(e.target.value)} className="w-100 p-1 my-1" />


                <label for="password" className="mt-3">password : </label>
                <input type="password" name="password" id="password" placeholder="password" onChange={e=>setPassword(e.target.value)} className="w-100 p-1 my-1" />

                <br />
                <div className="btn btn-outline-primary w-100 my-4" onClick={formAPI} >
                    login
                </div>
                <Link to="/login">login</Link>
            </form>
        </div>
    )
}

export default Register;