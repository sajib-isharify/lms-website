/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-[#080808]">
      <div
        className="main text-white max-w-7xl mx-auto"
        style={{
          background: "linear-gradient(90deg, rgba(70, 221, 213, 0.2) 12.64%, rgba(70, 221, 78, 0.2) 87.24%)"
        }}
      >
        <h2 className="text-[31.9px] pt-20 font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-600 leading-10">
          Subscribe our newsletter
        </h2>

        <p className="text-[#8F8F8F] text-center text-lg leading-[26px] mt-5">
          Stay updated with the latest news, tips, and exclusive offers! Subscribe to our newsletter to access valuable insights, helpful resources, and
          exciting updates tailored just for you. Don’t miss out—sign up today and let us keep you inspired, informed, and ahead of the curve!
        </p>
        <div className="mt-10 flex justify-center">
          <input
            className="bg-[#08080880] placeholder:text-[#B3B4B5] placeholder:leading-[14px] text-sm py-4 px-4 w-md rounded-l-md focus:outline-none"
            type="text"
            placeholder="Enter your email address"
          />
          <button
            className="bg-[#080808] hover:bg-[#8DDC50] text-[#FCFDFF80] hover:text-[#080808] text-[14px] leading-6 font-bold py-4 px-6 rounded-r-md transition-colors cursor-pointer"
          >
            Subscribe
          </button>
        </div>

        <div className="flex mt-20">
          <div className="">
            <div className="flex text-[#A1A1AA] leading-5 text-[12.9px] font-medium">
              <div className="">© 2024 Pippa Technologies Inc.</div>
              <div>Privacy Policy</div>
              <div>Terms of Use</div>
            </div>
            <div>
              <p className="text-[13.1px] text-[#71717A] leading-5">
                PippaSync is a trademark or registered trademark of PippaSync Software Solutions Inc. All other trademarks are the property of their respective owners. Unless otherwise stated, the use of third-party logos does not imply endorsement, sponsorship, or affiliation with PippaSync.
              </p>
              <p className="text-[13.1px] text-[#71717A] leading-5 mt-4">
                PippaSync is a software technology company specializing in multichannel e-commerce solutions. Our tools are designed to empower businesses with streamlined inventory, order, and fulfillment management.
              </p>
            </div>
          </div>

          <div className="">
            <div className="text-[#A1A1AA] leading-5 text-[12.9px] font-medium">
              +1-347-305-0089
            </div>
            <div className="text-[#71717A] leading-5 text-[12.9px]">
              <div className="text-[#A1A1AA] font-medium">Features</div>
              <div className="hover:underline hover:text-white">Sync Inventory</div>
              <div className="hover:underline hover:text-white">List Product</div>
              <div className="hover:underline hover:text-white">AI Assistance</div>
              <div className="hover:underline hover:text-white">Ship Orders</div>
              <div className="hover:underline hover:text-white">Multi-Warehouse</div>
              <div className="hover:underline hover:text-white">Reporting</div>
            </div>
          </div>

          <div className="text-[#A1A1AA] leading-5 text-[12.9px] font-medium">
            <div>
              info@pippasync.com
            </div>
            <div className="text-[#71717A] leading-5 text-[12.9px]">
              <div className="font-medium text-[#A1A1AA]">Integration</div>
              <div className="hover:underline hover:text-white">Market Place</div>
              <div className="hover:underline hover:text-white">Shopping Cart</div>
              <div className="hover:underline hover:text-white">Social Media</div>
              <div className="hover:underline hover:text-white">Dropshipping</div>
              <div className="hover:underline hover:text-white">Shipppin Carrier</div>
              <div className="hover:underline hover:text-white">Others</div>
            </div>
          </div>

          <div>
            <div className="text-[#71717A] leading-5 text-[12.9px]">
              <div className="font-medium text-[#A1A1AA]">Resource</div>
              <div className="hover:underline hover:text-white">How it Works</div>
              <div className="hover:underline hover:text-white">Documentation</div>
              <div className="hover:underline hover:text-white">FAQ</div>
              <div className="hover:underline hover:text-white">Forum</div>
              <div className="hover:underline hover:text-white">Video Tutorial</div>
              <div className="hover:underline hover:text-white">Help Center</div>
            </div>
          </div>

          <div>
            <div className="text-[#71717A] leading-5 text-[12.9px]">
              <div className="font-medium text-[#A1A1AA]">Integration</div>
              <div className="hover:underline hover:text-white">About Us</div>
              <div className="hover:underline hover:text-white">Testimonials</div>
              <div className="hover:underline hover:text-white">Contact Support</div>
              <div className="hover:underline hover:text-white">Subscribe</div>
              <div className="hover:underline hover:text-white">Free Demo</div>
              <div className="hover:underline hover:text-white">Whats New</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
