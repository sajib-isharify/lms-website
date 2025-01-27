/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import videoImg from "../../assets/video.svg";
import videoButtonImg from "../../assets/video-button.svg";

const Video = ({ text }) => {
  return (
    <div className="max-w-md relative rounded-lg overflow-hidden shadow-lg group transition-all duration-700 ease-in-out h-[480px] flex flex-col">
      <div className="relative h-1/2 w-full">
        <img
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110"
          src={videoImg}
          alt="video"
        />
        <img
          className="w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-in-out group-hover:scale-110"
          src={videoButtonImg}
          alt="video button"
        />
      </div>

      <div className="bg-[#1A1A1D] flex flex-col justify-center items-center py-8 px-6 h-1/2">
        <p className="text-[#E4E4E7] text-left group-hover:text-[#8DDC50] text-[18px] font-[500] leading-6 transition-colors duration-500 ease-in-out">
          {text}
        </p>
        <div className="flex gap-4 mt-6">
          <button className="rounded-sm px-3 py-1 text-sm font-semibold text-[#8F8F8F] group-hover:text-white border border-[#8F8F8F] group-hover:border-white transition-all duration-500 ease-in-out">
            Shopify
          </button>
          <button className="rounded-sm px-3 py-1 text-sm font-semibold text-[#8F8F8F] group-hover:text-white border border-[#8F8F8F] group-hover:border-white transition-all duration-500 ease-in-out">
            Warehouse
          </button>
        </div>
      </div>

      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#2e2e2d] transition-all duration-500 ease-in-out"></div>
    </div>

  );
};

const VideoGrid = () => {
  const videoTexts = [
    "PippaSync Service and Product Overview",
    "Multichannel selling software to sell products on the larges...",
    "How Does PippaSync Work (Full Tutorial)",
    "How to sell on Amazon, Shopify, Ebay using PippaSyn...",
    "PippaSync Inventory Webinar and Meetings",
    "Multi-Channel eCommerce Platform - Sell On Multiple...",
    "Understanding Walmart Item Spec 5.0: What Sellers Need...",
    "Prime Big Deal Days: How PippaSync Can Help You...",
    "The Seller’s Guide to Ecommerce Marketing...",
    "PippaSync Service Overview and Product Demo",
    "Designing a Better Marketplace Listing Tool",
    "In Focus: eBay’s Product-Based Shopping Experience",
  ];

  return (
    <div className="grid grid-cols-3 gap-10 px-4 py-8">
      {videoTexts.map((text, index) => (
        <Video key={index} text={text} />
      ))}
    </div>
  );
};

export default VideoGrid;