import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navber from "./Navber";
import bgvideo from "../image/video.mp4";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Home() {
  const [pageAnimation, setpageAnimation] = useState(false);

  const pageAnimationTimeOut = () => {
    setpageAnimation(true);
    setTimeout(() => {
      setpageAnimation(false);
    }, 1500);
  };

  const [text] = useTypewriter({
    words: ["Developer", "Designer", "Freelancer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });
  return (
    <div className="w-full h-[100vh] overflow-hidden relative">
      <Navber />

      <video
        src={bgvideo}
        className="w-full h-full mx-auto absolute top-0 left-0 right-0 z-0 object-cover"
        autoPlay
        muted
        loop
      />
      <div className="bg-[#00000091] w-full h-full absolute top-0 left-0 right-0 z-[2]"></div>

      <div
        className={`bg-[black] w-full h-[120vh] absolute left-0 right-0 z-20 ${
          pageAnimation ? "siteMainAnimation" : "bottom-[100%]"
        }`}
      ></div>

      <div className="w-[100%] h-full Poppins text-white flex flex-col justify-center items-center relative text-center pt-[35px] z-10">
        <h1
          onClick={() => {
            pageAnimationTimeOut();
          }}
          className="[@media(min-width:745px)]:text-[70px] [@media(min-width:585px)]:text-[60px] [@media(min-width:445px)]:text-[50px] [@media(min-width:400px)]:text-[40px] text-[30px] font-[700] mx-auto text-[#fff] [@media(min-width:745px)]:mb-[34px] [@media(min-width:585px)]:mb-[24px] [@media(min-width:445px)]:mb-[14px] mb-[8px]"
        >
          Russell Davis
        </h1>
        <h1 className="[@media(min-width:745px)]:text-[32px] [@media(min-width:585px)]:text-[22px] [@media(min-width:445px)]:text-[16px] text-[14px] font-[400] mx-auto text-[#fff] [@media(min-width:445px)]:leading-[36px] leading-[25px]">
          i'm a
          <span className="text-[#fff] [@media(min-width:640px)]:pl-[10px] pl-[5px]">
            {text}
          </span>
          <span className="text-[#fff]">
            <Cursor cursorStyle="|" />
          </span>
        </h1>

        <div className="flex flex-col absolute [@media(min-width:435px)]:bottom-[2rem] bottom-[1rem] [@media(min-width:435px)]:left-[2rem] left-[1rem] ">
          <a href="#" className="">
            <FaFacebook className="[@media(min-width:435px)]:text-[20px] text-[17px]" />
          </a>
          <a href="" className="mt-[15px]">
            <FaTwitter className="[@media(min-width:435px)]:text-[20px] text-[17px]" />
          </a>
          <a href="" className="mt-[15px]">
            <FaInstagram className="[@media(min-width:435px)]:text-[20px] text-[17px]" />
          </a>
          <a href="" className="mt-[15px]">
            <FaLinkedin className="[@media(min-width:435px)]:text-[20px] text-[17px]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
