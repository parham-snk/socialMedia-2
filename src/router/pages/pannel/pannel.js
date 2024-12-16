import React, { useState } from "react";

import "./pannel.css"

import img from './night-owl-man-working-on-computer-at-night-picjumbo-com.jpg'

import Post from '../components/post/post-schema'

const Pannel = () => {


    return (
        <div >
            <div className="shadow pb-5">
                <div className="d-flex justify-content-start h-25  border p-1 py-1 ">
                    <h5 className="text-black-50 ps-3 ">parham-snk</h5>
                </div>
                <div className="d-flex flex-row justify-content-start ps-3 ps-md-5 align-items-center pt-3 px-md-1 bg-white user-select-none " >
                    <div className="d-flex   justify-content-center ">
                        <img src={img} className="img-fluid img-thumbnail   profile shadow" style={{ borderRadius: "50%", width: "100px !important", height: "100px !important" }} />
                    </div>
                    <div className="col-9 d-flex ps-5 ps-md-5 flex-row justify-content-center align-items-center p2 bg-white" style={{ scale: .9 }}>

                        <div className="col-4 d-block text-center m-2 w-25">
                            <p className="text-text-black-50">followers</p>
                            <hr />
                            <strong>2555</strong>
                        </div>

                        <div className="col-4 d-block text-center m-2 w-25 ">
                            <p className="text-text-black-50">following</p>
                            <hr />
                            <strong>526</strong>
                        </div>

                        <div className="col-4 d-block text-center m-2 w-25">
                            <p className="text-text-black-50">posts</p>
                            <hr />
                            <strong>4</strong>
                        </div>
                    </div>

                </div>
                <div className="d-flex  h-auto text-start p-3 border-bottom  bg-white">
                    <div className="d-flex flex-column ps-3 justify-content-center bg-white" style={{ fontSize: ".9rem" }}>
                        <strong>parham</strong>
                        <br />
                        <p>single</p>
                        <p>searching for job seriosly!</p>
                        <p>dont look me like that . i'am so worse more than  you think !</p>
                    </div>
                </div>



                {
                    //POSTs
                }
                <div className="d-flex flex-row flex-wrap justify-content-start align-items-center  p-3" style={{ background: "ghostwhite" }}>


                    <Post m={true} />
                    <Post m={true} />
                    <Post m={true} />
                </div>
            </div>
        </div>
    )
}

export default Pannel