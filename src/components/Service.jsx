import React from "react";


const Service = () => {
  return (
    <div id="service" className="max-w-7xl mx-auto py-[100px]">
      <p data-aos="fade-up" className="text-[35px] md:text-[55px] text-center">Our Service</p>
      <p data-aos="fade-up" className="text-[18px] md:text-[35px] text-center text-[#726B6B] mt-5">
      We are there for you whenever tou need it
      </p>

      <div className="w-full md:grid-cols-2 grid md:gap-10 gap-3 md:mt-[100px] mt-[30px] p-3 font-thin">

        <div data-aos="fade-up-right" className="bg-slate-500 group relative h-[200px] md:rounded-[20px] rounded-[10px] overflow-hidden">
          <div className="w-full h-[200px]  absolute items-end px-5 py-4 flex z-10">
            <p className="text-[30px] md:text-[45px] text-white ">Wedding</p>
          </div>
          <div className="absolute bg-gradient-to-b from-slate-700 opacity-50 group-hover:opacity-70 transition-all duration-300 to-black  w-full h-[200px]"></div>
          <img src="https://res.cloudinary.com/dldtrjalo/image/upload/v1712435927/4_ibzdyp.jpg" className="w-full h-[200px] object-cover" alt="" />
        </div>

        <div data-aos="fade-up-left" className="group  relative h-[200px] md:rounded-[20px] rounded-[10px] overflow-hidden">
          <div className="w-full h-[200px] absolute items-end px-5 py-4 flex z-10">
            <p className="text-[30px] md:text-[45px] text-white ">Party</p>
          </div>
          <div className="absolute bg-gradient-to-b from-slate-700 opacity-50 to-black w-full h-[200px] group-hover:opacity-70 transition-all duration-300"></div>
          <img src="https://res.cloudinary.com/dldtrjalo/image/upload/v1712435926/3_u0b58p.jpg" className="w-full h-[200px] object-cover" alt="" />
        </div>


        <div data-aos="fade-up-right" className="group relative  h-[200px] md:rounded-[20px] rounded-[10px] overflow-hidden">
          <div className="w-full h-[200px] absolute items-end px-5 py-4 flex z-10">
            <p className="text-[30px] md:text-[45px] text-white ">Travel</p>
          </div>
          <div className="absolute bg-gradient-to-b from-slate-700 opacity-50 to-black w-full h-[200px] group-hover:opacity-70 transition-all duration-300"></div>
          <img src="https://res.cloudinary.com/dldtrjalo/image/upload/v1712435943/1_eourb8.jpg" className="w-full h-[200px] object-cover" alt="" />
        </div>


        <div data-aos="fade-up-left" className="group relative  h-[200px] md:rounded-[20px] rounded-[10px] overflow-hidden">
          <div className="w-full h-[200px] absolute items-end px-5 py-4 flex z-10">
            <p className="text-[30px] md:text-[45px] text-white ">Event</p>
          </div>
          <div className="absolute bg-gradient-to-b from-slate-700 opacity-50 to-black w-full h-[200px] group-hover:opacity-70 transition-all duration-300"></div>
          <img src="https://res.cloudinary.com/dldtrjalo/image/upload/v1712435948/2_awzzsw.jpg" className="w-full h-[200px] object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Service;
