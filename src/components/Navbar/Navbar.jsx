/* eslint-disable no-unused-vars */
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import lmsIcon from "../../assets/Pippasync final logo confirm-02 2.svg";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-[#080808] fixed top-0 w-full font-poppins py-5 flex justify-evenly items-center shadow-md z-50">
        <div className="flex justify-center items-center gap-10">
          <div>
            <img src={lmsIcon} alt="" />
          </div>
          <div className="flex text-[#6A6A6A] font-medium text-[14px] gap-4">
            <span className="flex items-center cursor-pointer hover:text-[#FCFDFF]">
              <p>Features</p>
              <MdOutlineKeyboardArrowDown />
            </span>
            <span className="flex items-center cursor-pointer hover:text-[#FCFDFF]">
              <p>Integrations</p>
              <MdOutlineKeyboardArrowDown />
            </span>
            <span className="flex items-center cursor-pointer hover:text-[#FCFDFF]">
              <p>Resource</p>
              <MdOutlineKeyboardArrowDown />
            </span>
            <span className="flex items-center cursor-pointer hover:text-[#FCFDFF]">
              <p>Pricing</p>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-7">
          <div className="flex items-center gap-3">
            <span className="text-[#6A6A6A] hover:text-[#FCFDFF] transition-colors duration-700">Login</span>
            <span className="text-[#6A6A6A] hover:text-[#FCFDFF]">|</span>
            <span className="text-[#8DDC50] text-sm font-medium hover:text-yellow-300 transition-colors duration-700">Is PippaSync Right For Me?</span>
          </div>
          <div className="flex gap-3">
            <button className="text-[#FCFDFF] text-sm font-medium border-1 border-[#FCFDFF] hover:border-none hover:bg-[#8DDC50] hover:text-[#223003] px-4 py-1 cursor-pointer transition-colors duration-700">
              Webinar
            </button>
            <button className="relative px-4 py-2 text-[#223003] text-sm font-bold bg-[#8DDC50] cursor-pointer overflow-hidden group">
              <span className="absolute inset-0 bg-yellow-300 scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative z-10">Request a demo</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
