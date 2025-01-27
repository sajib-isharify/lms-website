/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { memo } from "react";
import { GoArrowUpRight } from "react-icons/go";

import blogImg from "../../assets/blog.svg";

const Blog = ({ blogHeadline }) => {
    return (
        <div className="max-w-md relative rounded-lg overflow-hidden shadow-lg group transition-all duration-700 ease-in-out h-[540px] flex flex-col">
            <div className="h-5/12 w-full">
                <img
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-150"
                    src={blogImg}
                    alt="Blog"
                />
            </div>

            <div
                className="bg-[#1A1A1D] flex flex-col justify-center py-8 px-10 h-7/12"
                role="region"
                aria-label="Blog content"
            >
                <p className="text-[#E4E4E7] text-left group-hover:text-[#8DDC50] text-[18px] font-[500] leading-[26px] transition-colors duration-500 ease-in-out">
                    {blogHeadline}
                </p>
                <div className="flex gap-4 mt-6">
                    <button className="rounded-sm px-3 py-1 text-sm font-semibold text-[#8F8F8F] group-hover:text-white border border-[#8F8F8F] group-hover:border-white transition-all duration-500 ease-in-out">
                        Shopify
                    </button>
                    <button className="rounded-sm px-3 py-1 text-sm font-semibold text-[#8F8F8F] group-hover:text-white border border-[#8F8F8F] group-hover:border-white transition-all duration-500 ease-in-out">
                        Warehouse
                    </button>
                </div>
                <div className="mt-4">
                    <p className="text-[#8F8F8F] text-[16px] leading-[26px]  group-hover:text-white transition-all duration-500 ease-in-out">The Range Marketplace is well known for its Home, leisure, and garden items.  If you sell items in the Home, leisure, and garden categories then the Range...</p>
                    <button className="flex gap-2 items-center py-2 text-[#8DDC50] text-[18px] leading-[26px]">
                        <span>Read More</span>
                        <GoArrowUpRight />
                    </button>
                </div>
            </div>

            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#2e2e2d] transition-all duration-500 ease-in-out"></div>
        </div>
    );
};

const BlogGrid = () => {
    const blogHeadline = Array(12).fill(
        "How to bulk upload products to the Range marketplace"
    );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 py-8">
            {blogHeadline.map((blogHeadline, index) => (
                <Blog key={`blog-${index}`} blogHeadline={blogHeadline} />
            ))}
        </div>
    );
};

export default BlogGrid;
