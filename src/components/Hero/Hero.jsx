/* eslint-disable no-unused-vars */
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="mt-[24px] flex flex-col items-center justify-center">
        <div className="max-w-4xl text-center">
          <p className="text-[#E4E4E7] text-[40px] font-[600] leading-[48px] font-inter mb-[21px]">One Platform to Sync, Sell, and Succeed</p>
          <p className="text-[#6A6A6A] text-[18px] font-poppins font-[400px] leading-[26px]">
            No more errors! Experience the future of inventory control with PippaSync. Flawlessly streamline multi-channel management using the latest
            innovative AI-driven synchronization.
          </p>
        </div>

        <div className="max-w-4xl text-center mt-[20px]">
          <p className="text-[#FCFDFF] text-[14px] font-poppins font-[500px] leading-[24px]">Introducing PippaSync</p>
          <button type="button" className="bg-[#8DDC50] text-[#223003] text-sm font-poppins font-[700px] leading-[24px] px-5 py-1">
            Get one month free
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
