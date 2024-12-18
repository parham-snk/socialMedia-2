import React, { useState } from "react";
import { TbMessage2Plus } from "react-icons/tb";

import BackLayer from "../components/backLayer/BackLayer"
import NewMSG from "../components/backLayer/newMsg"
import { Link } from "react-router";

const Direct = props => {
    const [newMsg, setNewMsg] = useState(false)

    const closeModuleFn = () => {
        setNewMsg(false)
    }
    return (
        <div className="overflow-hidden " style={{height:"95vh"}}>
            {
                newMsg &&
                <div>
                    <BackLayer s={closeModuleFn} />
                    <NewMSG />
                </div>

            }
                   

            <div className="position-sticky top-0 bg-white mh-100 d-flex flex-row justify-content-start align-items-center position-relative px-3 py-3 border-bottom">
                <h2 className="align-self-center">Direct</h2>
                <TbMessage2Plus onClick={() => setNewMsg(true)} className="end-0 me-3 position-absolute" style={{ fontSize: "x-large" }} />
            </div>

            <div className="d-flex flex-column justify-content-start align-items-cente chatList " >

                {/* <h1 className="position-absolute top-50 text-black-50 user-select-none">empty</h1> */}

              
                <Link to='/' className="text-decoration-none w-100">
                    <div className="d-flex flex-row justify-content-start align-items-center w-100 px-3 py-3 border-bottom">
                        <img src="https://picsum.photos/50/50" alt="..." className="img-thumbnail rounded-5 col-1" />
                        <div className="d-flex flex-column justify-content-start align-items-start ms-3 col-10">
                            <h5 className="p-0 m-0">parinaz</h5>
                            <p className="p-0 m-0">salam khoobi? cehekhabar?</p>
                        </div>
                        <div className="col-1d-flex justify-content-center align-items-center ">
                            <p className="text-bg-danger rounded-5 p-1 w-auto">12</p>
                        </div>
                    </div>
                </Link>
                <Link to='/' className="text-decoration-none w-100">
                    <div className="d-flex flex-row justify-content-start align-items-center w-100 px-3 py-3 border-bottom">
                        <img src="https://picsum.photos/50/50" alt="..." className="img-thumbnail rounded-5 col-1" />
                        <div className="d-flex flex-column justify-content-start align-items-start ms-3 col-10">
                            <h5 className="p-0 m-0">parinaz</h5>
                            <p className="p-0 m-0">salam khoobi? cehekhabar?</p>
                        </div>
                        <div className="col-1d-flex justify-content-center align-items-center ">
                            <p className="text-bg-danger rounded-5 p-1 w-auto">12</p>
                        </div>
                    </div>
                </Link>
                <Link to='/' className="text-decoration-none w-100">
                    <div className="d-flex flex-row justify-content-start align-items-center w-100 px-3 py-3 border-bottom">
                        <img src="https://picsum.photos/50/50" alt="..." className="img-thumbnail rounded-5 col-1" />
                        <div className="d-flex flex-column justify-content-start align-items-start ms-3 col-10">
                            <h5 className="p-0 m-0">parinaz</h5>
                            <p className="p-0 m-0">salam khoobi? cehekhabar?</p>
                        </div>
                        <div className="col-1d-flex justify-content-center align-items-center ">
                            <p className="text-bg-danger rounded-5 p-1 w-auto">12</p>
                        </div>
                    </div>
                </Link>
                <Link to='/' className="text-decoration-none w-100">
                    <div className="d-flex flex-row justify-content-start align-items-center w-100 px-3 py-3 border-bottom">
                        <img src="https://picsum.photos/50/50" alt="..." className="img-thumbnail rounded-5 col-1" />
                        <div className="d-flex flex-column justify-content-start align-items-start ms-3 col-10">
                            <h5 className="p-0 m-0">parinaz</h5>
                            <p className="p-0 m-0">salam khoobi? cehekhabar?</p>
                        </div>
                        <div className="col-1d-flex justify-content-center align-items-center ">
                            <p className="text-bg-danger rounded-5 p-1 w-auto">12</p>
                        </div>
                    </div>
                </Link>
                <Link to='/' className="text-decoration-none w-100">
                    <div className="d-flex flex-row justify-content-start align-items-center w-100 px-3 py-3 border-bottom">
                        <img src="https://picsum.photos/50/50" alt="..." className="img-thumbnail rounded-5 col-1" />
                        <div className="d-flex flex-column justify-content-start align-items-start ms-3 col-10">
                            <h5 className="p-0 m-0">parinaz</h5>
                            <p className="p-0 m-0">salam khoobi? cehekhabar?</p>
                        </div>
                        <div className="col-1d-flex justify-content-center align-items-center ">
                            <p className="text-bg-danger rounded-5 p-1 w-auto">12</p>
                        </div>
                    </div>
                </Link>
                <Link to='/' className="text-decoration-none w-100">
                    <div className="d-flex flex-row justify-content-start align-items-center w-100 px-3 py-3 border-bottom">
                        <img src="https://picsum.photos/50/50" alt="..." className="img-thumbnail rounded-5 col-1" />
                        <div className="d-flex flex-column justify-content-start align-items-start ms-3 col-10">
                            <h5 className="p-0 m-0">parinaz</h5>
                            <p className="p-0 m-0">salam khoobi? cehekhabar?</p>
                        </div>
                        <div className="col-1d-flex justify-content-center align-items-center ">
                            <p className="text-bg-danger rounded-5 p-1 w-auto">12</p>
                        </div>
                    </div>
                </Link>
                <Link to='/' className="text-decoration-none w-100">
                    <div className="d-flex flex-row justify-content-start align-items-center w-100 px-3 py-3 border-bottom">
                        <img src="https://picsum.photos/50/50" alt="..." className="img-thumbnail rounded-5 col-1" />
                        <div className="d-flex flex-column justify-content-start align-items-start ms-3 col-10">
                            <h5 className="p-0 m-0">parinaz</h5>
                            <p className="p-0 m-0">salam khoobi? cehekhabar?</p>
                        </div>
                        <div className="col-1d-flex justify-content-center align-items-center ">
                            <p className="text-bg-danger rounded-5 p-1 w-auto">12</p>
                        </div>
                    </div>
                </Link>
                <Link to='/' className="text-decoration-none w-100">
                    <div className="d-flex flex-row justify-content-start align-items-center w-100 px-3 py-3 border-bottom">
                        <img src="https://picsum.photos/50/50" alt="..." className="img-thumbnail rounded-5 col-1" />
                        <div className="d-flex flex-column justify-content-start align-items-start ms-3 col-10">
                            <h5 className="p-0 m-0">parinaz</h5>
                            <p className="p-0 m-0">salam khoobi? cehekhabar?</p>
                        </div>
                        <div className="col-1d-flex justify-content-center align-items-center ">
                            <p className="text-bg-danger rounded-5 p-1 w-auto">12</p>
                        </div>
                    </div>
                </Link>
                <Link to='/' className="text-decoration-none w-100">
                    <div className="d-flex flex-row justify-content-start align-items-center w-100 px-3 py-3 border-bottom">
                        <img src="https://picsum.photos/100/100" alt="..." className="img-thumbnail rounded-5 col-1" />
                        <div className="d-flex flex-column justify-content-start align-items-start ms-3 col-10">
                            <h5 className="p-0 m-0">parinaz</h5>
                            <p className="p-0 m-0">salam khoobi? cehekhabar?</p>
                        </div>
                        <div className="col-1d-flex justify-content-center align-items-center ">
                            <p className="text-bg-danger rounded-5 p-1 w-auto">12</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Direct