import React from "react";

import { MdOutlineDevices } from "react-icons/md";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { AiOutlineSolution } from "react-icons/ai";
import { MdOutlineWebhook } from "react-icons/md";
import { SiWebpack } from "react-icons/si";

const Service = () => {
  return (
    <section
      className="S_Main_Section GeologicaFont h-full w-full grid place-items-center pt-[3rem] pb-[1rem]"
      name="Service"
    >
      <div className="w-full text-center text-white relative z-10 sm2:pb-[35px] sm5:pb-[15px] pb-[40px]">
        <h1 className="sm2:text-[30px] sm4:text-[25px] text-[22px] font-semibold">
          Service
        </h1>
        <p className="text-[#03BFFF] sm2:text-[15px] text-[13px] sm2:w-[320px] w-[265px] mx-auto sm2:leading-[20px] leading-[18px]">
          I Provide The Best In Class Services For Our Customers
        </p>
      </div>
      <div className="S_Row flex flex-wrap justify-between xl:w-[1230px] md2:w-[815px] sm5:w-[400px] w-[310px] relative">
        <div className="mx-auto relative z-10" data-aos="fade-right">
          <div className="S_Card mx-auto  sm5:w-[390px] sm3:w-[310px] w-[290px] sm5:h-[280px] h-[250px] sm5:p-[2em_1.5em] sm3:p-[2em_1em] p-[2em_10px] rounded-[5px] cursor-pointer grid justify-center text-center mb-[25px]">
            <div
              className="S_Icon_Wrapper    bg-[#03BFFF] relative m-auto text-[30px] sm5:h-[2.5em] h-[2em] sm5:w-[2.5em] w-[2em] text-[#ffffff] rounded-[50%] grid place-items-center"
              style={{ transition: "0.5s" }}
            >
              <SiWebpack className="sm5:text-[40px] text-[30px]" />
            </div>
            <div className="sm5:h-[130px] h-[110px]">
              <p className="sm3:text-[20px] text-[18px] font-[600] text-[#fff] pt-[10px]">
                Custom Web Development
              </p>
              <p className="text-[#d8d8d8] sm5:text-[15px] sm3:text-[13px] text-[12px] sm5:leading-[1.4] sm3:leading-[1.2] leading-[1.3] tracking-[0.03em] mt-[0]">
                Build fully customized websites that cater to your specific
                business needs. Expertise in front-end and back-end development
                using the latest technologies
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto relative z-10">
          <div className="S_Card mx-auto  sm5:w-[390px] sm3:w-[310px] w-[290px] sm5:h-[280px] h-[250px] sm5:p-[2em_1.5em] sm3:p-[2em_1em] p-[2em_10px] rounded-[5px] cursor-pointer grid justify-center text-center mb-[25px]">
            <div
              className="S_Icon_Wrapper    bg-[#03BFFF] relative m-auto text-[30px] sm5:h-[2.5em] h-[2em] sm5:w-[2.5em] w-[2em] text-[#ffffff] rounded-[50%] grid place-items-center"
              style={{ transition: "0.5s" }}
            >
              <MdOutlineWebhook className="sm5:text-[40px] text-[30px]" />
            </div>
            <div className="sm5:h-[130px] h-[110px]">
              <p className="sm3:text-[20px] text-[18px] font-[600] text-[#fff] pt-[10px]">
                Responsive Web Design
              </p>
              <p className="text-[#d8d8d8] sm5:text-[15px] sm3:text-[13px] text-[12px] sm5:leading-[1.4] sm3:leading-[1.2] leading-[1.3] tracking-[0.03em] mt-[0]">
                Creating mobile-first, responsive websites that look great on
                all devices. I ensure your site is functional and user-friendly
                across desktops, tablets, and mobile phones.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto relative z-10" data-aos="fade-down-right">
          <div className="S_Card mx-auto  sm5:w-[390px] sm3:w-[310px] w-[290px] sm5:h-[280px] h-[250px] sm5:p-[2em_1.5em] sm3:p-[2em_1em] p-[2em_10px] rounded-[5px] cursor-pointer grid justify-center text-center mb-[25px]">
            <div
              className="S_Icon_Wrapper    bg-[#03BFFF] relative m-auto text-[30px] sm5:h-[2.5em] h-[2em] sm5:w-[2.5em] w-[2em] text-[#ffffff] rounded-[50%] grid place-items-center"
              style={{ transition: "0.5s" }}
            >
              <AiOutlineSolution className="sm5:text-[40px] text-[30px]" />
            </div>
            <div className="sm5:h-[130px] h-[110px]">
              <p className="sm3:text-[20px] text-[18px] font-[600] text-[#fff] pt-[10px]">
                E-Commerce Solutions
              </p>
              <p className="text-[#d8d8d8] sm5:text-[15px] sm3:text-[13px] text-[12px] sm5:leading-[1.4] sm3:leading-[1.2] leading-[1.3] tracking-[0.03em] mt-[0]">
                Helping businesses set up online stores with platforms like
                Shopify, WooCommerce, or custom-built solutions. Integrated
                payment systems and intuitive user experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto relative z-10" data-aos="fade-right">
          <div className="S_Card mx-auto  sm5:w-[390px] sm3:w-[310px] w-[290px] sm5:h-[280px] h-[250px] sm5:p-[2em_1.5em] sm3:p-[2em_1em] p-[2em_10px] rounded-[5px] cursor-pointer grid justify-center text-center mb-[25px]">
            <div
              className="S_Icon_Wrapper    bg-[#03BFFF] relative m-auto text-[30px] sm5:h-[2.5em] h-[2em] sm5:w-[2.5em] w-[2em] text-[#ffffff] rounded-[50%] grid place-items-center"
              style={{ transition: "0.5s" }}
            >
              <BiSupport className="sm5:text-[40px] text-[30px]" />
            </div>
            <div className="sm5:h-[130px] h-[110px]">
              <p className="sm3:text-[20px] text-[18px] font-[600] text-[#fff] pt-[10px]">
                Website Maintenance & Support
              </p>
              <p className="text-[#d8d8d8] sm5:text-[15px] sm3:text-[13px] text-[12px] sm5:leading-[1.4] sm3:leading-[1.2] leading-[1.3] tracking-[0.03em] mt-[0]">
                Ongoing maintenance, performance optimization, and updates to
                ensure your site is secure, fast, and up to date.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto relative z-10">
          <div className="S_Card mx-auto  sm5:w-[390px] sm3:w-[310px] w-[290px] sm5:h-[280px] h-[250px] sm5:p-[2em_1.5em] sm3:p-[2em_1em] p-[2em_10px] rounded-[5px] cursor-pointer grid justify-center text-center mb-[25px]">
            <div
              className="S_Icon_Wrapper    bg-[#03BFFF] relative m-auto text-[30px] sm5:h-[2.5em] h-[2em] sm5:w-[2.5em] w-[2em] text-[#ffffff] rounded-[50%] grid place-items-center"
              style={{ transition: "0.5s" }}
            >
              <MdOutlineSettingsApplications className="sm5:text-[40px] text-[30px]" />
            </div>
            <div className="sm5:h-[130px] h-[110px]">
              <p className="sm3:text-[20px] text-[18px] font-[600] text-[#fff] pt-[10px]">
                Web Application Development
              </p>
              <p className="text-[#d8d8d8] sm5:text-[15px] sm3:text-[13px] text-[12px] sm5:leading-[1.4] sm3:leading-[1.2] leading-[1.3] tracking-[0.03em] mt-[0]">
                Developing dynamic, interactive web applications tailored to
                your business needs using modern frameworks and tools.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto relative z-10" data-aos="fade-down-right">
          <div className="S_Card mx-auto  sm5:w-[390px] sm3:w-[310px] w-[290px] sm5:h-[280px] h-[250px] sm5:p-[2em_1.5em] sm3:p-[2em_1em] p-[2em_10px] rounded-[5px] cursor-pointer grid justify-center text-center mb-[25px]">
            <div
              className="S_Icon_Wrapper    bg-[#03BFFF] relative m-auto text-[30px] sm5:h-[2.5em] h-[2em] sm5:w-[2.5em] w-[2em] text-[#ffffff] rounded-[50%] grid place-items-center"
              style={{ transition: "0.5s" }}
            >
              <MdOutlineDevices className="sm5:text-[32px] text-[26px]" />
            </div>
            <div className="sm5:h-[130px] h-[110px]">
              <p className="sm3:text-[20px] text-[18px] font-[600] text-[#fff] pt-[10px]">
                UX/UI Design
              </p>
              <p className="text-[#d8d8d8] sm5:text-[15px] sm3:text-[13px] text-[12px] sm5:leading-[1.4] sm3:leading-[1.2] leading-[1.3] tracking-[0.03em] mt-[0] ">
                Designing intuitive and user-friendly interfaces that provide a
                seamless experience for your audience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
