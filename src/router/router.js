import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";



//components
import Navbar from "./pages/components/navbar/nav";
import HomePage from './pages/Home/HomePage'
import Pannel from "./pages/pannel/pannel"
import Direct from "./pages/messanger/Direct";
import CreatePost from "./pages/createPost/CreatePost";

import Login from "./pages/auth/login"
import Register from "./pages/auth/register"

const Router = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={<>
                        <Navbar />
                        <HomePage />
                    </>} />
                    <Route path="pannel" element={<>
                        <Navbar />
                        <Pannel />
                    </>} />
                    <Route path="direct" element={<>
                        <Navbar />
                        <Direct />
                    </>} />
                    <Route path="createpost" element={<>
                        <Navbar />
                        <CreatePost />
                    </>} />
                    <Route path="login" element={<>
                        <Login />
                    </>} />
                    <Route path="register" element={<>
                        <Register />
                    </>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router