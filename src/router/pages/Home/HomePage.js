import React from "react";

import { BiMessageSquareDetail } from "react-icons/bi";


import Post from "../components/post/post-schema";
import { Link, NavLink } from "react-router";

const HomePage = props => {
    return (
        <React.Fragment>
            <div className="d-flex flex-row align-items-center justify-content-start  px-2 py-3 border-bottom position-sticky top-0 bg-white " style={{ zIndex: 100 }}>
                <h3 className="ps-2">Sanco</h3>
                <Link className="position-absolute end-0 pe-2  " to={"/direct"}>
                    <BiMessageSquareDetail style={{ fontSize: "x-large", width: "50px" }} />
                    <div className="msgCount">12</div>
                </Link>
            </div>
            <div className="d-flex flex-column justify-content-center  pb-5 pt-0">
                <Post />
                <Post />
                <Post />

            </div>
        </React.Fragment>
    )
}

export default HomePage