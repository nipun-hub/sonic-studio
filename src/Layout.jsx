import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import BounceLoader from "react-spinners/BounceLoader";
import Footer from "./components/Footer";

const Layout = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 4000);
  }, []);

  return (
    <>
      <div className={`fixed  flex top-0 left-0 h-screen right-0 z-50 justify-center items-center  bg-white ${loading? "" : " hidden"}`}>
        <BounceLoader color="#000" loading={loading} size={40} />
      </div>


      <div className={`relative !scroll-smooth overflow-hidden leading-none font-Rasa transition-all duration-300 ${loading? "opacity-0" : " opacity-100"} `}>
        <Navbar />
        <Outlet />
        <Footer/>
      </div>
    </>
  );
};

export default Layout;