/* eslint-disable no-unused-vars */
import React from "react";
import videoImg from "../../assets/video.png";

const Video = ({ text }) => {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg group transition-all duration-900 ease-in-out h-[480px">
      <img className="w-full" src={videoImg} alt="video" />
      <div className="bg-[#1A1A1D] py-12 px-4 h-full">
        <div className="px-6 py-4">
          <p className="text-[#E4E4E7] group-hover:text-[#8DDC50] text-[18px] font-[500] leading-6 transition-colors duration-300 ease-in-out">
            {text}
          </p>
        </div>
        <div className="px-6 py-8 float-start">
          <button className="inline-block rounded-sm px-3 py-1 text-sm font-semibold text-[#8F8F8F] group-hover:text-white border-1 border-[#8F8F8F] group-hover:border-white mr-2 mb-2 transition-all duration-300 ease-in-out">
            Shopify
          </button>
          <button className="inline-block rounded-sm px-3 py-1 text-sm font-semibold text-[#8F8F8F] group-hover:text-white border-1 border-[#8F8F8F] group-hover:border-white mr-2 mb-2 transition-all duration-300 ease-in-out">
            Warehouse
          </button>
        </div>
      </div>
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