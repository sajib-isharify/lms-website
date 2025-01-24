import React from "react";
import PlusIcon from "../../assets/plus.svg";
import DashboardIcon from "../../assets/dashboard.svg";
import InventoryIcon from "../../assets/inventory.svg";
import ListingIcon from "../../assets/listing.svg";
const SelfOnboarding = () => {
  return (
    <>
      <div className="mt-[180px]">
        <div>
          <div className="py-[17px] flex justify-center items-center gap-5 mx-[424px] bg-[#121215] border-[1px] border-[#121215] rounded-lg">
            <div className="mx-[55px] flex justify-center items-center gap-5">
              <img src={PlusIcon} alt="" />
              <div>
                <p className="text-[#FCFDFF] text-[14px] font-poppins font-[400px] leading-[21px]">Self Onboarding</p>
              </div>
            </div>
            <div className="mx-[55px] flex justify-center items-center gap-5">
              <img src={DashboardIcon} alt="" />
              <div>
                <p className="text-[#FCFDFF] text-[14px] font-poppins font-[400px] leading-[21px]">Integration</p>
              </div>
            </div>
            <div className="mx-[55px] flex justify-center items-center gap-5">
              <img src={InventoryIcon} alt="" />
              <div>
                <p className="text-[#FCFDFF] text-[14px] font-poppins font-[400px] leading-[21px]">Inventory</p>
              </div>
            </div>
            <div className="mx-[55px] flex justify-center items-center gap-5">
              <img src={ListingIcon} alt="" />
              <div>
                <p className="text-[#FCFDFF] text-[14px] font-poppins font-[400px] leading-[21px]">Listing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelfOnboarding;
