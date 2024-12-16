import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";



//components
import Navbar from "./pages/components/navbar/nav";
import HomePage from './pages/Home/HomePage'
import Pannel from "./pages/pannel/pannel"
import Direct from "./pages/messanger/Direct";

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" >
                    <Route index  element={<HomePage />} />
                    <Route path="pannel" element={<Pannel />} />
                    <Route path="direct" element={<Direct/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router