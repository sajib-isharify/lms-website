import React from "react";
import lmsIcon from "../../assets/Pippasync final logo confirm-02 2.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar flex justify-center items-center">
      <div className="flex items-center">
        <div>
          <img src={lmsIcon} alt="" />
        </div>
        <div className="text-[#6A6A6A] flex">
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
      <div className="flex">
        <div>
          <span className="text-[#6A6A6A] hover:text-[#FCFDFF]">Login</span>
          <span className="text-[#8DDC50]">Is Pippasync Right For Me?</span>
        </div>
        <div>
          <button className="text-[#FCFDFF] border-1 border-[#FCFDFF] px-4 py-1">Webinar</button>
          <button className="bg-[#8DDC50] text-[#223003] px-4 py-2 text-sm font-bold">Request a demo</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
