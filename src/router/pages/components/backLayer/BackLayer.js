import React from "react";

const BackLayer = props => {
    console.log(props)
    return (

        <div onClick={props.s} className="w-100 h-100 bg-black bg-opacity-50 position-absolute z-2" style={{ backdropFilter: "blur(5px)" }}></div>

    )
}
export default BackLayer