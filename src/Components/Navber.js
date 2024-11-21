import { useState } from "react";
import logo from "../image/kodify.png";

import { HiOutlineMenu } from "react-icons/hi";


function Navber(props) {
  const [nevMobileVButton, setNevMobileVButton] = useState(false);

  const navItems = [
    {
      id: 1,
      name: "About",
      onClick: props.showAboutPage,
    },
    {
      id: 2,
      name: "Resume",
      onClick: props.showResumePage,
    },
    {
      id: 3,
      name: "Portfolio",
      onClick: props.showPortfolioPage,
    },
    {
      id: 4,
      name: "Blog",
      onClick: props.showBlogPage,
    },
    {
      id: 5,
      name: "Contact",
      onClick: props.showContactPage,
    },
  ];

  return (
    <div className={` w-full ${props.showHome ? "flex" : "hidden"} fixed top-[0px] z-30`}>
      <nav
        className={`text-white w-full relative bg-transparent`}
      >
        <div className="mx-auto [@media(min-width:600px)]:px-[3rem] [@media(min-width:400px)]:px-[2rem] px-[1.5rem] w-[100%]" >
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
                      onClick={key.onClick}
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
              <HiOutlineMenu className="[@media(min-width:555px)]:text-[25px] text-[20px]" />
            </div>
            <div
              className={`${
                nevMobileVButton
                  ? "flex [@media(min-width:715px)]:hidden"
                  : "hidden"
              } z-[2]`}
              onClick={() => setNevMobileVButton(false)}
            >
              <p className="[@media(min-width:555px)]:text-[40px] text-[35px] rotate-[45deg]">
                +
              </p>
            </div>
            {/* ---------------Mobile Nav Item--------------- */}
            <div
              className={`absolute top-0 left-0 w-full h-[100vh] bg-[#000000e6] z-0 ${
                nevMobileVButton ? "flex [@media(min-width:715px)]:hidden" : "hidden"
              }`}
            >
              <div className="w-full h-full flex flex-col justify-center items-center">
                {navItems.map((key) => {
                  return (
                    <p
                      key={key.id}
                      className="sm:px-3 px-[5px] py-2 [@media(min-width:420px)]:text-base text-[14px] font-[400] cursor-pointer block"
                      onClick={() => {setNevMobileVButton(false); key.onClick()}}
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
