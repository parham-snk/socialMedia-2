import React, { useEffect, useState } from "react";

const CreatePost = () => {
    const [img, setImg] = useState(false)
    const [imgUrl, setImgUrl] = useState(false)

    const liveView = (e) => {
        const url = URL.createObjectURL(e.target.files[0])
        setImgUrl(url.toString())

    }

    const CreateImg = src => {
        return (
            <img className="img-fluid" src={imgUrl} />
        )

    }



    return (
        <div>
            <input type="file" accept="image/*" onChange={liveView} />
            <div className="btn btn-primary" onClick={() => {

                navigator.permissions.query({ name: "midi" }).then(data => console.log(data))
                // navigator.mediaDevices.getUserMedia({video:true})


            }}>camera</div>
            {
                imgUrl &&
                <CreateImg />
            }
        </div>
    )
}

export default CreatePost