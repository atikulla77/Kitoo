import React from "react";
import logo from "../image/kodify.png";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";


const Contact = (props) => {
  return (
    <main className={`w-full h-full relative `}>
      <div className="w-full h-full pt-[4.5rem] pb-[3rem] ">
        <p
          onClick={() => {
            props.hideContactpage();
          }}
          className={`w-[25px] h-[25px]  ${
            props.goHomePageButton ? "flex" : "hidden"
          } [@media(min-width:555px)]:text-[35px] text-[30px] rotate-[45deg] text-center justify-center items-center absolute [@media(min-width:555px)]:top-[1rem] top-[10px] [@media(min-width:555px)]:right-[1rem] right-[13px] cursor-pointer z-20 rounded-[50%]`}
        >
          +
        </p>

        <div className="w-full text-center text-white relative z-10 [@media(min-width:450px)]:pb-[50px] pb-[30px]">
              <h1 className="[@media(min-width:750px)]:text-[40px] [@media(min-width:420px)]:text-[30px] text-[25px] font-[700] [@media(min-width:750px)]:pb-[8px] pb-[5px] Poppins">
              Get in touch
              </h1>
              <p className="text-[#06f3f7] [@media(min-width:750px)]:text-[15px] [@media(min-width:420px)]:text-[14px] text-[13px] font-[500] mx-auto">
              Feel free to contact me anytimes
              </p>
            </div>

        <div className="mx-auto xl:w-[1230px] w-[96%]  relative z-[1] flex justify-center items-center">
          <div className="flex md:flex-row flex-col justify-center w-full text-white z-10">
            {/* Left Side: Company Information */}
            <div className="w-full lg:w-[40%] md:pr-6 pr-0 flex flex-col text-white md:text-left text-center mx-auto GeologicaFont">
            <h1 className="sm:text-[24px] [@media(min-width:450px)]:text-[20px] text-[18px] font-[500] mb-[15px] md:text-left text-center w-full">Contact Info</h1>

              <p className="md:mb-6 mb-3 md:text-[15px] text-[14px] w-full">
                Always available for freelance work if the right project comes
                along, Feel free to contact me!
              </p>
              <div className="w-full mb-[1.5rem]">
                <h3 className="text-[17px] font-semibold">
                  Contact Information
                </h3>
                <p className="mt-2 flex items-center text-[15px] md:justify-start justify-center">
                  <MdOutlineDriveFileRenameOutline className="mr-2" size={16} />
                  Russell Davis
                </p>
                <p className="mt-2 flex items-center text-[15px] md:justify-start justify-center">
                  <FaMapMarkerAlt className="mr-2" size={14} />
                  Rajshahi, Paba 6210, Bangladesh
                </p>
                <p className="mt-2 flex items-center text-[15px] md:justify-start justify-center">
                  <FaPhone className="mr-2" size={14} />
                  +880 173 966 3503
                </p>
                <p className="mt-2 flex items-center text-[15px] md:justify-start justify-center">
                  <FaEnvelope className="mr-2" size={14} />
                  kodify345@gmail.com
                </p>
              </div>
              <div className="w-full">
                <h3 className="sm:text-[17px] text-[16px] font-semibold">Follow Us</h3>
                <div className="flex space-x-4 mt-[12px] md:justify-start justify-center">
                  <a href="#" className="hover:text-primary transition-[0.3s]">
                    <FaFacebook className="sm:text-[20px] text-[17px]" />
                  </a>
                  <a href="#" className="hover:text-primary transition-[0.3s]">
                    <FaTwitter className="sm:text-[20px] text-[17px]" />
                  </a>
                  <a href="#" className="hover:text-primary transition-[0.3s]">
                    <FaLinkedin className="sm:text-[20px] text-[17px]" />
                  </a>
                  <a href="#" className="hover:text-primary transition-[0.3s]">
                    <FaInstagram className="sm:text-[20px] text-[17px]" />
                  </a>
                </div>
              </div>
            </div>
            {/* Right Side: Contact Form */}
            <div className="lg:w-[50%] w-[100%] Poppins mx-auto text-center lg:pb-0 pb-[1.5rem]">
              <h1 className="sm:text-[24px] [@media(min-width:450px)]:text-[20px] text-[18px] font-[500] mb-[15px] md:mt-0 mt-[1.5rem] md:text-left text-center w-full">Message Me</h1>
              <form className="">
                <div className="grid gap-[15px] mb-[15px] md:grid-cols-2 text-left">
                  <label className="relative">
                    <input
                      type="text"
                      id="fullName"
                      autoComplete="off"
                      required
                      placeholder="Your Name"
                      className=" shadow-[0px_0px_3px_0px_#0000008c] border-b-[1.5px] border-b-[#98989887] text-[#d1d1d1] [@media(min-width:450px)]:text-[14px] text-[13px] focus:border-b-[#98989887] block w-full px-[15px] py-[12px] dark:!bg-[#141414] dark:border-b-[#98989887] placeholder-[#d1d1d1] dark:focus:border-b-[#06f3f7] font-[400] outline-none"
                    />
                  </label>
                  <label className="relative">
                    <input
                      type="email"
                      id="email"
                      autoComplete="off"
                      required
                      placeholder="Email"
                      className=" shadow-[0px_0px_3px_0px_#0000008c] border-b-[1.5px] border-b-[#98989887] text-[#d1d1d1] [@media(min-width:450px)]:text-[14px] text-[13px] focus:border-b-[#98989887] block w-full px-[15px] py-[12px] dark:!bg-[#141414] dark:border-b-[#98989887] placeholder-[#d1d1d1] dark:focus:border-b-[#06f3f7] font-[400] outline-none"
                    />
                  </label>
                </div>
                <div className="mb-[15px] text-left">
                  <label className="relative">
                    <input
                      type="text"
                      id="subject"
                      autoComplete="off"
                      required
                      placeholder="Subject"
                      className=" shadow-[0px_0px_3px_0px_#0000008c] border-b-[1.5px] border-b-[#98989887] text-[#d1d1d1] [@media(min-width:450px)]:text-[14px] text-[13px] focus:border-b-[#98989887] block w-full px-[15px] py-[12px] dark:!bg-[#141414] dark:border-b-[#98989887] placeholder-[#d1d1d1] dark:focus:border-b-[#06f3f7] font-[400] outline-none"
                    />
                  </label>
                </div>
                <div className="mb-[15px] text-left">
                  <label className="relative">
                    <textarea
                      type="text"
                      id="message"
                      autoComplete="off"
                      required
                      rows="8 "
                      placeholder="Your message"
                      className=" shadow-[0px_0px_3px_0px_#0000008c] border-b-[1.5px] border-b-[#98989887] text-[#d1d1d1] [@media(min-width:450px)]:text-[14px] text-[13px] focus:border-b-[#98989887] block w-full px-[15px] py-[12px] dark:!bg-[#141414] dark:border-b-[#98989887] placeholder-[#d1d1d1] dark:focus:border-b-[#06f3f7] font-[400] outline-none"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  value="Submit Now"
                  className="[@media(min-width:450px)]:text-[14px] text-[13px] [@media(min-width:450px)]:px-[22px] px-[20px] [@media(min-width:450px)]:py-[8px] py-[7px] rounded-[50px] hover:!bg-transparent bg-[#06f3f7] text-[#000] hover:text-[#fff] border-[2px] border-[#06f3f7] transition-[0.4s]"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
