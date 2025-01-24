import React from "react";
import ZenaIcon from "../../assets/brands/zena.svg"
import UrbanXIcon from "../../assets/brands/urbanX.svg";
import DynamoIcon from "../../assets/brands/dynamo.svg";
import GardenMileIcon from "../../assets/brands/gardenMile.svg";
import SartexIcon from "../../assets/brands/sartex.svg";
import ShopangoIcon from "../../assets/brands/Shopango.svg";
import ImpressionsIcon from "../../assets/brands/Impressions.svg";

const Brand = () => {
  return (
    <div className="mt-[120px] py-[53px] px-[327px] bg-[#121215] flex justify-center items-center gap-5">
      <div className="px-[43px]">
        <img src={ZenaIcon} alt="" />
      </div>
      <div className="px-[43px]">
        <img src={UrbanXIcon} alt="" />
      </div>
      <div className="px-[43px]">
        <img src={DynamoIcon} alt="" />
      </div>
      <div className="px-[43px]">
        <img src={GardenMileIcon} alt="" />
      </div>
      <div className="px-[43px]">
        <img src={SartexIcon} alt="" />
      </div>
      <div className="px-[43px]">
        <img src={ShopangoIcon} alt="" />
      </div>
      <div className="px-[43px]">
        <img src={ImpressionsIcon} alt="" />
      </div>
    </div>
  );
};

export default Brand;
