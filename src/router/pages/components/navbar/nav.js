import react from "react";
import { NavLink } from "react-router";

import "./navbar.css"


import { AiFillHome, AiOutlineFileSearch } from "react-icons/ai"
import { FaSearch } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";

const Navbar = props => {
    return (
        <nav className="row fixed-bottom d-md-none  px-2 shadow-sm bg-white border-top ">

            <NavLink onClick={() => {
                window.scrollTo(0, 0)
            }} to="/" className="col-3 text-center  p-2 rounded-1 " >
                <AiFillHome />
            </NavLink>
            <NavLink onClick={() => {
                window.scrollTo(0, 0)
            }} to="/s" className="col-3 text-center  p-2 rounded-1 " >
                <FaSearch />
            </NavLink>
            <NavLink onClick={() => {
                window.scrollTo(0, 0)
            }} to="/createpost" className="col-3 text-center  p-2 rounded-1" >
                <BiImageAdd />
            </NavLink>
            <NavLink onClick={() => {
                window.scrollTo(0, 0)
            }} to="/pannel" className="col-3 text-center  p-2 rounded-1" >
                <IoPerson />
            </NavLink>



        </nav>

    )
}

export default Navbar