import React from "react";


const Talent = () => {
  return (
    <div id="talent" className=" w-full  max-w-7xl md:py-[200px] pb-[100px] px-2 mx-auto mt-[80px] md:mt-[50px] text-center ">
      <p data-aos="fade-up" className="text-[35px] md:text-[55px]">
        Our Talent
      </p>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-10 md:mt-[80px] mt-[40px] p-3 ">
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="col-span-2  md:rounded-[20px] rounded-[10px] h-[250px] md:h-[480px] object-cover w-full"
          src="https://res.cloudinary.com/dldtrjalo/image/upload/v1712435928/3_lls0yr.jpg"
          alt=""
        />
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="col-span-1 md:rounded-[20px] rounded-[10px] h-[250px] md:h-[480px] object-cover w-full"
          src="https://res.cloudinary.com/dldtrjalo/image/upload/v1712435927/2_goxb31.jpg"
          alt=""
        />
        <div className="col-span-3 md:col-span-2">
          <div className="h-[400px] grid gap-2 md:gap-10">
            <img
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className=" md:rounded-[20px] rounded-[10px] h-[220px]  object-cover w-full"
              src="https://res.cloudinary.com/dldtrjalo/image/upload/v1712435938/1_mtzef3.jpg"
              alt=""
            />
            <div className="md:h-[220px] h-[180px] gap-2 md:gap-10 grid grid-cols-2">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="md:h-[220px] h-[180px] md:rounded-[20px] rounded-[10px]  object-cover w-full"
                src="https://res.cloudinary.com/dldtrjalo/image/upload/v1712435939/4_xtozc8.jpg"
                alt=""
              />

              <a
                href="https://www.facebook.com/sonicstudiobalangoda"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="md:rounded-[20px] cursor-pointer rounded-[10px] bg-black justify-center items-center flex"
              >
                <p className="text-[32px] text-white font-medium">More +</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talent;
