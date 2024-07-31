import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Talent from "../components/Talent";
import Experience from "../components/Experience";
import Service from "../components/Service";
import Logo from "../components/Logo";
import Team from "../components/Team";
import Client from "../components/Client";
import Contact from "../components/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Header />
      <Talent/>
      <Experience/>
      <Service/>
      <Logo/>
      <Client/> 
      <Team/>
      <Contact/>
    </>
  );
};

export default Home;
