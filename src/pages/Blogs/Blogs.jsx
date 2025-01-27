/* eslint-disable no-unused-vars */
import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import BlogSection from '../../components/BlogSection/BlogSection'

const Blogs = () => {
    return (
        <>
            <div className="bg-[#121215] flex justify-evenly items-center mt-20 py-24">
                <div className="">
                    <p className="text-[#D0FF71CC] text-[18px] font-[400] leading-4">Blogs that Keep you ahead</p>
                    <h3 className="text-[30px] mt-3 font-medium leading-10 animate-gradient-text">Your Knowledge Hub</h3>
                </div>
                <div className="relative w-3xl">
                    <IoIosSearch size={22} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search for blogs..."
                        className="w-full pl-10 pr-4 py-3 rounded-md shadow-[0px_4px_20px_0px_#00000080] placeholder-[#8F8F8F] transition-all duration-300"
                    />
                </div>
            </div>
            <BlogSection />
        </>
    )
}

export default Blogs