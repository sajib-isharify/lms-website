/* eslint-disable no-unused-vars */
import React from "react";
import { IoIosSearch } from "react-icons/io";

const VideoTutorials = () => {
    return (
        <div className="bg-[#121215] flex justify-around items-center py-24">
            <div>
                <p className="text-[#D0FF71CC] text-[18px] font-[400]">Simplified tutorials</p>
                <h3 className="text-[30px] font-medium animate-gradient-text">Our Visual Playbook</h3>
            </div>
            <div className="relative w-80">
                <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search for videos ..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 placeholder-[#8F8F8F] rounded-md shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                />
            </div>
        </div>
    );
};

export default VideoTutorials;
