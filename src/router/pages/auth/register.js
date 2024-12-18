import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const Register = () => {

    const formAPI = async () => {
        const form = FormData(document.querySelector('form'))
        console.log(form)
    }
    return (
        <div className="d-flex  justify-content-center align-items-center " style={{ height: "100vh" }}>
            <form className="d-flex flex-column w-75 justify-content-center align-items-start shadow px-4 py-5 rounded-3">

                <label for="mail">mail : </label>
                <input type="text" name="mail" id="mail" placeholder="mail" className="w-100 p-1 my-1" />

                <label for="username" className="mt-3">username : </label>
                <input type="text" name="username" id="username" placeholder="username" className="w-100 p-1 my-1" />

                <label for="password" className="mt-3">password : </label>
                <input type="password" name="password" id="password" placeholder="password" className="w-100 p-1 my-1" />


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