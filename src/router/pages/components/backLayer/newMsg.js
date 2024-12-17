import React from "react";
import img from "./night-owl-man-working-on-computer-at-night-picjumbo-com.jpg"
const MSGBOX = props => {
    return (
        <div id="form" className="position-absolute d-flex justify-content-center align-items-center z-3" style={{transition:".3s",top:"50%",left:"50%",transform:"translate-middle"}}>
            <div className="d-flex flex-column justify-content-center align-items-start p-3 bg-white position-absolute  rounded-2 shadow" style={{width:"75vw",height:"auto"}}>
                <label for="to">to</label>

                <input type="text" id="to" name="to" className="p-1 my-2 w-100" onClick={()=>{
                    document.getElementById("form").style.marginTop=-100+'px'
                }}
                
                onBlur={()=>{
                    document.getElementById("form").style.marginTop=50+'px'

                }}
                />

                <hr/>
                <div className="d-flex flex-column  align-items-start rounded-1 mt-1 w-100 newmsgSearch">
                    <p className="ps-1 text-black-50 py-2">results</p>
                   
                    <a href="#" className="w-100 text-decoration-none border-bottom " >
                        <div className="d-flex flex-row justify-content-start align-items-center bg-white w-100 py-2">
                            <img src={img} width={"20px"} height={"20px"} style={{ borderRadius: "50%" }} />
                            <p className="ms-2">parham</p>
                        </div>
                    </a>
                   
                </div>


            </div>

        </div>
    )

}

export default MSGBOX