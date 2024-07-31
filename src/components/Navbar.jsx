import React, { useRef, useState, useEffect } from "react";
import sonic from "../assets/logo2.png";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [bg, setBg] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const prevScrollY = useRef(0);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 500) {
        if (currentScrollY > 800) {
          setBg(true);
        }
        if (currentScrollY > prevScrollY.current) {
          // Scrolling down
          setIsNavbarVisible(false);
          setToggleMenu(false);
        } else {
          // Scrolling up
          setIsNavbarVisible(true);
        }
      } else {
        setIsNavbarVisible(true);
        setBg(false);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed 
      ${toggleMenu ? "bg-black bg-opacity-80" : ""} 

      ${bg ? "bg-black bg-opacity-80" : ""}
      
      z-40 left-0 right-0 top-0 transition-all duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between py-10 items-center md:px-10 px-5">
        <a href="#">
          <img className="md:h-[50px] h-[45px]" src={sonic} alt="" />
        </a>
       

        <button onClick={handleToggleMenu} className="">
          <div
            className={`w-[40px]  h-[4px] transition-all duration-300 bg-white  ${
              toggleMenu ? " rotate-45 translate-y-[12px]" : ""
            }`}
          ></div>
          <div
            className={`w-[30px] mx-auto h-[4px] transition-all duration-500 bg-white my-2 ${
              toggleMenu ? "opacity-0 w-0 " : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-[40px]  h-[4px] transition-all duration-300 bg-white  ${
              toggleMenu ? "translate-y-[-12px] -rotate-45" : ""
            }`}
          ></div>
        </button>
      </div>
      <div
        className={`${
          toggleMenu ? "py-[50px] h-[350px] border-t" : "h-0"
        } max-w-7xl overflow-hidden  transition-all duration-300 mx-auto grid  gap-10 text-white text-[22px] text-center `}
      >
        <a
          href="#talent"
          className="hover:text-gray-500 transition-all duration-300"
        >
          Our Talent
        </a>
        <a href="#service" className="hover:text-gray-500  transition-all duration-300">
          Our Service
        </a>
        <a href="#team" className="hover:text-gray-500  transition-all duration-300">
          Our Team
        </a>
        <a href="#contact">

        <button className="bg-white text-black hover:bg-opacity-60 transition-all duration-300 w-[200px] mx-auto rounded-lg py-2">
          Contact
        </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
