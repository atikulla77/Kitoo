import { useState } from "react";
import logo from "../image/kodify.png";

import { HiOutlineMenu } from "react-icons/hi";


function Navber() {
  const [nevMobileVButton, setNevMobileVButton] = useState(false);

  const navItems = [
    {
      id: 1,
      name: "About",
    },
    {
      id: 2,
      name: "Resume",
    },
    {
      id: 3,
      name: "Portfolio",
    },
    {
      id: 4,
      name: "Blog",
    },
    {
      id: 5,
      name: "Contact",
    },
  ];

  return (
    <div className={` w-full flex fixed top-[0px] z-50`}>
      <nav
        className={`text-white w-full relative bg-transparent`}
      >
        <div className="mx-auto [@media(min-width:600px)]:px-[3rem] [@media(min-width:400px)]:px-[2rem] px-[1.5rem] w-[100%]" data-aos="fade-down">
          <div className="items-center [@media(min-width:530px)]:h-[5rem] h-[4rem] flex justify-between w-full Poppins">
            <div className="flex items-center z-[2]">
              <img
                src={logo}
                className="[@media(min-width:420px)]:w-[70px] w-[50px] select-none cursor-pointer"
              />
            </div>
            {/* ---------------Web Nav Item--------------- */}
            <div className="[@media(min-width:715px)]:flex hidden items-center justify-center text-white mt-[5px] ">
              <div className="flex sm:space-x-4 space-x-1">
                {navItems.map((key) => {
                  return (
                    <p
                      key={key.id}
                      className="sm:px-3 px-[5px] py-2 text-sm font-medium cursor-pointer"
                    >
                      {key.name}
                    </p>
                  );
                })}
              </div>
            </div>
            {/* ---------------Mobile Nav Button--------------- */}
            <div
              className={`${
                nevMobileVButton
                  ? "hidden"
                  : "flex [@media(min-width:715px)]:hidden"
              } z-[2]`}
              onClick={() => setNevMobileVButton(true)}
            >
              <HiOutlineMenu className="[@media(min-width:420px)]:text-[25px] text-[23px]" />
            </div>
            <div
              className={`${
                nevMobileVButton
                  ? "flex [@media(min-width:715px)]:hidden"
                  : "hidden"
              } z-[2]`}
              onClick={() => setNevMobileVButton(false)}
            >
              <p className="[@media(min-width:420px)]:text-[40px] text-[38px] rotate-[45deg]">
                +
              </p>
            </div>
            {/* ---------------Mobile Nav Item--------------- */}
            <div
              className={`absolute top-0 left-0 w-full h-[100vh] bg-[#000000e6] z-0 ${
                nevMobileVButton ? "flex sm:hidden" : "hidden"
              }`}
            >
              <div className="w-full h-full flex flex-col justify-center items-center">
                {navItems.map((key) => {
                  return (
                    <p
                      key={key.id}
                      className="sm:px-3 px-[5px] py-2 [@media(min-width:420px)]:text-base text-[14px] font-medium cursor-pointer block"
                      onClick={() => setNevMobileVButton(false)}
                    >
                      {key.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navber;
