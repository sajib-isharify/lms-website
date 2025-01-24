/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from "../pages/Home/Home"
import VideoTutorials from '../pages/VideoTutorials/VideoTutorials'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Index = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video-tutorials" element={<VideoTutorials />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Index