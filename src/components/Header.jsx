import React, { useEffect, useState } from "react";


const Header = () => {
  const images = [
    "https://res.cloudinary.com/dldtrjalo/image/upload/v1712435955/1_ignusf.jpg",
    "https://res.cloudinary.com/dldtrjalo/image/upload/v1712435958/3_zfjgx3.jpg",
    "https://res.cloudinary.com/dldtrjalo/image/upload/v1712435951/5_beeffl.jpg",
    "https://res.cloudinary.com/dldtrjalo/image/upload/v1712435947/4_zgexsf.jpg",
    "https://res.cloudinary.com/dldtrjalo/image/upload/v1712435942/2_wxpvv4.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div
      id="hero"
      className="relative flex justify-center w-full h-[950px] md:h-screen"
    >
      <div className="absolute w-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`w-full absolute brightness-50 object-cover h-[950px] min-h-[800px] md:h-screen grayscale contrast-100 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            alt=""
          />
        ))}
      </div>

      <div className="absolute   mt-[50px] max-w-7xl mx-auto md:h-screen h-[900px] items-center p-5 md:p-10 grid md:grid-cols-2 md:gap-10">
        <div data-aos="zoom-in-up" className="grid gap-5 mt-10 md:mt-0 ">
          <p className="md:text-[55px] leading-[40px] text-[35px] text-white md:leading-[60px]">
           We Are The World's Best Creative And Professional Photographers
          </p>
          <p className="md:text-[24px] text-[20px] text-white leading-[24px] opacity-50 md:leading-[30px]">
          We epitomize excellence in the realm of photography, blending creativity and professionalism seamlessly. With a keen eye for detail and an unwavering commitment to capturing moments, we stand as the premier choice for those seeking unparalleled visual storytelling and artistic expression.
          </p>
        </div>
        <div data-aos="zoom-in-up" className="bg-white md:p-3  rounded-lg">
          <div className=" relative md:h-[350px] h-[300px]">
            {" "}
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`rounded-lg w-full absolute  h-full object-cover transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
