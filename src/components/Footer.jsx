import React from "react";

const Footer = () => {
  return (
    <div className="border-t">
      <div className="max-w-7xl grid gap-2 md:flex mx-auto py-[20px] md:justify-between p-10">
        <p className="md:text-[24px] text-[18px] opacity-60">Copyright © 2002-2024 Sonic Studio. All Rights Reserved.</p>
        <p className="md:text-[24px] text-[18px] hidden  md:flex opacity-60"> Designed By <span className="underline ml-2"> Weba Lanka</span></p>
      </div>
    </div>
  );
};

export default Footer;
