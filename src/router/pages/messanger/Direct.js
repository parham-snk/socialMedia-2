import React, { useState } from "react";
import { TbMessage2Plus } from "react-icons/tb";

import BackLayer from "../components/backLayer/BackLayer"
import NewMSG from "../components/backLayer/newMsg"

const Direct = props => {
    const [newMsg, setNewMsg] = useState(false)

    const closeModuleFn = () => {
        setNewMsg(false)
    }
    return (
        <React.Fragment>
            {
                newMsg &&
                <div>
                    <BackLayer s={closeModuleFn} />
                    <NewMSG />
                </div>

            }
            <div className="d-flex flex-row justify-content-start align-items-center position-relative px-3 py-3 border-bottom">
                <h2 className="align-self-center">Direct</h2>
                <TbMessage2Plus onClick={() => setNewMsg(true)} className="end-0 me-3 position-absolute" style={{ fontSize: "x-large" }} />
            </div>
            <div className="d-flex flex-column justify-content-start align-items-center">
                <h1 className="position-absolute top-50 text-black-50 user-select-none">empty</h1>
            </div>
        </React.Fragment>
    )
}

export default Direct