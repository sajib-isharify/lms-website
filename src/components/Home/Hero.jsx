import React from "react";
import PlayIcon from "../../assets/PlayIcon.svg";
import BannerImg from "../../assets/bannerImg.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="mt-[24px] flex flex-col items-center justify-center">
        <div className="my-5">
          <img src={BannerImg} alt="" />
        </div>
        <div className="max-w-4xl text-center">
          <p className="text-[#E4E4E7] text-[40px] font-[600] leading-[48px] font-inter mb-[21px]">One Platform to Sync, Sell, and Succeed</p>
          <p className="text-[#6A6A6A] text-[18px] font-poppins font-[400px] leading-[26px]">
            No more errors! Experience the future of inventory control with PippaSync. Flawlessly streamline multi-channel management using the latest
            innovative AI-driven synchronization.
          </p>
        </div>

        <div className="max-w-4xl text-center mt-[20px] py-[36px] flex items-center justify-center gap-10">
          <Link to={"/video-tutorials"} className="flex justify-center items-center gap-2 group">
            <p className="text-[#FCFDFF] text-[14px] font-poppins font-[500px] leading-[24px] group-hover:text-[#8DDC50]">Introducing PippaSync</p>
            <img src={PlayIcon} className="rounded-full bg-[#8DDC50] " alt="" />
          </Link>
          <button className="relative px-4 py-2 text-[#223003] text-sm font-bold bg-[#8DDC50] cursor-pointer overflow-hidden group">
            <span className="absolute inset-0 bg-[#abe312] scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <span className="relative z-10 text-[#223003] text-[14px] font-inter font-[700px] leading-[24px] px-5 py-1">Get one month free</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
