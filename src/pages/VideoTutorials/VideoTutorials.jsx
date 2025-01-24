/* eslint-disable no-unused-vars */
import React from "react";
import { IoIosSearch } from "react-icons/io";
import VidoesScetion from "../../components/VidoesScetion/VidoesScetion";

const VideoTutorials = () => {
    return (
        <>
            <div className="bg-[#121215] flex justify-around items-center py-24">
                <div className="">
                    <p className="text-[#D0FF71CC] text-[18px] font-[400] leading-4">Simplified tutorials</p>
                    <h3 className="text-[30px] mt-3 font-medium leading-10 animate-gradient-text">Our Visual Playbook</h3>
                </div>
                <div className="relative w-lg">
                    <IoIosSearch size={22} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search for videos..."
                        className="w-full pl-10 pr-4 py-3 rounded-md shadow-[0px_4px_20px_0px_#00000080] placeholder-[#8F8F8F] transition-all duration-300"
                    />
                </div>
            </div>
            <VidoesScetion />
        </>
    );
};

export default VideoTutorials;
