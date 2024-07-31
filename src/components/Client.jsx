import React from "react";
import image from "../assets/clientsec/1.png";

const Client = () => {
  return (
    <div className="max-w-7xl mx-auto py-[100px] px-3">
      <div className="grid  gap-10 md:grid-cols-2">
        <img data-aos="fade-up-right" src="https://res.cloudinary.com/dldtrjalo/image/upload/v1712435932/1_wge8bv.png" className="  " alt="" />

        <div data-aos="fade-up-left" className="flex items-center">
          <div className="grid gap-5">
            <p className="text-[#FF7070] text-[33px] font-normal">Some Facts</p>
            <p className="md:text-[70px] text-[50px]">
              #1 Place To Manage All Of Your Memories
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
