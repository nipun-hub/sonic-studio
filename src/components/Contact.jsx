import React from "react";
import fb from "../assets/fb.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full border-t">
      <div className="max-w-7xl  mx-auto py-[100px] p-5 md:p-10 ">
        <div className="grid md:grid-cols-2 gap-10">

          <div className="grid gap-10 order-2 md:order-1">
            <div className="">
              <p className="md:text-[30px] text-[25px]">Call for any query</p>
              <div>
                <p className="text-[20px] md:text-[30px] mt-4 opacity-60">077 602 0150</p>
              </div>
            </div>
            <div className="">
              <p className="md:text-[30px] text-[25px]">We Love Getting E Mails</p>
              <div>
                <p className="text-[20px] md:text-[30px] mt-4 opacity-60">
                  <a href="mailTo:sonicstudiobalangoda@gmail.com" className="hover:underline">sonicstudiobalangoda@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="">
              <p className="md:text-[30px] text-[25px]">Visitors Are Always Welcome</p>
              <div>
                <p className="text-[20px] md:text-[30px] mt-4 opacity-60">
                  Brans Ratwatta Road, <br />
                  Balangoda 70100,
                  <br />
                  Rathnapura SG
                </p>
              </div>
            </div>
          </div>
          <a href="https://www.facebook.com/sonicstudiobalangoda" className="md:order-3">
          <img src="https://res.cloudinary.com/dldtrjalo/image/upload/v1712435930/fb_akglpy.jpg" className="md:rounded-[20px] rounded-[10px] md:order-3  w-full" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
