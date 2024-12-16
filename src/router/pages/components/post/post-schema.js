import React, { useState } from "react"

import { IoPerson } from "react-icons/io5";
import { CiHeart, CiBookmark, CiBookmarkCheck } from "react-icons/ci";
import { BiCommentDetail } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import { FaHeart, FaBookmark } from "react-icons/fa";




import img from './night-owl-man-working-on-computer-at-night-picjumbo-com.jpg'
import { NavLink } from "react-router";


const Post = props => {


    const [like, setLike] = useState(false)
    const [bookmark, setBookmark] = useState(false)
    return (
        <figure className="d-flex flex-column justify-content-center align-items-center overflow-hidden " onLoad={(e) => {
          
            if (props.m) {
                e.currentTarget.classList.add('my-3')
                e.currentTarget.classList.add('rounded-2')
                e.currentTarget.classList.add('shadow')
            }
        }}>
            <img src={img} className="img-fluid" />
            <figcaption className="d-flex flex-column mt-2 mb-2  w-100">
                <div className="position-relative d-flex flex-row w-100 ps-1 py-2 justify-content-start align-items-center border-bottom">
                    {
                        !like ?
                            <CiHeart onClick={e => {
                                setLike(true)

                            }} /> : <FaHeart onClick={() => { setLike(false) }} className="text-danger" />

                    }
                    <BiCommentDetail />
                    <CiShare2 />

                    {
                        bookmark ?
                            <FaBookmark className="position-absolute end-0 me-4" onClick={() => { setBookmark(false) }} />
                            :
                            <CiBookmark className="position-absolute end-0 me-4" onClick={() => {
                                setBookmark(true)
                            }} />
                    }
                </div>
                <div className="d-flex align-items-center h-auto w-100 ps-2 py-2">
                    <FaHeart className="likesComment" />



                    <p className="d-flex flex-row justify-content-center ">

                        <strong className="likesComment d-inline">26  Liks </strong><div className="text-black-50 ms-3" style={{ fontSize: 'smaller' }}> parham-snk , parinaz , ... </div>
                    </p>

                </div>
                <div className="px-3 float-start pb-2">
                    <strong clas className="float-start"><NavLink to={"/user"} style={{ width: "fit-content", height: "ft-content", padding: 0 }} >parham-snk </NavLink>: </strong>
                    <p >code time! see my blog and my git repo for more information qwe qwe qwe qw e!</p>
                </div>

                {
                    //commnt
                }
                <div className="d-flex flex-column ps-4">
                    <div className="d-flex flex-row w-100 align-items-center justify-content-start comment py-1" >
                        <img src={img} />
                        <strong style={{ fontSize: "smaller" }} className="ps-1">parham-snk :</strong>
                        <p style={{ fontSize: "x-smaller" }} className="ps-1">amazing photo!</p>
                    </div>
                    <NavLink className="text-black-50" style={{ fontSize: "smaller" }}>( more comments ... )</NavLink>
                </div>
            </figcaption>
        </figure>
    )
}

export default Post