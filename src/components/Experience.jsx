import React from "react";
import bg1 from "../assets/exper/1.jpg";
import ex from "../assets/exper/ex.jpg";

const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 py-[100px] items-center gap-5">
      <div data-aos="fade-up-right" className="grid  grid-cols-1 w-full mx-auto">
        <img src="https://res.cloudinary.com/dldtrjalo/image/upload/v1712435933/ex_hj2b6c.jpg" className="w-full px-5" alt="" />
      </div>

      <div data-aos="fade-up-left" className="mt-20 md:mt-0 p-5 md:10 order-1 z-10">
        <p className="md:text-[45px] text-[35px]">
        We're the top photographers, combining creativity and professionalism perfectly. We capture moments with precision and flair, delivering unmatched visual stories. Choose us for the best in artistic expression and memorable photography experiences.
        </p>
      </div>
    </div>
  );
};

export default Experience;
